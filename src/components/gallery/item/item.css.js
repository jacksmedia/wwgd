import styled, { keyframes } from 'styled-components';
import { accent, linkcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const invisibled = keyframes`
  0% {opacity: 1;}
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;
export const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {
    visibility: visible;
    opacity: 1;
  }
`;
export const Container = styled.div`
  padding: 3rem;
  margin: 3rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  background-color: maroon;
  animation: 3s ${({ isVisible }) => (isVisible ? fadeIn : invisibled)};
  animation-fill-mode: forwards;
  
  visibility: hidden;
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
