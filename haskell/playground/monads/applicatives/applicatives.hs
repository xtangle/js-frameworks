import           Control.Applicative (liftA2)

-- try:
-- (++) <$> Just "johntra" <*> Just "volta"
-- [(+),(*)] <*> [1,2] <*> [3,4]
-- (++) <$> getLine <*> getLine
-- (\x y z -> [x,y,z]) <$> (+3) <*> (*2) <*> (/2) $ 5
-- getZipList $ (,,) <$> ZipList "dog" <*> ZipList "cat" <*> ZipList "rat"

sequenceA :: (Applicative f) => [f a] -> f [a]
sequenceA = foldr (liftA2 (:)) (pure [])
-- sequenceA [Just 3, Just 2, Just 1]
-- sequenceA [Just 3, Nothing, Just 1]
-- sequenceA [(+3),(+2),(+1)] 3
-- sequenceA [[1,2,3],[4,5,6]]
-- sequenceA [[1,2,3],[4,5,6],[3,4,4],[]]
-- and $ sequenceA [(>4),(<10),odd] 7

-- Applicative Functor laws
-- 1. pure f <*> x = fmap f x
-- 2. pure id <*> v = v
-- 3. pure (.) <*> u <*> v <*> w = u <*> (v <*> w)
-- 4. pure f <*> pure x = pure (f x)
-- 5. u <*> pure y = pure ($ y) <*> u
