import           Data.List

data Section =
    Section
        { getA :: Int
        , getB :: Int
        , getC :: Int
        }
    deriving (Show)

type RoadSystem = [Section]

data Label
    = A
    | B
    | C
    deriving (Show)

type Path = [(Label, Int)]

type Dist = Int

heathrowToLondon :: RoadSystem
heathrowToLondon = [Section 50 10 30, Section 5 90 20, Section 40 2 25, Section 10 8 0]

roadStep :: ((Path, Dist), (Path, Dist)) -> Section -> ((Path, Dist), (Path, Dist))
roadStep ((p1, d1), (p2, d2)) (Section a b c) =
    let d1_1 = d1 + a
        d1_2 = d2 + b + c
        d2_1 = d2 + b
        d2_2 = d1 + a + c
        (p1', d1') =
            if d1_1 < d1_2
                then ((A, a) : p1, d1_1)
                else ((C, c) : (B, b) : p2, d1_2)
        (p2', d2') =
            if d2_1 < d2_2
                then ((B, b) : p2, d2_1)
                else ((C, c) : (A, a) : p1, d2_2)
     in ((p1', d1'), (p2', d2'))

optimalPath :: RoadSystem -> Path
optimalPath system =
    let ((p1, d1), (p2, d2)) = foldl' roadStep (([], 0), ([], 0)) system
        p =
            if d1 < d2
                then p1
                else p2
     in reverse p

groupsOf :: Int -> [a] -> [[a]]
groupsOf 0 _  = undefined
groupsOf _ [] = []
groupsOf n xs = take n xs : groupsOf n (drop n xs)

main = do
    contents <- getContents
    let threes = groupsOf 3 (map read $ lines contents)
        roadSystem = map (\[a, b, c] -> Section a b c) threes
        path = optimalPath roadSystem
        pathString = concatMap (show . fst) path
        pathPrice = sum $ map snd path
    putStrLn $ "The best path to take is: " ++ pathString
    putStrLn $ "The price is: " ++ show pathPrice
