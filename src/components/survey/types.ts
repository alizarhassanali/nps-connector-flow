export type QuestionType = 'open-text' | 'checkbox' | 'radio' | 'scale';

export interface BaseQuestion {
  id: string;
  label: string;
  required?: boolean;
}

export interface OpenTextQuestion extends BaseQuestion {
  type: 'open-text';
  placeholder?: string;
}

export interface CheckboxQuestion extends BaseQuestion {
  type: 'checkbox';
  options: string[];
}

export interface RadioQuestion extends BaseQuestion {
  type: 'radio';
  options: string[];
}

export interface ScaleQuestion extends BaseQuestion {
  type: 'scale';
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
}

export type SurveyQuestion = OpenTextQuestion | CheckboxQuestion | RadioQuestion | ScaleQuestion;

export type QuestionAnswer = string | string[] | number | null;
