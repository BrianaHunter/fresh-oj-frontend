import { createContext, useState } from "react";
import { Entry } from "../types/entry.types";

interface Props {
  children: React.ReactNode;
}

interface EntryListContextModel {
  entryList: Entry[];
  removeEntry: (userId: string) => void;
}

export const EntryListContext = createContext<EntryListContextModel>({
  entryList: [],
  removeEntry: () => {},
});

export function EntryContextProvider({ children }: Props) {
  const [entryList, setEntryList] = useState<Entry[]>([]);

  const removeEntry = (userId: string) => {
    const entryIndex = entryList.findIndex(
      (entryObject) => entryObject.userId === userId
    );
    const updatedEntryList = [...entryList];
    updatedEntryList.splice(entryIndex, 1);
    setEntryList(updatedEntryList);
  };

  return (
    <EntryListContext.Provider value={{ entryList, removeEntry }}>
      {children}
    </EntryListContext.Provider>
  );
}
