#!/usr/bin/env bash

function run_haskell() {
  local -r test_file=${1}
  stack runhaskell "${test_file}"
}

function run_test() {
  OPTIND=1
  local do_count=0

  while getopts "c?" opt; do
    case "$opt" in
    c)
      do_count=1
      ;;
    *) ;;
    esac
  done
  shift $((OPTIND - 1))

  local -r test_num="${1}"
  local -r test_file="W${test_num}Test.hs"

  echo "Running test file ${test_file} ..."

  if ((do_count)); then
    run_haskell "${test_file}" 2>&1 | grep --line-buffered 'PASS' | awk '{printf "\r%lu exercises passed", NR} END{if (!NR) print "\r0 exercises passed"; else print ""}'
  else
    run_haskell "${test_file}"
  fi
}

run_test "${@}"
