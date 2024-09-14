# Frontend Mentor Challenge - Article preview component

This is a solution to the [Article preview component challenge](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT) on Frontend Mentor.

## Overview

<div align=center><img src="./images/solution-screenshot.png" width="400px"/></div>
</br>

:point_right: [Here's the Link](https://yahappylemon.github.io/frontend-mentor-practice/Article-preview-component/index.html) :smiley:

## My Reflection

I find this challenge harder than I thought, since the active state of desktop/mobile is quite different from one another.

I ended up creating duplicate elements, but I don't think this is the best solution. :smiling_face_with_tear:

I used **`display: none`** to hide the elements, and compared its pros/cons to **`visibility: hidden`**/**`opacity: 0`**:

- **`display: none`**:
  - not visible on the DOM tree, might cause reflow when it occurs
  - unable to add transition/animation
  - unable to handle events
- **`visibility: hidden`**/**`opacity: 0`**:
  - visible on the DOM tree, occupies spaces on the layout
  - can add transition/animation
  - can recieve user events
