import           Data.Char
import           Data.List

ioFunctor = do
    line <- fmap (intersperse '-' . reverse . map toUpper) getLine
    putStrLn line

-- Functor laws
-- 1. fmap id = id
-- 2. fmap (f . g) = fmap f . fmap g

data CMaybe a
    = CNothing
    | CJust Int a
    deriving (Show)

-- Not a functor! Fails the first functor law.
instance Functor CMaybe where
    fmap f CNothing          = CNothing
    fmap f (CJust counter x) = CJust (counter + 1) (f x)
