#!/bin/bash

DATA_FOLDER="./data"
cat ${DATA_FOLDER}/Actors.json
#for file in ${DATA_FOLDER}/*.json
#do
#  cat ${file}
  #sed -e 's/\\r\\n/\\n/g' ${file} -i
#  cat ${file} | json_pp >> ${file}
#  echo $(cat ${file} | json_pp)
#done
