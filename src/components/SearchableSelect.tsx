import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";

interface SearchableSelectProps {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  label?: string;
  sublabel?: string;
}

export const SearchableSelect = ({
  options,
  placeholder = "Select an option",
  onChange,
  value,
}: SearchableSelectProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-xs md:w-sm mx-auto text-white">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between font-normal",
              "bg-white/5 border-purple-500/20",
              "hover:bg-white/10 hover:border-purple-500/30",
              "focus:ring-2 focus:ring-purple-500/50",
              !value && "text-white"
            )}
          >
            {value ? value : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-xs md:w-sm p-0 bg-[#1a1a1a] border-purple-500/20 text-white">
          <Command className="bg-transparent">
            <CommandInput
              placeholder="Search..."
              className="border-none focus:ring-0 h-8 m-2 p-2 bg-white/5 text-white placeholder:text-white"
            />
            <CommandEmpty className="py-2 text-sm text-white">
              No options found
            </CommandEmpty>
            <CommandGroup className="max-h-60 overflow-auto">
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 cursor-pointer transition-colors duration-200",
                    "hover:bg-purple-500/20",
                    "aria-selected:bg-purple-500/10 aria-selected:text-purple-300"
                  )}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
