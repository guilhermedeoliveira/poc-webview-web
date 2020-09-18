import React from "react"

import Header from "styleguide/components/Header"
import QrCodeScanner from "styleguide/components/QrCodeScanner"

const onScanCode = () => {}
const onErrorScanner = () => {}

const Home = () => (
  <div>
    <Header>Picture</Header>

    <QrCodeScanner onScan={onScanCode} onError={onErrorScanner} />
  </div>
)

export default Home
