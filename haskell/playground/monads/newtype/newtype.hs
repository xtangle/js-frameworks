newtype Pair b a =
    Pair
        { getPair :: (a, b)
        }
    deriving (Show)

instance Functor (Pair c) where
    fmap f (Pair (x, y)) = Pair (f x, y)

newtypeExample1 = print $ getPair $ fmap (* 100) (Pair (2, 3))
