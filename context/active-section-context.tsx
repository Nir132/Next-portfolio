"use client"
import React ,{createContext, useContext, useState} from "react";
import type { SectionName } from "@/lib/types";


type activeSectionContextProviderProps = {
  children: React.ReactNode
};
type activeSectionContextType = {
  activeSection : SectionName,
  setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick:number,
  setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>;
}

 export const activeSectionContext = createContext<activeSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: activeSectionContextProviderProps) {
  const [activeSection , setActiveSection] = useState<SectionName>("Home")
  const [timeOfLastClick, setTimeOfLastClick] =useState(0);// we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <activeSectionContext.Provider value={{
      activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
      {children}
    </activeSectionContext.Provider>
  );
}

//Building a custom hook to deal with 

export function useActiveSectionContext () {
  const context = useContext(activeSectionContext);
  if (context === null){
    throw new Error (
      "useActiveSEctionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}