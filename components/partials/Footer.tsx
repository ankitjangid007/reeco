"use client";

import styled from "styled-components";
import Navbar from "../Navbar";

const FooterContainer = styled.footer`
  background-color: #20361b;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container mx-auto text-center">
        <FooterText>
          &copy; {new Date().getFullYear()} Reeco. All rights reserved.
        </FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
