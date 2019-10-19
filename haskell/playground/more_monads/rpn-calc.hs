import           Control.Monad
import           Data.List

-- try:
-- solveRPN "1 2 * 4 +"
-- solveRPN "1 2 * 4 + 5 *"
-- solveRPN "1 2 * 4"
-- solveRPN "1 8 wharglbllargh"
solveRPN :: String -> Maybe Double
solveRPN st = do
    [result] <- foldM foldingFunction [] (words st)
    return result

foldingFunction :: [Double] -> String -> Maybe [Double]
foldingFunction (x:y:ys) "*"    = return ((x * y) : ys)
foldingFunction (x:y:ys) "+"    = return ((x + y) : ys)
foldingFunction (x:y:ys) "-"    = return ((y - x) : ys)
foldingFunction xs numberString = fmap (: xs) (readMaybe numberString)

readMaybe :: (Read a) => String -> Maybe a
readMaybe st =
    case reads st of
        [(x, "")] -> Just x
        _         -> Nothing
