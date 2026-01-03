#!/bin/bash

hugo server   --baseURL http://localhost:1313/ --destination .hugo-local --disableFastRender   --ignoreCache   --poll 700ms
