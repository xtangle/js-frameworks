import           System.Environment
import           System.Random

main = do
    (len:fileName:_) <- getArgs
    gen <- getStdGen
    let dists = genDists (read len) gen
    writeFile fileName $ unlines $ map show dists

genDists :: (RandomGen g) => Int -> g -> [Int]
genDists len gen = reverse $ 0 : take (len * 3 - 1) (randomRs (1, 100) gen)
