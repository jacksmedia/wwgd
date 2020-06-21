import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy, Halver } from './item.css';

const Item = ({
  villain,
  state,
  twitter,
  image,
  status,
  challenger,
  tw1tter,
  website,
  actblue,
}) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <figure>
          <Img fluid={image ? image.childImageSharp.fluid : {}}
            alt={villain}
            className="circlized"
          />
          <figcaption>
            <Title>{villain}</Title>
            <Title>
              {state}&nbsp;{status}
            </Title>
            <Copy>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                {twitter}
              </a>
            </Copy>
          </figcaption>
          <figcaption>
            <Title>
              <a href={actblue} target="_blank" rel="noopener noreferrer">Donate to Destroy me</a>
            </Title>
            <Copy>My challenger: {challenger}</Copy>
            <Halver>
              <Copy><a href={website} target="_blank" rel="noopener noreferrer">website</a></Copy>
              <Copy><a href={tw1tter} target="_blank" rel="noopener noreferrer">twitter</a></Copy>
            </Halver>
          </figcaption>
        </figure>
      </Container>
    )}
  </IO>
);

Item.propTypes = {
  villain: PropTypes.string,
  twitter: PropTypes.string,
  state: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.object.isRequired,
  challenger: PropTypes.string,
  tw1tter: PropTypes.string,
  website: PropTypes.string,
  actblue: PropTypes.string,
};

export default Item;
