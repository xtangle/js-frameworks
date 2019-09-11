module W1 where

-- Week 1:
--   * defining functions
--   * basic expressions
--   * pattern matching
--   * recursion
-- Ex 1: define variables one, two and three. They should all have
-- type Int and values 1, 2 and 3. This exercise has no tests.
one :: Int
two :: Int
three :: Int
(one, two, three) = (1, 2, 3)

-- Ex 2: define the function double of type Integer->Integer. Double
-- should take one argument and return it multiplied by two.
double :: Integer -> Integer
double x = x * 2

-- Ex 3: define the function quadruple that uses the function double
-- from the previous exercise to return its argument multiplied by
-- four.
quadruple :: Integer -> Integer
quadruple x = double x * 2

-- Ex 4: define the function poly2. It should take four arguments of
-- type Double, a, b, c, and x and return a*x^2+b*x+c. Give poly2 a
-- type signature, i.e. poly2 :: something.
poly2 :: Double -> Double -> Double -> Double -> Double
poly2 a b c x = a * x ^ 2 + b * x + c

-- Ex 5: define the function eeny that returns "eeny" for even inputs
-- and "meeny" for odd inputs.
--
-- Ps. have a look at the built in function "even"
eeny :: Integer -> String
eeny x =
    if even x
        then "eeny"
        else "meeny"

-- Ex 6: fizzbuzz! Define the a function fizzbuzz that returns "Fizz"
-- for numbers divisible by 3, "Buzz" for numbers divisible by 5, and
-- "FizzBuzz" for numbers divisible by both. For other numbers it
-- returns the empty string.
--
-- You can use the function mod to compute modulo.
fizzbuzz :: Integer -> String
fizzbuzz x
    | div3 && div5 = "FizzBuzz"
    | div3 = "Fizz"
    | div5 = "Buzz"
    | otherwise = ""
  where
    div3 = mod x 3 == 0
    div5 = mod x 5 == 0

-- Ex 7: define a function isZero that returns True if it is given an
-- Integer that is 0, and False otherwise. Give isZero a type signature.
--
-- Use pattern matching! Don't use comparisons!
--
-- Ps. the type of booleans in haskell is Bool
isZero :: Integer -> Bool
isZero 0 = True
isZero _ = False

-- Ex 8: implement using recursion a function sumTo such that
--   sumTo n
-- computes the sum 1+2+...+n
sumTo :: Integer -> Integer
sumTo n
    | n == 0 = 0
    | n > 0 = n + sumTo (n - 1)
    | otherwise = error "Must be a non-negative Integer"

-- Ex 9: power n k should compute n to the power k (i.e. n^k)
-- Use recursion.
power :: Integer -> Integer -> Integer
power n k
    | k == 0 = 1
    | k > 0 = n * power n (k - 1)
    | otherwise = error "Exponent must be a non-negative Integer"

-- Ex 10: ilog2 n should be the number of times you can halve the
-- integer n (rounding down) before you get 1.
--
-- Use recursion to define ilog2. Use the function "div" for integer
-- division.
ilog2 :: Integer -> Integer
ilog2 n
    | n == 1 = 0
    | n > 1 = 1 + ilog2 (div n 2)
    | otherwise = error "Must be a positive Integer"

-- Ex 11: compute binomial coefficients using recursion. Binomial
-- coefficients are defined by the following equations:
--
--   B(n,k) = B(n-1,k) + B(n-1,k-1)
--   B(n,0) = 1
--   B(0,k) = 0, when k>0
--
-- Hint! pattern matching is your friend.
binomial :: Integer -> Integer -> Integer
binomial n k
    | n < 0 = error ("\"n\" = " ++ show n ++ " must be a non-negative Integer")
    | k < 0 = error ("\"k\" = " ++ show k ++ " must be a non-negative Integer")
binomial n 0 = 1
binomial 0 k = 0
binomial n k = binomial (n - 1) k + binomial (n - 1) (k - 1)

-- Ex 12: The tribonacci numbers are defined by the equations
--
--   T(1) = 1
--   T(2) = 1
--   T(3) = 2
--   T(n+1) = T(n)+T(n-1)+T(n-2)
--
-- Implement an efficient, linear time, recursive function that
-- computes T(n). You'll probably want to define a helper function.
tribonacci :: Integer -> Integer
tribonacci n
    | n <= 0 = error "Must be a non-negative Integer"
tribonacci 1 = 1
tribonacci 2 = 1
tribonacci n = tribonacci' 1 1 2 (n - 2)

tribonacci' :: Integer -> Integer -> Integer -> Integer -> Integer
tribonacci' a b c 1 = c
tribonacci' a b c n = tribonacci' b c (a + b + c) (n - 1)

-- Ex 13: implement the euclidean algorithm for finding the greatest
-- common divisor: http://en.wikipedia.org/wiki/Euclidean_algorithm
myGcd :: Integer -> Integer -> Integer
myGcd a b
    | mod a b == 0 = b
    | otherwise = myGcd b (mod a b)

-- Ex 14: The Haskell Prelude (standard library) defines the type
-- Ordering with values LT, GT and EQ. You try out Ordering by
-- evaluating the following expressions:
--
--   compare 3 4
--   compare 4 3
--   compare 0 0
--   compare "Hei" "Moi"
--   compare True False
--
-- Your task is to implement the function funnyCompare, that orders
-- integers in the following way:
--
-- 1. All even numbers come before odd numbers
-- 2. Within even and odd numbers the ordering is normal
funnyCompare :: Int -> Int -> Ordering
funnyCompare a b
    | isOddA == isOddB = compare a b
    | otherwise = compare isOddA isOddB
  where
    isOddA = odd a
    isOddB = odd b

-- Ex 15: Implement the function funnyMin that returns the minimum of
-- its two arguments, according to the ordering implemented by
-- funnyCompare.
--
-- Use pattern matching on the Ordering value returned by
-- funnyCompare. To do this, you need to either use the case-of
-- expression or define a helper function.
funnyMin :: Int -> Int -> Int
funnyMin a b =
    case funnyCompare a b of
        LT -> a
        _  -> b

-- Ex 16: implement the recursive function pyramid that returns
-- strings like this:
--
-- pyramid 0 ==> "0"
-- pyramid 1 ==> "0,1,0"
-- pyramid 2 ==> "0,1,2,1,0"
-- pyramid 3 ==> "0,1,2,3,2,1,0"
--
-- Hints:
-- * you can glue strings together with the operator ++
-- * the function show transforms a number into a string
-- * you'll need a (recursive) helper function
pyramid :: Integer -> String
pyramid n
    | n == 0 = "0"
    | n > 0 =
        let leftSide = pyramid' n False
            rightSide = pyramid' n True
         in leftSide ++ "," ++ show n ++ "," ++ rightSide
    | otherwise = error "Must be a non-negative Integer"

pyramid' n reversed
    | n == 1 = "0"
    | reversed = show (n - 1) ++ "," ++ pyramid' (n - 1) reversed
    | otherwise = pyramid' (n - 1) reversed ++ "," ++ show (n - 1)

-- Ex 17: implement the function smallestDivisor that returns the
-- smallest number (greater than 1) that divides the given number.
--
-- That is, when
--   smallestDivisor n ==> k
-- we have
--   n = t*k
-- for some t.
--
-- Ps. your function doesn't need to work for inputs 0 and 1, but
-- remember this in the next exercise!
smallestDivisor :: Integer -> Integer
smallestDivisor n
    | n > 1 =
        let floorSqrtN = floor (sqrt (fromIntegral n))
            r = 2 + mod n 2
         in smallestDivisor' n floorSqrtN r
    | otherwise = error "Must be an Integer greater than 1"

smallestDivisor' n sqrtN r
    | r > sqrtN = n
    | mod n r == 0 = r
    | otherwise = smallestDivisor' n sqrtN (r + 2)

-- Ex 18: implement a function isPrime that checks if the given number
-- is a prime number. Use the function smallestDivisor.
--
-- Ps. 0 and 1 are not prime numbers
isPrime :: Integer -> Bool
isPrime n
    | n < 0 = error "Must be a non-negative Integer"
    | n < 2 = False
    | otherwise = smallestDivisor n == n

-- Ex 19: implement a function nextPrime that returns the first prime
-- number that comes after the given number. Use the function isPrime
-- you just defined.
nextPrime :: Integer -> Integer
nextPrime n
    | n < 0 = error "Must be a non-negative Integer"
    | n < 2 = 2
    | mod n 2 == 0 = nextPrime' (n + 1)
    | otherwise = nextPrime' (n + 2)

nextPrime' n
    | isPrime n = n
    | otherwise = nextPrime' (n + 2)
