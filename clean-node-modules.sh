#!/bin/bash

delete_node_modules() {
  local -r script_path="$(cd "$(dirname "$0")" ; pwd -P)"
  find "${script_path}" -type d -name node_modules -exec rm -rf {} \;
}

delete_node_modules
