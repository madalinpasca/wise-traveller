import {CheckBoxOptions} from "./CheckBoxOptions";

export class Question {
  id: number;
  position: number;
  definition: string;
  blankSpace: boolean;
  multipleCorrectAnswer: boolean;
  checkBox: boolean;
  options: CheckBoxOptions[];
}
