"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField } from "../ui/form";
import { FormInput } from "./inputs";

const FormSchema = z.object({
  email: z.string().email(),
  terms: z.boolean(),
});

export default function NewsletterForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      terms: false,
    },
  });

  return (
    <div className="container mt-7 md:px-0">
      <Form {...form}>
        <form action="/" className="rounded-medium bg-secondary p-6">
          <p className="mb-6 text-h3">Join our mailing list</p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormControl>
                <FormInput
                  id={field.name}
                  label="Email address"
                  placeholder="johndoe@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
            )}
          />
          <Button
            className="my-4 w-full md:w-auto"
            disabled={!form.formState.isValid}
            variant="secondary"
          >
            Submit
          </Button>
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <div className="group mt-5 flex items-center gap-4">
                <FormControl>
                  <Checkbox
                    id={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <label
                  htmlFor={field.name}
                  className={cn(
                    "text-p2 text-secondary",
                    "peer-disabled:cursor-not-allowed peer-disabled:text-disabled",
                    "group-hover:cursor-pointer",
                  )}
                >
                  Accept terms and conditions
                </label>
              </div>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
