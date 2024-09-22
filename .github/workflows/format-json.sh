#!/bin/bash

DATA_FOLDER="data"

for file in ${DATA_FOLDER}/*.json; do
  cat ${file} | json_pp > ${file}.test
done
