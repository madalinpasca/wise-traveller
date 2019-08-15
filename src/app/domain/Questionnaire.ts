import {SubjectArea} from "./SubjectArea";
import {Question} from "./Question";
import {User} from "./User";

export class Questionnaire {
  id: number;
  title: string;
  createdBy: User;
  subjectArea: SubjectArea
  questions: Question[];
}
