import type Question from './Question';

type Theme = {
  id: number;
  title: string;
  Questions: Question[];
};

export default Theme;
