import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { CheckboxQuestion } from "./types";

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
    <div className="space-y-3">
      <span className="text-sm font-medium text-foreground">{question.label}</span>
      <div className="space-y-2">
        {question.options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <Checkbox
              id={`${question.id}-${option}`}
              checked={value.includes(option)}
              onCheckedChange={() => toggle(option)}
            />
            <Label htmlFor={`${question.id}-${option}`} className="text-sm cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
