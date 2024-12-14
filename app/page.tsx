import { Cart } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

      <div className="inline-flex flex-col-reverse gap-3">
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
      </div>
      <div className="inline-flex flex-col-reverse gap-3">
        <Input
          type="email"
          disabled
          id="email"
          placeholder="Email"
          className="peer"
        />
        <Label htmlFor="email">Email</Label>
      </div>
    </div>
  );
}
