import React from 'react'
import ReactLoading from 'react-loading'
const LoadingSpinner = () => {
  return (
    <div className="loading-container">
    <ReactLoading type="spin" color='orangered' height={'10%'} width={'10%'} className='loading' />

    <h2 className='loading-text'>
        Loading...
    </h2>
    </div>
  )
}

export default LoadingSpinner