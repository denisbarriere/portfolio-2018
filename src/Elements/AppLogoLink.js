import styled from "styled-components";
import { Link } from "react-router-dom";

import { transition, black, grey } from "Utilities";

const AppLogoLink = styled(Link)`
  margin-left: 10vw;
  height: 100%;
  width: auto;
  max-width: 100px;
  background-color: ${black};
  ${transition({})};
  display: block;
  &:hover {
    background-color: ${grey};
  }
`;

export default AppLogoLink;
