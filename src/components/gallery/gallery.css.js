import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  padding: 1rem 0;
  margin: 2rem 0;
  flex-flow: column wrap;
  display: block;

  ${MEDIA.TABLET`
  	background-color: firebrick;
  `};
`;
