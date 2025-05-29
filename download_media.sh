#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images
mkdir -p public/videos

# Download pattern preview images
curl -o public/images/spiral-preview.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/candy-stripe-bracelet-tutorial.jpg"
curl -o public/images/candy-stripe.jpg "https://content.instructables.com/FU2/4C96/GVU6OEWE/FU24C96GVU6OEWE.jpg"
curl -o public/images/chevron-preview.jpg "https://www.instructables.com/files/deriv/FU6/96YR/HNOBNP0I/FU696YRHNOBNP0I.LARGE.jpg"

# Download materials and setup images
curl -o public/images/materials.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/friendship-bracelet-supplies.jpg"
curl -o public/images/string-prep.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/prepare-strings.jpg"
curl -o public/images/secure-work.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/secure-strings.jpg"

# Download knot tutorial images
curl -o public/images/forward-knot.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/forward-knot-tutorial.jpg"
curl -o public/images/both-knots.jpg "https://www.instructables.com/files/deriv/FKS/Z8QY/HNOBNP0K/FKSZ8QYHNOBNP0K.LARGE.jpg"

# Download pattern step images
curl -o public/images/start-pattern.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/start-pattern.jpg"
curl -o public/images/continue-pattern.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/continue-pattern.jpg"

# Download chevron-specific images
curl -o public/images/materials-chevron.jpg "https://www.instructables.com/files/deriv/F7Q/96YR/HNOBNP0H/F7Q96YRHNOBNP0H.LARGE.jpg"
curl -o public/images/string-prep-chevron.jpg "https://www.instructables.com/files/deriv/FKJ/96YR/HNOBNP0G/FKJ96YRHNOBNP0G.LARGE.jpg"
curl -o public/images/arrange-colors.jpg "https://www.instructables.com/files/deriv/FU6/96YR/HNOBNP0I/FU696YRHNOBNP0I.LARGE.jpg"
curl -o public/images/left-side.jpg "https://www.instructables.com/files/deriv/F32/Z8QY/HNOBNP0J/F32Z8QYHNOBNP0J.LARGE.jpg"
curl -o public/images/right-side.jpg "https://www.instructables.com/files/deriv/FKS/Z8QY/HNOBNP0K/FKSZ8QYHNOBNP0K.LARGE.jpg"

# Download practice step images
curl -o public/images/spiral-practice-1.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/spiral-step1.jpg"
curl -o public/images/spiral-practice-2.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/spiral-step2.jpg"
curl -o public/images/spiral-practice-3.jpg "https://theneonteaparty.com/wp-content/uploads/2023/08/spiral-step3.jpg"
curl -o public/images/chevron-practice-1.jpg "https://www.instructables.com/files/deriv/F32/Z8QY/HNOBNP0J/F32Z8QYHNOBNP0J.LARGE.jpg"
curl -o public/images/chevron-practice-2.jpg "https://www.instructables.com/files/deriv/FKS/Z8QY/HNOBNP0K/FKSZ8QYHNOBNP0K.LARGE.jpg"
curl -o public/images/chevron-practice-3.jpg "https://www.instructables.com/files/deriv/FU6/96YR/HNOBNP0I/FU696YRHNOBNP0I.LARGE.jpg"

# Download knot tutorial videos
curl -o public/videos/forward-knot-step1.mp4 "https://theneonteaparty.com/wp-content/uploads/2023/08/forward-knot-1.mp4"
curl -o public/videos/forward-knot-step2.mp4 "https://theneonteaparty.com/wp-content/uploads/2023/08/forward-knot-2.mp4"
curl -o public/videos/forward-knot-step3.mp4 "https://theneonteaparty.com/wp-content/uploads/2023/08/forward-knot-3.mp4"
curl -o public/videos/backward-knot-step1.mp4 "https://www.instructables.com/files/deriv/FKJ/96YR/HNOBNP0G/backward-1.mp4"
curl -o public/videos/backward-knot-step2.mp4 "https://www.instructables.com/files/deriv/FKJ/96YR/HNOBNP0G/backward-2.mp4"
curl -o public/videos/backward-knot-step3.mp4 "https://www.instructables.com/files/deriv/FKJ/96YR/HNOBNP0G/backward-3.mp4" 