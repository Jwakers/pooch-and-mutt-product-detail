import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  id: string;
  label: string;
  inputProps: React.ComponentProps<"input">;
  labelProps?: React.ComponentProps<"label">;
};

export default function FormInput({
  id,
  label,
  inputProps,
  labelProps,
}: FormInputProps) {
  return (
    <div className="inline-flex flex-col-reverse gap-3">
      <Input
        id={id}
        className={cn("peer", inputProps?.className)}
        {...inputProps}
      />
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
    </div>
  );
}
