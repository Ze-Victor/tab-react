import { createContext, useState } from "react";

interface AuxProps {
  children: React.ReactNode;
}

export interface ItemTab {
  title: string;
  text: string;
}

interface Tabs {
  tabs: ItemTab[];
  saveNewTab(tabs: ItemTab[]): void;
}

export const TabContext = createContext({} as Tabs);

export const TabProvider = ({ children }: AuxProps) => {
  const [tabs, setTabs] = useState<ItemTab[]>([]);

  const saveNewTab = (newTab: ItemTab[]) => {
    setTabs([...newTab]);
  };

  return (
    <TabContext.Provider value={{ tabs, saveNewTab }}>
      {children}
    </TabContext.Provider>
  );
};
