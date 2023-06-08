import { ColorType } from 'lib/types';

export const HEARTS_COLORS: Exclude<ColorType, 'black' | 'white'>[] = ['mustard', 'forest', 'brick', 'lemon', 'yam', 'indigo', 'salmon', 'moss', 'cloud', 'berrymilk'];

export const HEARTS_BACKGROUND_COLORS: Exclude<ColorType, 'black' | 'white'>[] = ['salmon', 'mustard', 'moss', 'cloud', 'lemon', 'berrymilk', 'indigo', 'yam', 'brick', 'forest'];
