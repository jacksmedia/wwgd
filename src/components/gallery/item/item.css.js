import styled, { keyframes } from 'styled-components';
import { accent, linkcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #firebrick;
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

export const pulsecolor = keyframes`
    0%   {color: white;}
    50%  {color: ${linkcolor};}
    100% {color: white;}
`;

export const Call = styled.div`
  display: block;
  font-size: 3rem;
  font-weight: 800;
  font-family: montserrat;
  margin: 0.5rem 1rem 0.5rem;
  animation: ${pulsecolor} 10s infinite;
`;

export const Halver = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Copy = styled.p`
  margin: 0.3rem 0.2rem 0.2rem;
  font-family: montserrat;
  font-size: 1.2rem;
  color: aliceblue;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
