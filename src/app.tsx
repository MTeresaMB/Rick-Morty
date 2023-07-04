import { RouterComponent } from "core/router";
import { PaginationProvider } from "./providers/charactersPaginationContext";
import React from "react";
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
