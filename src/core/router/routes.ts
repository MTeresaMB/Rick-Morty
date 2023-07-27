import { generatePath } from 'react-router-dom'

interface SwitchRoutes {
  root: string
  characterList: string
  detailCharacter: string
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterList: '/character',
  detailCharacter: '/character/:id'
}

type NavigationFunction = (id: number) => string

interface LinkRoutes extends Omit<SwitchRoutes, 'detailCharacter'> {
  detailCharacter: NavigationFunction
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LinkRoutes: LinkRoutes = {
  ...switchRoutes,
  detailCharacter: (id) => generatePath(switchRoutes.detailCharacter, { id })
}
