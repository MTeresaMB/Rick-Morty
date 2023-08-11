import React from 'react'
import './error.style.scss'

interface errorProps {
  textError: string
  onNavigateBack: () => void
}

export const Error: React.FC<errorProps> = ({ textError, onNavigateBack }) => {
  const TEXT_BUTTON = 'GET ME HOME'
  const STATUS_CODE_ERROR = '44'
  
  return (
    <>
      <div className="errorWrapper">
        <div className="errorContent">
          <div className="imgContent">
            <span>{ STATUS_CODE_ERROR }</span>
          </div>
          <p>{textError}</p>
          <button className="buttonBackHome" onClick={onNavigateBack}>
            { TEXT_BUTTON }
          </button>
        </div>
      </div>
    </>
  )
}
