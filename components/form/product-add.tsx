"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormSelect } from "./inputs";

const RADIO_OPTIONS = [
  {
    value: "subscription",
    text: "Subscription",
  },
  {
    value: "one-off",
    text: "One-off",
  },
];

const FormSchema = z.object({
  quantity: z.enum(["1", "2", "3", "4", "5"]),
  type: z.enum(["subscription", "one-off"]),
  frequency: z.enum(["7", "14", "30"], {
    required_error: "You need to select a delivery frequency type.",
  }),
});

export default function ProductAddForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      quantity: "1",
      type: "one-off",
    },
  });
  const selectedType = form.watch("type");

  return (
    <Form {...form}>
      <form action="/">
        {/* In reality I would send this data to a server action for processing. */}
        <div className="container md:px-0">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormSelect
                  id={field.name}
                  label="Quantity"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  options={[...Array(5)].map((_, i) => ({
                    value: i + 1,
                    text: `${i + 1}`,
                  }))}
                />
              </FormItem>
            )}
          />
          <div className="mt-6 space-y-6 rounded-medium border border-minimal bg-brand p-6">
            <p className="text-s1">Subscribe & Save 25%!</p>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid gap-4 md:grid-cols-2"
                  >
                    {RADIO_OPTIONS.map(({ text, value }) => (
                      <Fragment key={value}>
                        <Label
                          className={cn(
                            "border-black/30 flex cursor-pointer items-center justify-between gap-x-2 rounded-medium border p-6 transition-colors",
                            "hover:border-primary",
                            "focus-within:border-2 focus-within:border-primary",
                            "active:border-primary",
                            "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary",
                          )}
                        >
                          <span className="text-p2">{text}</span>
                          <FormControl>
                            <RadioGroupItem value={value} />
                          </FormControl>
                        </Label>
                      </Fragment>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            ></FormField>

            <div className="space-x-3">
              <p className="text-s2"></p>
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormSelect
                    id="frequency"
                    label="Delivery frequency"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={selectedType === "one-off"}
                    options={[
                      {
                        value: "7",
                        text: "7days",
                      },
                      {
                        value: "14",
                        text: "14days",
                      },
                      {
                        value: "30",
                        text: "30days",
                      },
                    ]}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full rounded-tl-medium rounded-tr-medium bg-primary px-6 pb-8 pt-5 shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.25)] md:static md:mt-8 md:p-0 md:shadow-none">
          <Button type="submit" className="w-full">
            Add to basket
          </Button>
        </div>
      </form>
    </Form>
  );
}
