#!/bin/bash

delete_node_modules() {
  local -r script_path="$(cd "$(dirname "$0")" ; pwd -P)"
  for dir in "${@}"; do
    find "${script_path}/${dir}" -type d -name node_modules -exec rm -rf {} \;
  done
}

delete_node_modules "assignments" "examples" "legacy" "my-examples"
