import qualified Data.Foldable as F
import           Data.Monoid

data Tree a
    = Empty
    | Node a (Tree a) (Tree a)
    deriving (Show, Read, Eq)

instance F.Foldable Tree where
    foldMap f Empty = mempty
    foldMap f (Node x l r) = F.foldMap f l `mappend` f x `mappend` F.foldMap f r

testTree = Node 5 (Node 3 (Node 1 Empty Empty) (Node 6 Empty Empty)) (Node 9 (Node 8 Empty Empty) (Node 10 Empty Empty))

fold1 = F.foldl (+) 0 testTree

fold2 = F.foldl (*) 1 testTree

fold3 = getAny $ F.foldMap (\x -> Any $ x == 3) testTree

fold4 = getAny $ F.foldMap (\x -> Any $ x == 4) testTree

fold5 = F.foldMap (\x -> [x]) testTree
