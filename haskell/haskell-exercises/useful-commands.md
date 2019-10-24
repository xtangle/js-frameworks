# Useful Commands

Run tests, print the number of exercises that passed:

```shell script
stack runhaskell WXTest.hs 2>&1 | grep --line-buffered 'PASS' | awk '{printf "\r%lu", NR} END{print ""}'
```
