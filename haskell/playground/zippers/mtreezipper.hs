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

goLeft :: Zipper a -> Maybe (Zipper a)
goLeft (Node x l r, bs) = Just (l, LeftCrumb x r : bs)
goLeft (Empty, _)       = Nothing

goRight :: Zipper a -> Maybe (Zipper a)
goRight (Node x l r, bs) = Just (r, RightCrumb x l : bs)
goRight (Empty, _)       = Nothing

goUp :: Zipper a -> Maybe (Zipper a)
goUp (t, LeftCrumb x r:bs)  = Just (Node x t r, bs)
goUp (t, RightCrumb x l:bs) = Just (Node x l t, bs)
goUp (_, [])                = Nothing

modify :: (a -> a) -> Zipper a -> Zipper a
modify f (Node x l r, bs) = (Node (f x) l r, bs)
modify f (Empty, bs)      = (Empty, bs)

attach :: Tree a -> Zipper a -> Zipper a
attach t (_, bs) = (t, bs)

topMost :: Zipper a -> Zipper a
topMost z =
    case goUp z of
        Just z' -> topMost z'
        Nothing -> z

-- try:
-- return (coolTree,[]) >>= goRight
-- return (coolTree,[]) >>= goRight >>= goRight
-- return (coolTree,[]) >>= goRight >>= goRight >>= goRight
-- topMost <$> return (coolTree,[]) >>= goRight >>= goRight
-- topMost <$> return (coolTree,[]) >>= goRight >>= goRight >>= goRight
coolTree = Node 1 Empty (Node 3 Empty Empty)
