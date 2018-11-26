import React, { PureComponent } from "react";
import styled from "styled-components";

import { colors } from "Utilities";

export default class AppWrapper extends PureComponent {
  state = {
    background: colors.turquoise
  };

  render() {
    const { background } = this.state;
    return <Portfolio background={background}>{this.props.children}</Portfolio>;
  }
}

const Portfolio = styled.div`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  background-color: ${props => props.background};
  height: 100vh;
`;
