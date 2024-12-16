import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type GridProps = React.PropsWithChildren<{
  className?: ClassValue;
}>;

export default function Grid({ className, children }: GridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-6 gap-x-6",
        "sm:gap-x-8",
        "md:grid-cols-12 md:gap-x-10",
        // 48px not included in design system
        "lg:gap-x-[3rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
