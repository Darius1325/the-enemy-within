#!/bin/bash

DATA_FOLDER="${GITHUB_WORKSPACE}/data"

for file in ${DATA_FOLDER}/*.json; do
  cat ${file} | json_pp >> ${file}.test
done
