import React from "react";
import { RouterComponent } from "core/router";
import { PaginationProvider } from "./providers/charactersPaginationContext";
import {
  SearchContext,
  SearchContextProvider,
} from "./providers/charactersFiltersContext";

export const App: React.FC = () => {
  return (
    <>
      <SearchContextProvider>
        <PaginationProvider>
          <RouterComponent />
        </PaginationProvider>
      </SearchContextProvider>
    </>
  );
};
