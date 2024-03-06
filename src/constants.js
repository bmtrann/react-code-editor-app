export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: ``,
  typescript: ``,
  python: `#trapping-rain-water 
import sys
import ast

def trap_rain_water(height):
    max_bar = max(height)
    pivot = height.index(max_bar)
    l = r = 0
    res = current_water = 0

    while r <= pivot:
        if height[r] >= height[l]:
            res += current_water
            current_water = 0
            l = r

        current_water += height[l] - height[r]
        r += 1

    n = len(height)
    l = r = n - 1
    current_water = 0

    while l >= pivot:
        if height[l] >= height[r]:
            res += current_water
            current_water = 0
            r = l

        current_water += height[r] - height[l]
        l -= 1

    return res

# Read input from stdin
for line in sys.stdin:
    height = ast.literal_eval(line)
    result = trap_rain_water(height)
    print(result)
  `,
  java: ``,
  csharp:
    '',
};
