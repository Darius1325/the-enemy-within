#!/bin/bash

DATA_FOLDER="./data"
for file in ${DATA_FOLDER}/*.json
do
  echo $(python3 -m json.tool ${file}) > ${file}
done
