import React, { type ReactElement } from 'react'
import { CharacterListContainer } from '@/pods/characterList/characterList.container'
import { AppHeaderLayout } from '@/layouts/appHeader/appHeader.layout'

export const CharacterListScene = (): ReactElement => (<AppHeaderLayout><CharacterListContainer/></AppHeaderLayout>)
