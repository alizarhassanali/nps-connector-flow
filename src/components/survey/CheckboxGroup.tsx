import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { CheckboxQuestion } from "./types";
import { cn } from "@/lib/utils";

interface Props {
  question: CheckboxQuestion;
  value: string[];
  onChange: (value: string[]) => void;
}

const CheckboxGroup = ({ question, value, onChange }: Props) => {
  const toggle = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((v) => v !== option)
        : [...value, option]
    );
  };

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-foreground">{question.label}</span>
      <div className="space-y-1.5">
        {question.options.map((option) => {
          const selected = value.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg border text-left transition-colors",
                selected
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              )}
            >
              <Checkbox
                id={`${question.id}-${option}`}
                checked={selected}
                onCheckedChange={() => toggle(option)}
                className="pointer-events-none"
              />
              <Label htmlFor={`${question.id}-${option}`} className="text-sm cursor-pointer flex-1 pointer-events-none">
                {option}
              </Label>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
