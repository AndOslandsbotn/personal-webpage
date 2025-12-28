#!/bin/bash

cd resume-site

hugo server   --baseURL http://localhost:1313/ --disableFastRender   --ignoreCache   --poll 700ms
