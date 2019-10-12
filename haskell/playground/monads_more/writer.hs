import           Control.Monad.Writer
import           Modules.DiffList

-- try:
-- runWriter (return 3 :: Writer String Int)
-- runWriter (return 3 :: Writer (Sum Int) Int)
-- runWriter (return 3 :: Writer (Product Int) Int)
logNumber :: Int -> Writer [String] Int
logNumber x = writer (x, ["Got number: " ++ show x])

-- try:
-- runWriter multWithLog
multWithLog :: Writer [String] Int
multWithLog = do
    a <- logNumber 3
    b <- logNumber 5
    tell ["Gonna multiply these two"]
    return (a * b)

-- try:
-- runWriter $ gcd' 3 8
-- mapM_ putStrLn $ snd $ runWriter (gcd' 8 3)
-- more efficient: a ++ (b ++ (c ++ (d ++ (e ++ f))))
gcd' :: Int -> Int -> Writer [String] Int
gcd' a b
    | b == 0 = do
        tell ["Finished with " ++ show a]
        return a
    | otherwise = do
        let m = a `mod` b
        tell [show a ++ " mod " ++ show b ++ " = " ++ show m]
        gcd' b m

-- try:
-- mapM_ putStrLn $ snd $ runWriter (gcdReverse 8 3)
-- inefficient: ((((a ++ b) ++ c) ++ d) ++ e) ++ f
gcdReverse :: Int -> Int -> Writer [String] Int
gcdReverse a b
    | b == 0 = do
        tell ["Finished with " ++ show a]
        return a
    | otherwise = do
        let m = a `mod` b
        result <- gcdReverse b m
        tell [show a ++ " mod " ++ show b ++ " = " ++ show m]
        return result

-- try:
-- mapM_ putStrLn . fromDiffList . snd . runWriter $ gcdReverse 110 34
-- more efficient version using DiffLists
gcdReverse' :: Int -> Int -> Writer (DiffList String) Int
gcdReverse' a b
    | b == 0 = do
        tell (toDiffList ["Finished with " ++ show a])
        return a
    | otherwise = do
        let m = a `mod` b
        result <- gcdReverse' b m
        tell (toDiffList [show a ++ " mod " ++ show b ++ " = " ++ show m])
        return result
