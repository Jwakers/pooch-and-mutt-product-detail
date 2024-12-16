import { FormInput, FormSelect } from "@/components/form/inputs";
import { Cart } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Cart />
      <div className={cn("text-display", "text-primary")}>Test</div>
      <Button>Button</Button>
      <Button disabled>Button</Button>

      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>

      <FormInput id="email" label="Email" type="email" placeholder="Email" />

      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
        disabled
      />

      <FormSelect id="city" label="City" />

      <RadioGroup>
        <Label
          className={cn(
            "flex cursor-pointer items-center justify-between gap-x-2 rounded-medium border border-black/30 p-6 transition-colors",
            "hover:border-primary",
            "focus-within:border-2 focus-within:border-primary",
            "active:border-primary",
            "has-[[data-state=checked]]:border-primary",
          )}
        >
          <span className="text-p2">Subscription</span>
          <RadioGroupItem value="compact" />
        </Label>
      </RadioGroup>

      <div className="group flex items-center gap-4">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className={cn(
            "text-p2",
            "peer-disabled:cursor-not-allowed peer-disabled:text-disabled",
            "group-hover:cursor-pointer",
          )}
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}
