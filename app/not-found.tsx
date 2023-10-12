"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const NotFound = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <NotFoundContainer>
      <Image
        src="/images/404.png"
        width={800}
        height={500}
        alt="page-not-found"
      />
      <NotFoundText>
        We are sorry, the page you have looked for does not exist in our
        website! Maybe go to our home page?
      </NotFoundText>
      <Button label="Back to Home" onClick={handleBackToHome} />
    </NotFoundContainer>
  );
};

export default NotFound;
