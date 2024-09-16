import { useState } from "react"

export default function CustomButton() {
    const [value, setValue] = useState<number>(0)
  return (
    <>
      <button className="p-2 w-36" onClick={()=> setValue((v)=> v + 1)}>Click {value}</button>
    </>
  )
}
