import { Adventure } from './Adventure';
import { Emote } from './Emote';
import { Portrait } from './Portrait';

export interface Assets {
  adventures: Adventure[];
  emotes: Emote[];
  portraits: Portrait[];
  poses: string[];
}
