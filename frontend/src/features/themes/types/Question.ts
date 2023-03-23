type Question = {
  id: number;
  theme_id: number;
  question: string;
  answer: string;
  points: number;
  answered?: boolean;
};

export default Question;
