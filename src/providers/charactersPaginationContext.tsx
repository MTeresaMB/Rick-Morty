import React from 'react';

export const PaginationContext = React.createContext({
  currentPage: 1,
  updateCurrentPage: (page: number) => {}
});

interface Props {
  children: React.ReactNode;
}

export const PaginationProvider: React.FC<Props> = ({children}) => {
  const [ currentPage, setCurrentPage ] = React.useState(1);

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <PaginationContext.Provider value={({currentPage, updateCurrentPage})}>
      {children}
    </PaginationContext.Provider>
  )
}