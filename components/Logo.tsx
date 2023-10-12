"use client";

import Link from "next/link";
import styled from "styled-components";

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/">Reeco</Link>
    </LogoContainer>
  );
};

export default Logo;
