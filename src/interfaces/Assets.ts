import { Adventure } from './Adventure';
import { Emote } from './Emote';
import { Portrait } from './Portrait';
import { Pose } from './Pose';

export interface Assets {
  adventures: Adventure[];
  emotes: Emote[];
  portraits: Portrait[];
  poses: Pose[];
}
