import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy } from './item.css';

const Item = ({
  title,
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
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          <figcaption>
            <p>Hi, I&apos;m </p>
            <Title>{title},</Title>
            <Title>
              {state}&nbsp;{status}
            </Title>
            <Copy>{twitter}</Copy>
          </figcaption>
          <figcaption>
            <Title>Donate to destroy me!</Title>
            {actblue}
            <Copy>My challenger: {challenger}</Copy>
            <Copy>Their website: {website}</Copy>
            <Copy>Their twitter: {tw1tter}</Copy>
          </figcaption>
        </figure>
      </Container>
    )}
  </IO>
);

Item.propTypes = {
  title: PropTypes.string,
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
