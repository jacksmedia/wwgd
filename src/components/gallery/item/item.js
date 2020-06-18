import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy } from './item.css';

const Item = ({ title, copy, twitter, image, status }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <figure>
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          <figcaption>
            <Title>{title}</Title>
            <Title>
              {copy}&nbsp;{status}
            </Title>
            <Copy>{twitter}</Copy>
          </figcaption>
        </figure>
      </Container>
    )}
  </IO>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.object.isRequired,
  twitter: PropTypes.string,
};

export default Item;
