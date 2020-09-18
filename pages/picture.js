import React from "react"
import dynamic from "next/dynamic"

import Header from "styleguide/components/Header"

const onScanCode = () => {}
const onErrorScanner = () => {}

const QrCodeScannerNoSSR = dynamic(
  () => import("styleguide/components/QrCodeScanner"),
  {
    loading: () => <p>Loading camera...</p>,
  }
)

const Home = () => (
  <div>
    <Header>Picture</Header>

    <QrCodeScannerNoSSR onScan={onScanCode} onError={onErrorScanner} />
  </div>
)

export default Home
