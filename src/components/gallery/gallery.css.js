import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0;
  margin: 2rem 0 0 0;
  display: block;

  ${MEDIA.TABLET`
  	background-color: whitesmoke;
  `};
`;
