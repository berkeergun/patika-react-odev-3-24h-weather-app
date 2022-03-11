import React from 'react'

function Error({error}) {
  return (
    <div className='error'>
      <h2>{error}</h2>
    </div>
  )
}

export default Error