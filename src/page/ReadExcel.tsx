
/**
 * js解析excel文件
 * 安装依赖 npm i --save https://cdn.sheetjs.com/xlsx-0.19.2/xlsx-0.19.2.tgz
 * 引入依赖 import { read, utils } from 'xlsx'
 */

import { read, utils } from 'xlsx'

const ReadExcel = () => {

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files![0]
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log(event.target?.result)
      const data = new Uint8Array(event.target!.result as ArrayBufferLike)
      const workbook = read(data, {type: 'array'})
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = utils.sheet_to_json(worksheet, {header:1})
      console.log(jsonData)
    };
    reader.readAsArrayBuffer(file)
  }

  return (
    <div>
      解析Excel功能
      <input type="file" id="excel-file" accept=".xlsx,.xls" onChange={handleChange} />
    </div>
  )
}
export default ReadExcel


