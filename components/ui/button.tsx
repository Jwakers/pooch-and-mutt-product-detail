import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Note: the tokens for the button are incorrect in figma (Tokens/Buttons&Selectors). They are identical.

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-1000 text-neutral-0 hover:bg-black/80 active:bg-black/60 disabled:bg-black/10 disabled:text-black/30",
        secondary:
          "bg-black/06 text-neutral-700 hover:bg-black/10 hover:text-neutral-900 focus-visible:text-neutral-900 active:text-neutral-700 active:bg-black/20 disabled:bg-black/04 disabled:text-black/10",
      },
      size: {
        default: "px-10 py-7 text-button-default",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
