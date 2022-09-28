export interface Mood {
  _id: string;
  userId: string;
  mood: string;
  createdAt: string;
  updatedAt: string;
  value?: number;
  color?: string;
}
