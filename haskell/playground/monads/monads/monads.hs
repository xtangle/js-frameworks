import           Control.Monad

-- Monad laws
-- 1. left identity:  return x >>= f   =  f x
-- 2. right identity: m >>= return     =  m
-- 3. associativity:  (m >>= f) >>= g  =  m >>= (\x -> f x >>= g)
h =
    let f x = [x, -x]
        g x = [x * 3, x * 2]
     in f <=< g

type Birds = Int

type Pole = (Birds, Birds)

landLeft :: Birds -> Pole -> Maybe Pole
landLeft n (left, right)
    | abs ((left + n) - right) < 4 = Just (left + n, right)
    | otherwise = Nothing

landRight :: Birds -> Pole -> Maybe Pole
landRight n (left, right)
    | abs (left - (right + n)) < 4 = Just (left, right + n)
    | otherwise = Nothing

-- try:
-- return (0, 0) >>= landLeft 1 >>= landRight 4 >>= landRight (-2)
-- return (0, 0) >>= landLeft 1 >>= landRight 4 >>= landLeft (-1) >>= landRight (-2)
banana :: Pole -> Maybe Pole
banana _ = Nothing

routine :: Maybe Pole
routine = do
    let start = (0, 0)
    first <- landLeft 2 start
    second <- landRight 2 first
    landLeft 1 second

-- or:
-- return (0, 0) >>= landLeft 2 >>= landRight 2 >>= landLeft 1
routine' :: Maybe Pole
routine' = do
    let start = (0, 0)
    first <- landLeft 2 start
    Nothing
    second <- landRight 2 first
    landLeft 1 second
-- or:
-- return (0, 0) >>= landLeft 2 >>= landRight 2 >> Nothing >>= landLeft 1
