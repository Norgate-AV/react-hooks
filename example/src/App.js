import React from 'react'

import { useMyHook } from '@norgate-av/react-hooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
