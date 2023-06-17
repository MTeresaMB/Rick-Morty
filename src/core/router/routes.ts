import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  detailCollection: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  detailCharacter: '/character/:id',
}

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'detailCharacter'> { 
  detailCharacter: NavigationFunction;
}

export const LinkRoutes: LinkRoutes = {
  ...switchRoutes,
  detailCharacter: (id) => generatePath(switchRoutes.detailCollection, {id})
}