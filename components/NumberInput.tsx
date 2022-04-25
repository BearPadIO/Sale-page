import { useState } from "react"

interface Props {
  name: string,
  formRef: React.RefObject<HTMLFormElement>,
}

export default function NumberInput({ name, formRef }: Props) {
  const [number, setNumber] = useState(0)

  function decrement() {
    setNumber(n => n > 0 ? n - 1 : 0)
  }

  function increment() {
    setNumber(n => n + 1)
  }

  function handleKeyboard(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      formRef.current?.submit();
    }
  }

  return (
   
      
      <input
        type="number"
        name={name}
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
        min={0}
        className="w-36 border-2 border-gray-200 rounded-md focus:ring-0 text-center items-center"
      />
   
  )
}
