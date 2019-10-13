import           Control.Monad       (when)
import           Control.Monad.State

type Stack = [Int]

pop :: State Stack Int
pop = state $ \(x:xs) -> (x, xs)

push :: Int -> State Stack ()
push a = state $ \xs -> ((), a : xs)

-- try:
-- runState stackManip [5,8,2,1]
stackManip :: State Stack Int
stackManip = do
    push 3
    pop
    pop

-- try:
-- runState stackStuff [9,0,2,1,0]
stackStuff :: State Stack ()
stackStuff = do
    a <- pop
    if a == 5
        then push 5
        else do
            push 3
            push 8

-- try:
-- runState moreStack [100,0,2,1,0]
moreStack :: State Stack ()
moreStack = do
    a <- stackManip
    when (a == 100) stackStuff

-- try:
-- runState stackyStack [1,2,3]
stackyStack :: State Stack ()
stackyStack = do
    stackNow <- get
    if stackNow == [1, 2, 3]
        then put [8, 3, 1]
        else put [9, 2, 1]
