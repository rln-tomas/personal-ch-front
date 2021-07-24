import { useState } from 'react'

export const useInputValue = initialValue => {
  if (!initialValue) {
    initialValue = ''
  }
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return {
    value: value, onChange
  }
}
