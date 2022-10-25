import React from 'react'
import "./contactform.scss"

const ContactForm = () => {
  return (
    <div className='contactform padding'>
      <p className="heading">Leave a Message</p>

      <div>
        {/* contact form */}
        <form className="contact-form" action='/'>
          <div className="form-group">
            <input required type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input required type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <input required type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea required placeholder="Message" />
          </div>

          <input className='form-button' type="submit" value="Submit Form" />
        </form>
      </div>
    </div>
  )
}

export default ContactForm