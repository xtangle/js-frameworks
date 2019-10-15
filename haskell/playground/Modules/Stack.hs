module Modules.Stack
    ( Stack
    , pop
    , push
    ) where

import           Control.Monad.State

type Stack = [Int]

pop :: State Stack Int
pop = state $ \(x:xs) -> (x, xs)

push :: Int -> State Stack ()
push a = state $ \xs -> ((), a : xs)
