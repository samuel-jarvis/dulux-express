import React from 'react'
import "./header.scss"

const Header = ({main, side}) => {
  return (
    <div>
      <div className="header">
        <div className="header__content">
          <div className="header__content__left">
            <h1>{main}</h1>
          </div>

          <div className="header__content__right">
            <div className="header__content__right__img">
              <p>{side}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header