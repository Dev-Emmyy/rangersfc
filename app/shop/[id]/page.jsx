import HeroSection from "@/app/components/shop/HeroSection"
import ProductDetails from "@/app/components/shop/ProductDetails"
import ShopFooter from "@/app/components/shop/ShopFooter"

export default function ProductPage({ params }) {
  return (
    <main>
      <HeroSection />
      <ProductDetails productId={params.id} />
      <ShopFooter />
    </main>
  )
}