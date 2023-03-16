import { useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/reset.css'
import ReadExcel from './page/ReadExcel'

function App() {

  return (
    <div>
      <Button type="primary">Button</Button>
      <ReadExcel />
    </div>
  )
}

export default App
