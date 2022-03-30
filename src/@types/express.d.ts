import { User } from '../configs/interfaces';
import { Playlist } from '../configs/interfaces';
import { ParsedQs } from 'qs';

declare global {
  namespace Express {
    interface Request {
      validated: User;
      user: User;
      userDecoded: any;
      playlistName: Playlist;
      artist: object;
      song: object;
      artist: ParsedQs;
      validatedToken: string;
    }
  }
}
