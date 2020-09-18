import React, { useState } from "react"
import { func, number, object, oneOf } from "prop-types"
import dynamic from "next/dynamic"
import styled from "styled-components"
import QrReader from "react-qr-reader"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const defaultStyles = {
  width: "100%",
  maxWidth: "500px",
}

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
`

const QrCodeScanner = ({ onScan, onError, facingMode, delay, styles }) => {
  const [qrCodeData, setQrCodeData] = useState("")

  const handleScan = (data) => {
    if (data) {
      setQrCodeData(data)
      onScan(data)
    }
  }

  return (
    <Wrapper>
      <QrReader
        delay={delay}
        onError={onError}
        onScan={handleScan}
        style={styles}
        facingMode={facingMode}
      />

      <Text>{qrCodeData ?? "Lendo código..."}</Text>
    </Wrapper>
  )
}

QrCodeScanner.propTypes = {
  onScan: func.isRequired,
  onError: func,
  facingMode: oneOf(["user", "environment"]),
  delay: number,
  styles: object,
}

QrCodeScanner.defaultProps = {
  onError: () => {},
  facingMode: "environment",
  delay: 300,
  styles: defaultStyles,
}

// Component needs to render in the client side to use browser apis
export default dynamic(() => Promise.resolve(QrCodeScanner), {
  ssr: false,
})
