import React from 'react'

const ProductDetails: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Black Automatic Watch</h1>
      <p className="text-gray-700 mb-4">by Louis Watch Company</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-2">⭐⭐⭐⭐</span>
        <span>(192 reviews)</span>
      </div>
      <div className="mb-4">
        <span className="text-xl font-bold">$169.99</span>
        <span className="text-gray-500 line-through ml-2">$199.99</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded">S</button>
          <button className="px-4 py-2 border rounded">M</button>
          <button className="px-4 py-2 border rounded">L</button>
          <button className="px-4 py-2 border rounded">XL</button>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded">Add to cart</button>
      <div className="mt-4">
        <p>Tax estimate: $10.99</p>
        <p>Total: $180.98</p>
      </div>
    </div>
  )
}

export default ProductDetails
