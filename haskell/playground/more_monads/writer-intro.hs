import           Data.Monoid

applyLog :: (Monoid m) => (a, m) -> (a -> (b, m)) -> (b, m)
applyLog (x, log) f =
    let (y, newLog) = f x
     in (y, log `mappend` newLog)

-- try:
-- ("Tobin","Got outlaw name.") `applyLog` (\x -> (length x, "Applied length."))
-- ("Bathcat","Got outlaw name.") `applyLog` (\x -> (length x, "Applied length"))

type Food = String
type Price = Sum Int

addDrink :: Food -> (Food, Price)
addDrink "beans" = ("milk", Sum 25)
addDrink "jerky" = ("whiskey", Sum 99)
addDrink _       = ("beer", Sum 30)

-- try:
-- ("dogmeat", Sum 5) `applyLog` addDrink `applyLog` addDrink
