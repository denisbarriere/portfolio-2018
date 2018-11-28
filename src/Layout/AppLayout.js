import React, { PureComponent } from "react";
import styled from "styled-components";

import { colors } from "Utilities";

export default class AppLayout extends PureComponent {
  state = {
    background: colors.blue
  };

  render() {
    const { background } = this.state;
    return <AppFrame background={background}>{this.props.children}</AppFrame>;
  }
}

const AppFrame = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.background};

  @media (min-width: 480px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  @media (min-width: 768px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;
