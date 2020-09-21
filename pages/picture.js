import React from "react"

import Header from "styleguide/components/Header"
import QrCodeScanner from "styleguide/components/QrCodeScanner"

const onScanCode = () => {}
const onErrorScanner = () => {}

const Home = () => (
  <div>
    <Header>Picture</Header>

    <QrCodeScanner QrCodeScanner onScan={onScanCode} onError={onErrorScanner} />

    <input type="file" accept="image/*;capture=camera" />
  </div>
)

export default Home
