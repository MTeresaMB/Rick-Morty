import { RouterComponent } from 'core/router';
import React from 'react';

const App: React.FC = () => {
  return <RouterComponent/>
}
export const AppProviders: React.FC = () => {
  return <><App/></>
}