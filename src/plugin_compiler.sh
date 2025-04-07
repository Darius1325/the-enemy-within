#!/bin/bash

declare -A priorities
declare -A file_list
declare -A collected_content
regex='\$PluginCompiler ([^ ]+\.js)( [0-9]+)?'

# Translating Ts to Js
tsc --project ./tsconfig.json

# Read the $PluginCompiler tag from the first line of each file
for file in $(find plugins/$1 -name "*.js"); do
    read -r first_line < "$file"
    if [[ $first_line =~ $regex ]]; then
        output_file="${BASH_REMATCH[1]}"
        priority=${BASH_REMATCH[2]:-100} # Default priority is 100 if not provided
        
        file_list["$file"]="$output_file"
        priorities["$file"]=$priority
    fi
done

# Sort files by priority (higher first)
sorted_files=($(for f in "${!file_list[@]}"; do echo "${priorities[$f]} $f"; done | sort -k1,1n | awk '{print $2}'))

# Read files and extract content after $StartCompilation
for file in "${sorted_files[@]}"; do
    output_file="${file_list[$file]}"
    started=0
    # Do not forget to add an EOF newline or the last line will not be registered
    while IFS= read -r line; do
        if [[ $started -eq 1 ]]; then
            collected_content["$output_file"]+="$line\n"
        elif [[ $line =~ \$StartCompilation ]]; then
            started=1
        fi
    done < $file
done

mkdir -p ../js/plugins/TEW

# Write collected content to respective output files
for output_file in "${!collected_content[@]}"; do
    echo -e "${collected_content[$output_file]}" > ../js/plugins/TEW/$output_file
done
