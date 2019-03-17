import React from 'react';

const EconomicsComponent = props => {
  const { title, children } = props

  return (
    <div className="economics-component-wrapper">
      <h4>{title}</h4>
      <div className="economics-component">
        {children}
      </div>
    </div>
  )
}

export default EconomicsComponent;