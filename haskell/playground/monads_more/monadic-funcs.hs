import           Control.Monad
import           Control.Monad.State
import           Control.Monad.Writer
import           Modules.Stack

--
-- try:
--
-- The liftM function (similar to fmap for functors)
-- liftM (*3) (Just 8)
-- runWriter $ liftM not $ writer (True, "chickpeas")
-- runState (liftM (+100) pop) [1,2,3,4]
--
-- The ap function (similar to <*> for applicative functors)
-- Just (+3) `ap` Just 4
-- [(+1),(+2),(+3)] `ap` [10,11]
--
-- The join function
-- join (Just (Just 9))
-- join [[1,2,3],[4,5,6]]
-- runWriter $ join (writer (writer (1,"aaa"),"bbb"))
-- join (Right (Right 9)) :: Either String Int
-- join (Right (Left "error")) :: Either String Int
-- runState (join (state $ \s -> (push 10,1:2:s))) [0,0,0]
--
-- The filterM function
-- try:
-- mapM_ putStrLn $ snd $ runWriter $ filterM keepSmall [9,1,5,2,10,3]
keepSmall :: Int -> Writer [String] Bool
keepSmall x
    | x < 4 = do
        tell ["Keeping " ++ show x]
        return True
    | otherwise = do
        tell [show x ++ " is too large, throwing it away"]
        return False

powerset :: [a] -> [[a]]
powerset = filterM (const [True, False])

--
-- The foldM function
-- try:
-- foldM binSmalls 0 [2,8,3,1]
-- foldM binSmalls 0 [2,11,3,1]
binSmalls :: Int -> Int -> Maybe Int
binSmalls acc x
    | x > 9 = Nothing
    | otherwise = Just (acc + x)
