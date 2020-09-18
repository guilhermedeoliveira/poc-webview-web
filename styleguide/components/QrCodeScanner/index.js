import React, { useState } from "react"
import { func, number, object, oneOf } from "prop-types"
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

// Component needs to render in the client side to use browser apis
const QrCodeScanner = ({ onScan, onError, facingMode, delay, styles }) => {
  const [qrCodeData, setQrCodeData] = useState(null)

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

      <Text>{qrCodeData ?? "Reading code..."}</Text>
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

export default QrCodeScanner
