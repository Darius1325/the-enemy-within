#!/bin/bash

DATA_FOLDER="./data"
for file in $DATA_FOLDER/*.json
do
  temp=$(python3 -m json.tool $file)
  cat <<< $temp > $file
done
