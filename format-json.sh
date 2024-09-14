#!/bin/bash

DATA_FOLDER="./data"
for file in ${DATA_FOLDER}/*.json
do
  sed -e 's/\\r\\n/\\n/g' -f ${file} -i
  cat ${file} | json_pp >> ${file}
  echo $(cat ${file} | json_pp)
done
