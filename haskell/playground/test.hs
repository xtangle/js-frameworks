import Data.Char

bmiTell :: (RealFloat a) => a -> a -> String  
bmiTell weight height  
    | bmi <= skinny = "You're underweight, you emo, you!"  
    | bmi <= normal = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= fat    = "You're fat! Lose some weight, fatty!"  
    | otherwise     = "You're a whale, congratulations!"  
    where bmi = weight / height ^ 2  
          (skinny, normal, fat) = (18.5, 25.0, 30.0) 

initials :: String -> String -> String  
initials (f:_) (l:_) = [f] ++ ". " ++ [l] ++ "." 

encode :: Int -> String -> String  
encode shift msg = 
    let ords = map ord msg  
        shifted = map (+ shift) ords  
    in  map chr shifted 

decode :: Int -> String -> String  
decode shift msg = encode (negate shift) msg