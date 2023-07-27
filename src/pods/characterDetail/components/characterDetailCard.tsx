import React from 'react'
import type { CharacterListEntity } from '../hooks/characterDetail.interface'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from 'core/router'
import './characterDetailCard.style.scss'

interface CharacterDetailProps {
  character: CharacterListEntity
}

export const CharacterDetailCard: React.FC<CharacterDetailProps> = (
  characterDetail: CharacterDetailProps
) => {
  const { character } = characterDetail
  const navigate = useNavigate()
  const handleBackNavigate = (): void => {
    navigate(LinkRoutes.characterList)
  }

  return (
    <div className="cardDetailContainer">
      <div className="cardDetail">
        <div className="imageContainerDetail">
          <img src={character.image} alt="character rick and morty" />
        </div>
        <div>
          <div className="nameCharacter">{character.name}</div>
          <div className="statusCharacter">
            {character.status + ' - ' + character.species}
          </div>
          <div className="genderCharacter">
            <span>Gender: </span>
            {character.gender}
          </div>
          <div className="originCharacter">
            <span>Origin: </span>
            {character.origin.name}
          </div>
          <div className="locationCharacter">
            <span>Location: </span>
            {character.location.name}
          </div>
        </div>
        <div className="buttonContainer">
          <button className="buttonBack" onClick={handleBackNavigate}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
