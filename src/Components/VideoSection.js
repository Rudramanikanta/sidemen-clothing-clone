import React from 'react'

const VideoSection = () => {
  return (
    <div className='h-[100vh] w-full overflow-y-hidden'>
    <video autoPlay muted loop className="object-cover w-full h-full">
        <source
          src="https://cdn.shopify.com/videos/c/vp/b4d719b4bf2e4e51ab596cad4a1d2cf0/b4d719b4bf2e4e51ab596cad4a1d2cf0.HD-1080p-7.2Mbps-31030775.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
  )
}

export default VideoSection