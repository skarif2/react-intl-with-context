import React from "react";
import { FormattedMessage } from 'react-intl';

const Product = () => {
  return (
    <section className="section-a">
    <div className="container">
      <div>
        <h1>
          <FormattedMessage
            id='title'
            defaultMessage={'Designed for sound. Tuned for emotion.'}
          />
        </h1>
        <p>
          <FormattedMessage
            id='description'
            defaultMessage={'Active Noise Cancelling blocks out distractions, so you can get closer to your music. With Fast Fuel, it only takes a few minutes of charging to get up to 3 hours of play, so you can be on your way quicker.'}
          />
        </p>
        <a href="/" className="btn">
          <FormattedMessage
            id='button'
            defaultMessage={'Read More'}
          />
        </a>
      </div>
      <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
    </div>
  </section>
  )
}

export default Product;
