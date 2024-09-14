#!/bin/bash

DATA_FOLDER="./data"
echo ${DATA_FOLDER}
for file in ${DATA_FOLDER}/*.json
do
  echo ${file}
  cat ${file} | json_pp >> ${file}.test
done
