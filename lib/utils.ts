import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Note: This is not very maintainable as its a duplication of the custom class names defined in the tailwind config.
// Realistically I would refactor this in a way where there was a single source of truth for these class names and
// in an ideal scenario this would be automated when new classes were added. To focus on the more important parts of this
// task I will leave this as it is.
const twMerge = extendTailwindMerge({
  override: {
    theme: {
      colors: [
        "neutral",
        "cream",
        "purple",
        "primary",
        "secondary",
        "minimal",
        "disabled",
        "invert",
        "brand",
      ],
    },
    classGroups: {
      "font-size": [
        "display",
        "h1",
        "h2",
        "h3",
        "s1",
        "s2",
        "p1",
        "p2",
        "c1",
        "button-default",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
