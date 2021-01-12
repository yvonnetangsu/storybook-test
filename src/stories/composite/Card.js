import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "../simple/Button";
import './card.css';

/**
 * Card component with several fields to ensure flexibility - a media element, headline, super headline, body content, call-to-action (CTA) link and button link. The default .su-card has an image (optional) as its media element. For a better user experience, use either the CTA link or link button but not both together.
 */
export const Card = ({ variant, link, imageLink, headline, superheadline, body, ...props }) => {
  const mode = variant ? `su-card su-card--${variant}` : `su-card`;
  return (
    <article className={mode} {...props}>
      <figure className="su-media su-media--image su-card__media">
        <a rel="nofollow noopener" tabIndex="-1" href={link}>
          <div className="su-media__wrapper su-aspect-ratio">
            <img src={imageLink}/>
          </div>
        </a>
      </figure>
      <section className="su-card__contents">
        <span>{superheadline}</span>
        <h2>{headline}</h2>
        <p>{body}</p>
        <div className="su-card__button">
          <Button label={"Card Button"} />
        </div>
      </section>
    </article>
  );
};

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['vertical', 'horizontal','minimal']),
  superheadline: PropTypes.string,
  imageLink: PropTypes.string,
  link: PropTypes.string,
  body: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  headline: "I'm a headline",
  superheadline: "I'm a superheadline",
  imageLink: "https://placeimg.com/2000/1333/any",
  body: "Sample text goes here and this card should be able to handle lines",
  link: "https://decanter.stanford.edu",
  variant: 'vertical',
  onClick: undefined,
};
