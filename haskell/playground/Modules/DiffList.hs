module Modules.DiffList
    ( DiffList
    , toDiffList
    , fromDiffList
    ) where

newtype DiffList a =
    DiffList
        { getDiffList :: [a] -> [a]
        }

instance Semigroup (DiffList a) where
    (DiffList f) <> (DiffList g) = DiffList (f . g)

instance Monoid (DiffList a) where
    mempty = DiffList (\xs -> [] ++ xs)

toDiffList :: [a] -> DiffList a
toDiffList xs = DiffList (xs ++)

fromDiffList :: DiffList a -> [a]
fromDiffList (DiffList f) = f []
-- try:
-- fromDiffList (toDiffList [1,2,3,4] `mappend` toDiffList [1,2,3])
