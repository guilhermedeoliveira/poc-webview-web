import React, { useState } from "react"
import { func, number, object, oneOf } from "prop-types"
import dynamic from "next/dynamic"
import styled from "styled-components"

// Component needs to render in the client side to use browser apis
const QrReaderNoSSR = dynamic(() => import("react-qr-reader"), {
  ssr: false,
  loading: () => <p>Loading camera...</p>,
})

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
  const [qrCodeData, setQrCodeData] = useState(null)

  const handleScan = (data) => {
    if (data) {
      setQrCodeData(data)
      onScan(data)
    }
  }

  return (
    <Wrapper>
      <QrReaderNoSSR
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
