import React from 'react';

import { Paper } from '@material-ui/core';

import Background from '../Background';

import styled from 'styled-components';

const StyledBackgroundOverlay = styled(Paper)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60%;
`;

const backgroundImg = '/static/images/article-background.jpg';

const ArticleBackground = () =>
  <>
    <Background image={backgroundImg} />
    <StyledBackgroundOverlay square />
  </>
;

export default ArticleBackground
  
  