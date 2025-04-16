import Hero from "@/components/hero"
import FeaturedServices from "@/components/featured-services"
import ProductShowcase from "@/components/product-showcase"
import StudentSection from "@/components/student-section"
import CommunitySection from "@/components/community-section"
import TravelSection from "@/components/travel-section"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedServices />
      <ProductShowcase />
      <StudentSection />
      <CommunitySection />
      <TravelSection />
      <Newsletter />
    </div>
  )
}
