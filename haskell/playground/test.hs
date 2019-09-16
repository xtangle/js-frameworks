import Data.Char
import qualified Data.Map as Map

import qualified Geometry.Sphere as Sphere  
import qualified Geometry.Cuboid as Cuboid  
import qualified Geometry.Cube as Cube

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

data LockerState = Taken | Free deriving (Show, Eq)  
type Code = String
type LockerMap = Map.Map Int (LockerState, Code)

lockerLookup :: Int -> LockerMap -> Either String Code  
lockerLookup lockerNumber lockerMap =   
    case Map.lookup lockerNumber lockerMap of   
         Nothing -> Left $ "Locker number " ++ show lockerNumber ++ " doesn't exist!"  
         Just (state, code) -> if state /= Taken   
                               then Right code  
                               else Left $ "Locker " ++ show lockerNumber ++ " is already taken!" 

lockers :: LockerMap  
lockers = Map.fromList   
    [(100,(Taken,"ZD39I"))  
    ,(101,(Free,"JAH3I"))  
    ,(103,(Free,"IQSA9"))  
    ,(105,(Free,"QOTSA"))  
    ,(109,(Taken,"893JJ"))  
    ,(110,(Taken,"99292"))  
    ]
