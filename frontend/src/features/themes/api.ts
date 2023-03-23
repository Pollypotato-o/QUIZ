/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
import type Theme from './types/Theme';

export async function loadThemes(): Promise<Theme[]> {
  const res = await fetch('/api/themes');
  return res.json();
}
