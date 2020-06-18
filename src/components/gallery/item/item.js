import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy } from './item.css';

const Item = ({ title, copy, twitter, image }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <figure>
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          <figcaption>
            <Title>{title}&nbsp;{copy}</Title>
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
  image: PropTypes.object.isRequired,
  twitter: PropTypes.string,
};

export default Item;
