import           Control.Monad (guard)
import           Data.List     (last)

type KnightPos = (Int, Int)

moveKnight :: KnightPos -> [KnightPos]
moveKnight (c, r) = do
    (c', r') <-
        [ (c + 2, r - 1)
        , (c + 2, r + 1)
        , (c - 2, r - 1)
        , (c - 2, r + 1)
        , (c + 1, r - 2)
        , (c + 1, r + 2)
        , (c - 1, r - 2)
        , (c - 1, r + 2)
        ]
    guard (c' `elem` [1 .. 8] && r' `elem` [1 .. 8])
    return (c', r')

paths :: KnightPos -> [[KnightPos]]
paths start =
    let addMoves :: [KnightPos] -> [[KnightPos]]
        addMoves ls@(x:_) = (: ls) <$> moveKnight x
        pathsFrom :: [[KnightPos]] -> [[KnightPos]]
        pathsFrom paths = paths ++ pathsFrom (paths >>= addMoves)
     in map reverse $ pathsFrom (addMoves [start])

pathsIn :: KnightPos -> Int -> [[KnightPos]]
pathsIn start n =
    let paths' = paths start
        bounded = takeWhile ((<= n + 1) . length)
     in bounded paths'

pathsTo :: KnightPos -> KnightPos -> [[KnightPos]]
pathsTo start end =
    let ended = filter ((== end) . last)
     in ended $ paths start

minMovesTo :: KnightPos -> KnightPos -> Int
minMovesTo start end = subtract 1 . length . head $ pathsTo start end
