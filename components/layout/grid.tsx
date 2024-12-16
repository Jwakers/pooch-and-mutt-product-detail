import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type GridProps = React.PropsWithChildren<{
  className?: ClassValue;
}>;

export default function Grid({ className, children }: GridProps) {
  <div
    className={cn(
      "grid grid-cols-6 gap-x-6",
      "sm:gap-8",
      "md:gap-10",
      // 48px not included in design system
      "lg:gap-[3rem]",
      className,
    )}
  >
    {children}
  </div>;
}
