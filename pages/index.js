import React from "react"
import Link from "next/link"
import styled from "styled-components"

import Header from "styleguide/components/Header"

const Main = styled.main`
  text-align: center;
  padding: 0 1rem;
  font-size: 22px;
`

const Anchor = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => (
  <div>
    <Header>Home</Header>

    <Main>
      <p>Do you want to take a picture?</p>

      <Link href="/picture">
        <Anchor>Go take a picture</Anchor>
      </Link>
    </Main>
  </div>
)

export default Home
