#!/bin/bash

DATA_FOLDER="./data"
for file in ${DATA_FOLDER}/*.json
do
  #cat ${file}
  #sed -e 's/\\r\\n/\\n/g' ${file} -i
  #cat ${file} | json_pp >> ${file}
  #echo $(cat ${file} | json_pp)
  python3 -m json.tool ${file}
done
