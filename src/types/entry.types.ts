export interface Entry {
  _id: string;
  userId: string;
  title: string;
  content: string;
  mood: string;
  createdAt: string;
  updatedAt: string;
}

export type EntryResults = {
  Entry: Entry[];
};
