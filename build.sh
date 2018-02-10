#!/bin/bash

cd bamstatsAlive
BAMTOOLS=../node-bamtools/bamtools/ make
cd ../../../.bin/
ln -s ../node-bamstatsalive/bamstatsAlive bamstatsAlive
