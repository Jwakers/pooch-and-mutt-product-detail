import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type ContainerProps = React.PropsWithChildren<{
  className?: ClassValue;
}>;

export default function Container({ className, children }: ContainerProps) {
  return (
    <section
      className={cn(
        "mx-auto",
        "w-[clamp(1px,calc(100%-(16px*2)),1680px)]",
        "sm:w-[clamp(1px,calc(100%-(32px*2)),1680px)]",
        "md:w-[clamp(1px,calc(100%-(40px*2)),1680px)]",
        "lg:w-[clamp(1px,calc(100%-(48px*2)),1680px)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
