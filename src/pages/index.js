import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Img from 'gatsby-image';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <p>
          Every senator on this page supported Trump as members of the 115th and/or 116th (2017-2020) Congress. They have failed to defend American lives, health, justice, and even our national sovereignty. They are traitors and scum, and they know it. Destroy them!
        </p>
        <Img
          fluid={
            data.homeJson.tat ? data.homeJson.tat.childImageSharp.fluid : {}
          }
          alt="If we nominate Trump, we will get destroyed and we will deserve it. Lindsey Graham, 05/03/2016"
        />
      </Modal>
    </Box>
    <div style={{ height: '20vh' }} />
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      tat {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        villain
        twitter
        state
        status
        challenger
        tw1tter
        website
        actblue
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxHeight: 300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
