import type Theme from './Theme';

type Action =
  | { type: 'themes/loadThemes'; payload: Theme[] }
  | { type: 'themes/changePoints'; payload: number }
  | {
      type: 'themes/changeQuestion';
      payload: { id: number; themeId: number };
    };

export default Action;
