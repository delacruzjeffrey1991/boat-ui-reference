import { 
  LandingBanner,
  LandingBoatTypes,
  LandingCallToAction,
  LandingFeaturedExperiences,
  LandingFeatures, 
  LandingHero, 
  LandingHowItWorks, 
  LandingMobileApp, 
  LandingSearchCloud, 
  LandingTestimonial, 
  LandingTopDestinations,
} from '@/components/Sections'
import GuestLayout  from '@/components/Layout/GuestLayout'
import { Meta } from '@/components/Layout/Meta'

export default function Home() {
  return (
    <GuestLayout
        meta={
          <Meta
            title="Boat Rentals & Yacht Charters | Boat Rental World"
            description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
          />
        }
      >
        <LandingHero/>
        <LandingFeatures/>
        <LandingTopDestinations/>
        <LandingMobileApp/>
        <LandingBanner/>
        <LandingBoatTypes/>
        <LandingFeaturedExperiences/>
        <LandingCallToAction/>
        <LandingSearchCloud/>
        <LandingHowItWorks/>
        <LandingTestimonial/>
    </GuestLayout>
  )
}
