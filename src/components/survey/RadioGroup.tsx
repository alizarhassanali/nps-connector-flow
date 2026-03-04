import { RadioGroup as RadixRadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { RadioQuestion } from "./types";

interface Props {
  question: RadioQuestion;
  value: string | null;
  onChange: (value: string) => void;
}

const RadioGroup = ({ question, value, onChange }: Props) => (
  <div className="space-y-3">
    <span className="text-sm font-medium text-foreground">{question.label}</span>
    <RadixRadioGroup value={value ?? undefined} onValueChange={onChange}>
      <div className="space-y-2">
        {question.options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <RadioGroupItem value={option} id={`${question.id}-${option}`} />
            <Label htmlFor={`${question.id}-${option}`} className="text-sm cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </RadixRadioGroup>
  </div>
);

export default RadioGroup;
