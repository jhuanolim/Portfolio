import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

function Services() {
  return (
  <section id='services' >
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}
      <article className='service'>
        <div className='service__head'>
          <h3>Web Development Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* END OF Web Development */}
      <article className='service'>
        <div className='service__head'>
          <h3>Content Creation Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheckLg className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
      {/* END OF Content Creation */}
    </div>
  </section>  )
}

export default Services