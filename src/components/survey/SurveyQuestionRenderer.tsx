import type { SurveyQuestion, QuestionAnswer } from "./types";
import OpenTextInput from "./OpenTextInput";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import ScaleInput from "./ScaleInput";

interface Props {
  question: SurveyQuestion;
  value: QuestionAnswer;
  onChange: (value: QuestionAnswer) => void;
}

const SurveyQuestionRenderer = ({ question, value, onChange }: Props) => {
  switch (question.type) {
    case 'open-text':
      return (
        <OpenTextInput
          question={question}
          value={(value as string) ?? ''}
          onChange={onChange}
        />
      );
    case 'checkbox':
      return (
        <CheckboxGroup
          question={question}
          value={(value as string[]) ?? []}
          onChange={onChange}
        />
      );
    case 'radio':
      return (
        <RadioGroup
          question={question}
          value={(value as string) ?? null}
          onChange={onChange}
        />
      );
    case 'scale':
      return (
        <ScaleInput
          question={question}
          value={(value as number) ?? null}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};

export default SurveyQuestionRenderer;
