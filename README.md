# Tailwind CSS Gradient Bug

This repository demonstrates a bug encountered when using Tailwind CSS gradients.  The bug manifests as an unexpected background color when the gradient definition is incomplete or modified.

## Bug Description

The issue arises when a gradient background is defined using `bg-gradient-to-*` utilities but the end color is omitted or changed. Instead of the expected behavior (a gradient from start to finish color), the element assumes an unexpected background color. This might be due to Tailwind's fallback mechanism or an incorrect calculation of gradient bounds.

## Reproduction Steps

1. Clone this repository.
2. Open `bug.js` and observe the initial background.
3. Modify the Tailwind classes to remove or change the last color in the gradient.
4. Observe the change in the background color; it will deviate from what is expected.

## Solution

The solution provided in `bugSolution.js` shows how to handle the issue properly. The core fix is to ensure the gradient completely fills the element. Methods including extending the gradient, adding a default background, or using `linear-gradient` directly can address this issue. 

## Contributing

Contributions are welcome! If you have any suggestions or find alternative ways to resolve this bug, feel free to submit a pull request.