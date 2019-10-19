x -: f = f x

data Tree a
    = Empty
    | Node a (Tree a) (Tree a)
    deriving (Show)

data Crumb a
    = LeftCrumb a (Tree a)
    | RightCrumb a (Tree a)
    deriving (Show)

type Breadcrumbs a = [Crumb a]

type Zipper a = (Tree a, Breadcrumbs a)

goLeft :: Zipper a -> Zipper a
goLeft (Node x l r, bs) = (l, LeftCrumb x r : bs)

goRight :: Zipper a -> Zipper a
goRight (Node x l r, bs) = (r, RightCrumb x l : bs)

goUp :: Zipper a -> Zipper a
goUp (t, LeftCrumb x r:bs)  = (Node x t r, bs)
goUp (t, RightCrumb x l:bs) = (Node x l t, bs)

modify :: (a -> a) -> Zipper a -> Zipper a
modify f (Node x l r, bs) = (Node (f x) l r, bs)
modify f (Empty, bs)      = (Empty, bs)

attach :: Tree a -> Zipper a -> Zipper a
attach t (_, bs) = (t, bs)

topMost :: Zipper a -> Zipper a
topMost (t, []) = (t, [])
topMost z       = topMost (goUp z)

-- try:
-- (freeTree, []) -: goRight -: goLeft
-- let newFocus = (freeTree,[]) -: goLeft -: goRight -: modify (\_ -> 'P')
-- let newFocus2 = newFocus -: goUp -: modify (\_ -> 'X')
-- let farLeft = (freeTree,[]) -: goLeft -: goLeft -: goLeft -: goLeft
-- let newFocus3 = farLeft -: attach (Node 'Z' Empty Empty)
-- topMost newFocus3
freeTree :: Tree Char
freeTree =
    Node
        'P'
        (Node
             'O'
             (Node 'L' (Node 'N' Empty Empty) (Node 'T' Empty Empty))
             (Node 'Y' (Node 'S' Empty Empty) (Node 'A' Empty Empty)))
        (Node
             'L'
             (Node 'W' (Node 'C' Empty Empty) (Node 'R' Empty Empty))
             (Node 'A' (Node 'A' Empty Empty) (Node 'C' Empty Empty)))
