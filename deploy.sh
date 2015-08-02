#!/bin/bash

git push
ssh root@104.236.134.6 'cd /var/www/sea-fewd; git pull -r; cd ../; stop node-server; start node-server'

