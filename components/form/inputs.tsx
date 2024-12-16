import { cn } from "@/lib/utils";
import { SelectProps } from "@radix-ui/react-select";
import { FormControl } from "../ui/form";
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

type FormSelectProps = Pick<WithLabelProps, "id" | "label"> & {
  options: { value: string | number; text: string }[];
} & SelectProps;

export function FormSelect({ id, label, options, ...rest }: FormSelectProps) {
  return (
    <WithLabel id={id} label={label}>
      <Select {...rest}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={label} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map(({ value, text }) => (
            <SelectItem key={value} value={String(value)}>
              {text}
            </SelectItem>
          ))}
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
    <div className="flex flex-col-reverse gap-3">
      {children}
      <Label htmlFor={id} {...rest}>
        {label}
      </Label>
    </div>
  );
}
