import styled from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 3.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #333')};
`;

export const Title = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  font-family: playfair-display;
  margin: 0.5rem 1rem 0.5rem;
`;

export const Halver = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Copy = styled.p`
  color: aliceblue;
  margin: 0 0.2rem 0.2rem;
  font-size: 1.2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
