import           Data.Monoid

-- Monoid laws
-- 1. mempty `mappend` x = x
-- 2. x `mappend` mempty = x
-- 3. (x `mappend` y) `mappend` z = x `mappend` (y `mappend` z)
-- try
-- [1,2,3] `mappend` [4,5,6]
-- mconcat [[1,2],[3,6],[9]]
-- getProduct $ Product 3 `mappend` Product 4 `mappend` Product 2
-- getSum . mconcat . map Sum $ [1,2,3,4]
-- getAny . mconcat . map Any $ [False, False, False, True]
-- getAll . mconcat . map All $ [True, True, False]
-- getFirst $ First (Just 'a') `mappend` First (Just 'b')
-- getLast $ Last (Just "one") `mappend` Last (Just "two")

lengthCompare :: String -> String -> Ordering
lengthCompare x y = (length x `compare` length y) `mappend` (vowels x `compare` vowels y) `mappend` (x `compare` y)
  where
    vowels = length . filter (`elem` "aeiou")
