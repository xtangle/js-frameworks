import           Data.List

solveRPN :: String -> Float
solveRPN s =
    let tokens = words s
        [result] = foldl process [] tokens
     in result
  where
    monofunc f (t:stack) = f t : stack
    bifunc f (t2:t1:stack) = f t1 t2 : stack
    process stack t =
        case t of
            "+"   -> bifunc (+) stack
            "-"   -> bifunc (-) stack
            "*"   -> bifunc (*) stack
            "/"   -> bifunc (/) stack
            "^"   -> bifunc (**) stack
            "ln"  -> monofunc log stack
            "sum" -> [sum stack]
            _     -> read t : stack
