import React from 'react'
import './error.style.scss'
import { useNavigate } from 'react-router-dom'
import { LinkRoutes } from '@/core/router'

interface errorProps {
  textError: string
}

export const Error: React.FC<errorProps> = ({ textError }) => {
  const navigate = useNavigate()
  const handleBackNavigate = (): void => {
    navigate(LinkRoutes.root)
  }
  return (
    <>
      <div className="background-img">
        <div className="errorContent">
          <div className="imgContent">
            <span>44</span>
          </div>
          <p>{textError}</p>
          <button className="buttonBackHome" onClick={handleBackNavigate}>
            GET ME HOME
          </button>
        </div>
      </div>
    </>
  )
}
