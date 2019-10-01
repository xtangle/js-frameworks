import           Data.List
import           System.Directory
import           System.Environment
import           System.IO

main = do
    (command:args) <- getArgs
    let (Just action) = lookup command dispatch
    action args

dispatch :: [(String, [String] -> IO ())]
dispatch = [("add", add), ("view", view), ("remove", remove), ("bump", bump)]

add :: [String] -> IO ()
add [fileName, todoItem] = appendFile fileName (todoItem ++ "\n")

view :: [String] -> IO ()
view [fileName] = do
    contents <- readFile fileName
    let todoTasks = lines contents
        numberedTasks = zipWith (\n line -> show n ++ " - " ++ line) [0 ..] todoTasks
    mapM_ putStrLn numberedTasks

remove :: [String] -> IO ()
remove [fileName, numberString] = _modifyTodoList fileName numberString (flip delete)

bump :: [String] -> IO ()
bump [fileName, numberString] = _modifyTodoList fileName numberString (\todoTasks task -> task : delete task todoTasks)

_modifyTodoList :: String -> String -> ([String] -> String -> [String]) -> IO ()
_modifyTodoList fileName numberString createNewTodoItems = do
    handle <- openFile fileName ReadMode
    (tempName, tempHandle) <- openTempFile "." "temp"
    contents <- hGetContents handle
    let number = read numberString
        todoTasks = lines contents
        task = todoTasks !! number
        newTodoItems = createNewTodoItems todoTasks task
    hPutStr tempHandle $ unlines newTodoItems
    hClose handle
    hClose tempHandle
    removeFile fileName
    renameFile tempName fileName
