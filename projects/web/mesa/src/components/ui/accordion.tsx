"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-lg border-2 border-[#BFB8C4] dark:border-[#343349]",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex h-14 flex-1 items-center justify-between text-left text-sm font-medium leading-tight transition-all hover:underline lg:text-lg [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:font-bold",
        className,
      )}
      {...props}
    >
      <div className="p-4">{children}</div>

      <div className="hidden aspect-square h-full items-center justify-center rounded-r-md bg-[#343349] group-data-[state=closed]:flex">
        <Plus className="h-5 w-5 shrink-0 text-white transition-transform duration-200" />
      </div>
      <div className="hidden aspect-square h-full items-center justify-center rounded-se-md bg-primary group-data-[state=open]:flex">
        <Minus className="h-5 w-5 shrink-0 text-white transition-transform duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
