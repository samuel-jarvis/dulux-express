import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer padding">
      <div className="footer__content">
        <div className="footer__content__left">
          <h1 className="footer__content__heading">
            Dulux Express
          </h1>
          <p>
            Dulux Express is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade.
          </p>
        </div>

        <div className="footer__content__left">
          <h1 className="footer__content__heading">
            Location
          </h1>
          <p>
            Address:
            <span className="orange"> 13600 SW 288th St, Homestead, FL 33033</span>
          </p>
          <p>
            Phone:
            <span className="orange"> +1 (862) 397‑6064</span>
          </p>
          <p>
            Email:
            <span className="orange"> duluxexpress@gmail.com</span>
          </p>
        </div>

        <div className="footer__content__center">
          <h1 className="footer__content__heading">
            Quick Links
          </h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </div>
      </div>
      <p className='copyright'>
        Copyright © 2022 Dulux Express. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer