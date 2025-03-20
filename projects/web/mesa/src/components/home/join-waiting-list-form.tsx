"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RadialCard from "@/components/radial-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().nonempty({
    message: "Please enter your full name",
  }),
  company: z.string().nonempty({
    message: "Please enter your company name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().nonempty({
    message: "Please enter your phone number",
  }),
  message: z.string().optional(),
  approvePolicy: z.boolean(),
  receivePromo: z.boolean(),
});

function JoinWaitingListForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      approvePolicy: true,
      receivePromo: true,
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <RadialCard className="mb-6">
          <div className="block gap-4 space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-foreground">
                    Full name*
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Type ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-foreground">
                    Company name*
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Type ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-foreground">
                    Email*
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="abc@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-foreground">
                    Phone number*
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary-foreground">
                      More Infomation
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write some words about your stores, your needs ..."
                        className="h-32"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </RadialCard>

        <div className="mx-auto max-w-4xl space-y-3">
          <FormField
            control={form.control}
            name="approvePolicy"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!m-0 !-mt-0.5 text-xs leading-relaxed lg:text-base">
                  By submitting these information, I agree that I have read the
                  Privacy Policy and confirm that Mesanovas store my personal
                  details to be able to process my waiting list approval.
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="receivePromo"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!m-0 !-mt-0.5 text-xs leading-relaxed lg:text-base">
                  Yes, Mesanovas can contact me directly about future
                  promotions.
                </FormLabel>
              </FormItem>
            )}
          />

          <div className="flex justify-center gap-2 pt-6">
            <Button type="submit" className="align-self-center px-24">
              SUBMIT
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default JoinWaitingListForm;
