import React from 'react'

const ProductGallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <img src="/path/to/main-image.jpg" alt="Main product image" className="w-full h-auto" />
      </div>
      <div className="flex space-x-2">
        <img src="/path/to/image1.jpg" alt="Product thumbnail 1" className="w-16 h-16" />
        <img src="/path/to/image2.jpg" alt="Product thumbnail 2" className="w-16 h-16" />
        <img src="/path/to/image3.jpg" alt="Product thumbnail 3" className="w-16 h-16" />
      </div>
    </div>
  )
}

export default ProductGallery
