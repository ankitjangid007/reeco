"use client";

import Link from "next/link";
import styled from "styled-components";

const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
  }

  li {
    font-size: 18px;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavMenu>
      <ul>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/orders">Orders</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
      </ul>
    </NavMenu>
  );
};

export default Navbar;
