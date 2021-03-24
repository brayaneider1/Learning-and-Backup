import { createIconSetFromFontello } from '@expo/vector-icons';
import Config from './config.json';

export const Yampicons = createIconSetFromFontello(
  Config,
  'yampicons',
  'yampicons.ttf'
);
