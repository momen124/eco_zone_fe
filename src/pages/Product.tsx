import type { NextPage } from 'next'
import ProductGallery from '../components/ProductGallery'
import ProductDetails from '../components/ProductDetails'
import RecommendedProducts from '../components/RecommendedProducts'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery />
        <ProductDetails />
      </div>
      <div className="mt-8">
        <RecommendedProducts />
      </div>
      <Footer />
    </div>
  )
}

export default Home
