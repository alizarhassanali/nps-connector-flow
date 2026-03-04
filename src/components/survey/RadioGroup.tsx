import { RadioGroup as RadixRadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { RadioQuestion } from "./types";
import { cn } from "@/lib/utils";

interface Props {
  question: RadioQuestion;
  value: string | null;
  onChange: (value: string) => void;
}

const RadioGroup = ({ question, value, onChange }: Props) => (
  <div className="space-y-2">
    <span className="text-sm font-medium text-foreground">{question.label}</span>
    <RadixRadioGroup value={value ?? undefined} onValueChange={onChange}>
      <div className="space-y-1.5">
        {question.options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg border text-left transition-colors",
                selected
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              )}
            >
              <RadioGroupItem value={option} id={`${question.id}-${option}`} className="pointer-events-none" />
              <Label htmlFor={`${question.id}-${option}`} className="text-sm cursor-pointer flex-1 pointer-events-none">
                {option}
              </Label>
            </button>
          );
        })}
      </div>
    </RadixRadioGroup>
  </div>
);

export default RadioGroup;
