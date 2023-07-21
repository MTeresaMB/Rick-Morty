import React, { type ReactElement } from 'react'
import { CharacterDetailContainer } from '@/pods/characterDetail'
import { AppHeaderLayout } from '@/layouts/appHeader/appHeader.layout'

export const CharacterDetailScene = (): ReactElement => (<AppHeaderLayout><CharacterDetailContainer/></AppHeaderLayout>)
