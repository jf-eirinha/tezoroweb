import React from 'react'

const CardComponent = props => {
  const { title, text, children, logoclass } = props

  return (
    <div className="card-wrapper">
      <div className={logoclass}>
        <div>{children}</div>
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardComponent;