import React from 'react'
import './error.style.scss'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from '@/core/router'

interface errorProps {
  textError: string
}

export const Error: React.FC<errorProps> = ({ textError }) => {
  const TEXT_BUTTON = 'GET ME HOME'
  const STATUS_CODE_ERROR = '44'
  const navigate = useNavigate()
  const handleBackNavigate = (): void => {
    navigate(LinkRoutes.root)
  }
  return (
    <>
      <div className="errorWrapper">
        <div className="errorContent">
          <div className="imgContent">
            <span>{ STATUS_CODE_ERROR }</span>
          </div>
          <p>{textError}</p>
          <button className="buttonBackHome" onClick={handleBackNavigate}>
            { TEXT_BUTTON }
          </button>
        </div>
      </div>
    </>
  )
}
