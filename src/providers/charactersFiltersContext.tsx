import React from "react";
interface SearchContextProps{
  lastSearch: string;
  setLastSearch: (search: string) => void;
}
interface Props{
  children: React.ReactNode,
}

export const SearchContext = React.createContext<SearchContextProps>({
  lastSearch: '',
  setLastSearch: () => {}
});

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [lastSearch, setLastSearch] = React.useState("");

  const value: SearchContextProps = {
    lastSearch,
    setLastSearch: (search: string) => setLastSearch(search),
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
