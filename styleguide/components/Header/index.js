import React from "react"
import { useRouter } from "next/router"
import styled from "styled-components"
import { BiArrowBack } from "react-icons/bi"

const Wrapper = styled.header`
  position: relative;
  margin-bottom: 2rem;
`

const BackWrapper = styled.span`
  position: absolute;
  display: flex;
  cursor: pointer;
  padding: 1rem;
`

const StyledIcon = styled(BiArrowBack)`
  fill: ${({ theme }) => theme.colors.primary};
`

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

const Header = ({ children }) => {
  const { back } = useRouter()

  return (
    <Wrapper>
      <BackWrapper onClick={back}>
        <StyledIcon size="2em" />
      </BackWrapper>

      <Title>{children}</Title>
    </Wrapper>
  )
}

export default Header
