import type { ScaleQuestion } from "./types";

interface Props {
  question: ScaleQuestion;
  value: number | null;
  onChange: (value: number) => void;
}

const ScaleInput = ({ question, value, onChange }: Props) => {
  const range = Array.from(
    { length: question.max - question.min + 1 },
    (_, i) => question.min + i
  );

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-foreground">{question.label}</span>
      <div className="flex gap-1.5">
        {range.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`
              flex-1 py-2 rounded-md font-medium text-sm
              transition-all duration-150
              ${value === n
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
              }
            `}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{question.minLabel}</span>
        <span>{question.maxLabel}</span>
      </div>
    </div>
  );
};

export default ScaleInput;
