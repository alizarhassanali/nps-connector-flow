import { Textarea } from "@/components/ui/textarea";
import type { OpenTextQuestion } from "./types";

interface Props {
  question: OpenTextQuestion;
  value: string;
  onChange: (value: string) => void;
}

const OpenTextInput = ({ question, value, onChange }: Props) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-foreground">{question.label}</label>
    <Textarea
      placeholder={question.placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[100px] resize-none"
    />
  </div>
);

export default OpenTextInput;
