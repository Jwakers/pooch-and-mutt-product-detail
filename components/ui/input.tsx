import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-medium border border-primary bg-primary p-6 text-p1 transition-colors",
          "placeholder-shown:border-black/10 placeholder-shown:text-disabled",
          "hover:border-primary",
          "active:border-2",
          "focus:border-2 focus-visible:outline-none focus-visible:ring-2",
          "disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
