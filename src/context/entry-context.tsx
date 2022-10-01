import { createContext, useState } from "react";
import { Entry } from "../types/entry.types";

interface Props {
  children: React.ReactNode;
}

interface EntryListContextModel {
  entryList: Entry[];
  removeEntry: (titleEntry: string) => void;
}

export const EntryListContext = createContext<EntryListContextModel>({
  entryList: [],
  removeEntry: () => {},
});

export function EntryContextProvider({ children }: Props) {
  const [entryList, setEntryList] = useState<Entry[]>([]);

  const removeEntry = (titleEntry: string) => {
    const entryIndex = entryList.findIndex(
      (entryObject) => entryObject.titleEntry === titleEntry
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
