import { FormInput, FormSelect } from "@/components/form/inputs";
import { Cart } from "@/components/icons";
import { Button } from "@/components/ui/button";
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
    </div>
  );
}
