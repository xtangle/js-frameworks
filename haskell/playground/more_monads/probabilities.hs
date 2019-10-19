import           Data.List  (all)
import           Data.Maybe
import           Data.Ratio

newtype Prob a =
    Prob
        { getProb :: [(a, Rational)]
        }
    deriving (Show)

-- try:
-- fmap negate (Prob [(3,1%2),(5,1%4),(9,1%4)])
instance Functor Prob where
    fmap f (Prob xs) = Prob $ map (\(x, p) -> (f x, p)) xs

flatten :: Prob (Prob a) -> Prob a
flatten (Prob xs) = Prob $ concatMap multAll xs
  where
    multAll (Prob innerxs, p) = map (\(x, r) -> (x, p * r)) innerxs

instance Applicative Prob where
    pure x = Prob [(x, 1 % 1)]
    (Prob fs) <*> (Prob xs) = Prob [(f x, p * p') | (f, p) <- fs, (x, p') <- xs]

instance Monad Prob where
    m >>= f = flatten (fmap f m)
    fail _ = Prob []

-- Coin example
data Coin
    = Heads
    | Tails
    deriving (Show, Eq)

coin :: Prob Coin
coin = Prob [(Heads, 1 % 2), (Tails, 1 % 2)]

loadedCoin :: Prob Coin
loadedCoin = Prob [(Heads, 1 % 10), (Tails, 9 % 10)]

flipThree :: Prob Bool
flipThree = do
    a <- coin
    b <- coin
    c <- loadedCoin
    return $ all (== Tails) [a, b, c]

-- try
-- collectProb flipThree
collectProb :: (Eq a) => Prob a -> Prob a
collectProb (Prob xs) = Prob $ foldl go [] xs
  where
    findp x acc = fromMaybe 0 (lookup x acc)
    go acc (x, p) = (x, p + findp x acc) : filter ((/= x) . fst) acc
