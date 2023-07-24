import React, {useState} from 'react'
import useLocalStorge from './useLocalStorge'
import useUpdateLogger from './useUpdateLogger'

export default function App() {
    const [name, setName] = useLocalStorge('name','')
    useUpdateLogger(name)
    
  return (
    <input
        type="text"
        value={name}
        onChange= {e => setName(e.target.value)}
    />
  )
}
