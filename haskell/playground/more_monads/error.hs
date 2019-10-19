type Birds = Int

type Pole = (Birds, Birds)

landLeft :: Birds -> Pole -> Either String Pole
landLeft n (left, right)
    | abs (left' - right) < 4 = Right (left', right)
    | otherwise = Left $ "left side had " ++ show left' ++ " birds, right side had " ++ show right ++ " birds"
  where
    left' = left + n

landRight :: Birds -> Pole -> Either String Pole
landRight n (left, right)
    | abs (left - right') < 4 = Right (left, right')
    | otherwise = Left $ "left side had " ++ show left ++ " birds, right side had " ++ show right' ++ " birds"
  where
    right' = right + n

-- try:
-- return (0, 0) >>= landLeft 1 >>= landRight 4 >>= landRight (-2)
-- return (0, 0) >>= landLeft 1 >>= landRight 4 >>= landLeft (-1) >>= landRight (-2)
-- return (0, 0) >>= landLeft 1 >>= landRight 4 >>= banana >>= landRight (-2)
banana :: Pole -> Either String Pole
banana _ = Left "oops, slipped on a banana!"

routine :: Either String Pole
routine = do
    let start = (0, 0)
    first <- landLeft 2 start
    second <- landRight 2 first
    landLeft 1 second
