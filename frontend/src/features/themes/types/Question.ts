type Question = {
  id: number;
  theme_id: number;
  question: string;
  question_pic: string;
  answer: string;
  points: number;
  picForAnswer: string;
  infoForAnswer: string;
  answered?: boolean;
};

export default Question;
