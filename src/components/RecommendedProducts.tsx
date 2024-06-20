import React from 'react'

const RecommendedProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Black Automatic Watch', price: '$169.99', image: '/path/to/image.jpg', rating: '⭐⭐⭐⭐' },
    { id: 2, name: 'Black Automatic Watch', price: '$169.99', image: '/path/to/image.jpg', rating: '⭐⭐⭐⭐' },
    { id: 3, name: 'Black Automatic Watch', price: '$169.99', image: '/path/to/image.jpg', rating: '⭐⭐⭐⭐' },
    { id: 4, name: 'Black Automatic Watch', price: '$169.99', image: '/path/to/image.jpg', rating: '⭐⭐⭐⭐' },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Recommended products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">{product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedProducts
