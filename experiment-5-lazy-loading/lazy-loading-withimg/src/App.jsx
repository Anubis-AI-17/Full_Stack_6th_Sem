import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (showProfile) {
      setIsVisible(true)
    }
  }, [showProfile])

  const handleImageLoad = () => {
    // Add 3 second delay before marking as loaded
    setTimeout(() => {
      setImageLoaded(true)
    }, 3000)
  }

  return (
    <div className="container">
      <button 
        className="load-btn"
        onClick={() => setShowProfile(!showProfile)}
      >
        {showProfile ? 'Close Profile' : 'Load User'}
      </button>
      
      {showProfile && (
        <div className="content-wrapper">
          {/* Left side - Lazy Loaded Image */}
          <div className="image-container">
            <div className="image-wrapper">
              {!imageLoaded && (
                <div className="loading-placeholder">
                  <div className="spinner"></div>
                </div>
              )}
              {isVisible && (
                <img
                  ref={imgRef}
                  src={`https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop&t=${Date.now()}`}
                  alt="Lazy loaded beach image"
                  onLoad={handleImageLoad}
                  className={`lazy-image ${imageLoaded ? 'loaded' : ''}`}
                />
              )}
            </div>
            <p className="please-wait">
              {!imageLoaded ? 'Please wait...' : 'Image loaded!'}
            </p>
          </div>

          {/* Right side - Text Content */}
          <div className="text-container">
            <h1>Image Lazy Loading</h1>
            <p>
              This text loads immediately. The image on the left will load only when it comes into view.
            </p>
            <p>
              Lazy loading helps reduce initial page load time and saves bandwidth by loading resources only when needed.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
