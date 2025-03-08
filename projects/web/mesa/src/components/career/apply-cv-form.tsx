"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription } from "@radix-ui/react-dialog";
import { z } from "zod";
import RadialCard from "../radial-card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.object({
  firstName: z.string().nonempty({
    message: "Please enter your first name",
  }),
  lastName: z.string().nonempty({
    message: "Please enter your last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().nonempty({
    message: "Please enter your phone number",
  }),
  cv: z.string().optional(),
  additionalFiles: z.string().optional(),
  coverLetter: z.string().optional(),
  approvePolicy: z.boolean(),
  receiveAd: z.boolean(),
});

function ApplyCvForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cv: "",
      additionalFiles: "",
      coverLetter: "",
      approvePolicy: true,
      receiveAd: true,
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log({ values });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>APPLY NOW</Button>
      </DialogTrigger>

      <DialogContent
        hideCloseButton
        className="max-w-6xl bg-[#221F3A]/75 text-secondary-foreground"
      >
        <DialogTitle />
        <DialogDescription />
        <div className="-mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <RadialCard className="mb-6">
                <div className="block gap-4 space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary-foreground">
                          First name*
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary-foreground">
                          Last name*
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

                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary-foreground">
                          Upload CV*
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Write some words about your stores, your needs ..."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalFiles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary-foreground">
                          Additional files
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Write some words about your stores, your needs ..."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary-foreground">
                            Cover letter
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Write some words about your stores, your needs ..."
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
                      <FormLabel className="!m-0 !-mt-0.5 text-xs leading-relaxed text-secondary-foreground/50 lg:text-base">
                        By submitting this application, I agree that I have read
                        the Privacy Policy and confirm that Mesanovas store my
                        personal details to be able to process my job
                        application.
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="receiveAd"
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!m-0 !-mt-0.5 text-xs leading-relaxed text-secondary-foreground/50 lg:text-base">
                        Yes, Mesanovas can contact me directly about specific
                        future job opportunities.
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplyCvForm;
