import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const CheckboxErrorBoundary = ({ children }: Props) => {
  const [error, setError] = useState(null)

  if (error) {
    return <p onClick={() => setError(null)}>❌{error}</p>
  }

  try {
    return (
      <div>
        {/* <pre>{JSON.stringify(error, null, 4)}</pre> */}
        {children}
      </div>
    )
  } catch (e: any) {
    console.log('catched')
    setError(e)
    return null
  }
}
