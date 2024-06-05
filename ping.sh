#!/bin/bash

# Define the list of URLs
urls=(
    "https://poll-an-issue.onrender.com"
    "https://poll-an-issue-backend.onrender.com"
    "https://mini-project-backend-xnqj.onrender.com"
    "https://mini-project-5z5u.onrender.com"
    "https://radha-mounika-forum.onrender.com"
)

# Loop over each URL and ping it 3 times
for url in "${urls[@]}"; do
    echo "Pinging $url"
    for i in {1..3}; do
        curl -I -s --max-time 5 "$url" >/dev/null
        if [ $? -eq 0 ]; then
            echo "Ping $i to $url: Success"
        else
            echo "Ping $i to $url: Failed"
        fi
        sleep 1  # Optional: wait for a second between pings
    done
done
