"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import MaxWidthContainer from "../layout/max-width-container";
import RadialCard from "../radial-card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactSchema = z.object({
  name: z.string().nonempty({
    message: "Please enter your name",
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
  note: z.string().optional(),
  approved: z
    .boolean()
    .default(false)
    .refine((val) => val === true, {
      message: "Please read and accept the terms and conditions",
    }),
  subscription: z.boolean().default(false),
});

function ContactForm() {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      note: "",
      approved: false,
      subscription: false,
    },
  });

  const approvedError = form.formState.errors?.approved;
  useEffect(() => {
    if (!approvedError) return;

    toast.error(approvedError.message);
  }, [approvedError]);

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    console.log(values);
  };

  return (
    <MaxWidthContainer>
      <div className="rounded-2xl bg-[#221F3A8C]/55 p-4 shadow-md backdrop-blur-3xl lg:p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <RadialCard className="mb-12 grid grid-cols-1 gap-x-4 gap-y-6 text-secondary-foreground lg:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name*</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Company*</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Phone number*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel>More infomation*</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={5} className="resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </RadialCard>

            <div className="mx-auto mb-6 max-w-5xl space-y-3 text-foreground/70 lg:mb-12">
              <FormField
                control={form.control}
                name="approved"
                render={({ field }) => (
                  <FormItem className="flex items-start gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!m-0 !-mt-0.5 text-xs leading-relaxed lg:text-base">
                      By submitting these information, I agree that I have read
                      the Privacy Policy and confirm that Mesanovas store my
                      personal details to be able to process my waiting list
                      approval.
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscription"
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
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="w-[285px]">
                SUBMIT
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MaxWidthContainer>
  );
}

export default ContactForm;
