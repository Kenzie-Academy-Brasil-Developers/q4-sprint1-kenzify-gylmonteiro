type UserDb = Array<User>;
type ExpiresIn = string | number;
type envType = string | undefined;

interface JWTConfig {
  secretKey: string;
  expiresIn: ExpiresIn;
}

interface User {
  id: string;
  username: string;
  password: string;
  playlist: Object;
  accessToken: string;
}

interface Playlist {
  title: string;
  duration: string;
  releasedDate: Date;
  listenedByMe: number;
  genres: Array<string>;
}

export { User, UserDb, Playlist, JWTConfig, envType };
