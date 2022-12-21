import { lazy } from "react";

export const Navbars = lazy(() => import('./Navbars'))
export const Footer = lazy(() => import('./Footer'))

/* Landing Page Sections */
export const LandingHero = lazy(() => import('./LandingSections/LandingHero'))
export const LandingFeatures = lazy(() => import('./LandingSections/LandingFeatures'))
export const LandingTopDestinations = lazy(() => import('./LandingSections/LandingTopDestinations'))
export const LandingMobileApp = lazy(() => import('./LandingSections/LandingMobileApp'))
export const LandingBanner = lazy(() => import('./LandingSections/LandingBanner'))
export const LandingBoatTypes = lazy(() => import('./LandingSections/LandingBoatTypes'))
export const LandingFeaturedExperiences = lazy(() => import('./LandingSections/LandingFeaturedExperiences'))
export const LandingCallToAction = lazy(() => import('./LandingSections/LandingCallToAction'))
export const LandingSearchCloud = lazy(() => import('./LandingSections/LandingSearchCloud'))
export const LandingHowItWorks = lazy(() => import('./LandingSections/LandingHowItWorks'))
export const LandingTestimonial = lazy(() => import('./LandingSections/LandingTestimonial'))
