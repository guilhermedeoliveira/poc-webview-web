import React, { useEffect } from "react"
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

const Home = () => {
  useEffect(() => {
    document.showAndroidToast = (toast) => {
      Android.showToast(toast)
    }
  }, [])

  return (
    <div>
      <Header>Home</Header>

      <Main>
        <p>Do you want to take a picture?</p>

        <Link href="/picture">
          <Anchor>Take a picture</Anchor>
        </Link>

        <div>
          <p>Pick images from gallery</p>
          <input type="file" accept="image/png,image/jpeg,image/gif" />

          <button onClick={() => document.showAndroidToast("Hello Android!")} />
        </div>
      </Main>
    </div>
  )
}

export default Home
