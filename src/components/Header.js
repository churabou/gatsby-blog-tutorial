import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.header`
  background: var(--theme-color);
  margin: 0px;
  padding: 0.5em 1em;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default () => (
  <Wrapper>
    <h1>
      <Link to="/">Qiitaに書いたやつ</Link>
    </h1>
  </Wrapper>
);