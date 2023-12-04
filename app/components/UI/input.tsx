import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "!mb-2 !basis-0 !text-base !font-normal !leading-tight !text-[#545456] !placeholder-[#545456] flex w-full rounded-[8px] border-input bg-background bg-zinc-800 px-6 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#29292c] focus:outline-none focus:ring-2 focus:ring-[#9FE870] focus:border-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
