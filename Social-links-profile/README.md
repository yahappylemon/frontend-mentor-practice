# Frontend Mentor Challenge - Social links profile

This is a solution to the [Social links profile challenge](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ) on Frontend Mentor.

## Overview

<div align=center><img src="./assets/images/solution-screenshot.png" width="400px"/></div>
</br>

:point_right: [Here's the Link](https://yahappylemon.github.io/frontend-mentor-practice/Social-links-profile/index.html) :smiley:

## My Reflection

There's no Figma file in this challenge, so I spent a lot of time figuring out the padding/margin of the component :sweat:

I noticed that I missed a part while doing the [Blog Preview Card Challenge](https://yahappylemon.github.io/frontend-mentor-practice/Blog-preview-card/index.html), so I tried to do it in this one :

**How to Reduce font size without using media queries**

- **Use `calc()` function**: _e.g.`calc(0.93rem + 0.5vw)`_
  - Set a base `font-size` and let it grow as the `vw` changes.
  - The `+` and `-` operators **must be surrounded by whitespace**.
  - **Downside**: Font size might shrink too much in small screens.
- **Use `clamp()` function**: _e.g.`clamp(0.63rem, 1.5vw, 0.75rem)`_
  - **First param**: minimum size
  - **Second param**: ideal size
  - **Third param**: maximum size

## Useful Resources

- [min(), max(), and clamp() are CSS magic!](https://www.youtube.com/watch?v=U9VF-4euyRo&list=PL4-IK0AVhVjODqX-gN6KH68Tt_zrYiTwA&index=2)
