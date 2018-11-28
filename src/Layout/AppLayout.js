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
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  background-color: ${props => props.background};
  height: 100vh;
  overflow: hidden;
`;
