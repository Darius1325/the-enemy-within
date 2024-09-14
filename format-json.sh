#!/bin/bash

DATA_FOLDER="./data"
for file in ${DATA_FOLDER}/*.json
do
  sed -ei 's/\\r\\n/\\n/g' -f ${file}
  cat ${file} | json_pp >> ${file}
  echo $(cat ${file} | json_pp)
done
