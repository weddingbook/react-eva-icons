import React from 'react';
import * as polished from 'polished'
import styled, { css } from 'styled-components';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Icon from '../../../../../../src/Icon';
import { foreground, red, lightGrey } from '../../../../utils/colors';

const Wrapper = styled.div`
  margin: 1em;
`;

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
`

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  overflow: scroll;
  ${column}
`

const StyledPreview = styled(LivePreview)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column}
`

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`

const scope = {Icon};

const code = `
  const animation = {
    type: "pulse",
    hover: true,
    infinite: false,
  };

  const ActivityIcon = (
    <Icon 
      animation={animation}
      fill="#36f"
      name="activity"
      size="large"
    />
  );

  render (ActivityIcon);
`;

const LiveCode = (props) => (
  <Wrapper>
    <StyledProvider
      code={code}
      noInline={true}
      mountStylesheet={false}
      scope={scope}
    >
      <LiveWrapper>
        <StyledEditor />
        <StyledPreview />
        <StyledError />
      </LiveWrapper>

    </StyledProvider>
  </Wrapper>
);

export default LiveCode;
