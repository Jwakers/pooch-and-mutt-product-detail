import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Typically I would isolate each component here into its own file but given the small number
// of components that are all related I have kept them in the same file.

type FormInputProps = Pick<WithLabelProps, "id" | "label"> &
  React.ComponentProps<"input">;

export function FormInput({ id, label, ...rest }: FormInputProps) {
  return (
    <WithLabel label={label} id={id}>
      <Input id={id} className={cn("peer", rest?.className)} {...rest} />
    </WithLabel>
  );
}

type FormSelectProps = Pick<WithLabelProps, "id" | "label">;

export function FormSelect({ id, label, ...rest }: FormSelectProps) {
  return (
    <WithLabel id={id} label={label}>
      <Select {...rest}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </WithLabel>
  );
}

type WithLabelProps = React.PropsWithChildren<{
  id: string;
  label: string;
}> &
  React.ComponentProps<"label">;

function WithLabel({ id, label, children, ...rest }: WithLabelProps) {
  return (
    <div className="inline-flex flex-col-reverse gap-3">
      {children}
      <Label htmlFor={id} {...rest}>
        {label}
      </Label>
    </div>
  );
}
