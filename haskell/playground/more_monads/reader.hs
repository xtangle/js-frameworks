-- try:
-- addStuff 3
addStuff :: Int -> Int
addStuff = do
    a <- (* 2)
    b <- (+ 10)
    return (a + b)
