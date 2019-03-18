import React from 'react';

const EconomicsComponent = props => {
  const { children } = props

  return (
    <div className="economics-component-wrapper">
      <div className="economics-component">
        {children}
      </div>
    </div>
  )
}

export default EconomicsComponent;