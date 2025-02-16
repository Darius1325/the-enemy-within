#!/bin/bash

# Variables
file="Test.txt"
regex="[0-9]+\/[0-9]+\/[0-9]+"
result_list=()

# Read the file line by line
while IFS= read -r line
do
    # Extract matches of the regular expression
    if [[ $line =~ $regex ]]; then
        match="${BASH_REMATCH[0]}"
        # Add the match to the result list
        result_list+=("$match")
    fi
    
done < "$file"

# Type conversions
for result in "${result_list[@]}"
do
    # Retrieve the numbers
    IFS='/' read -r number1 number2 number3 <<< "$result"
    numberInt=$(($((number1 * 20 * 12)) + $((number2 * 12)) + number3))
    sed -i "s|$result|$numberInt|g" "$file"
done
