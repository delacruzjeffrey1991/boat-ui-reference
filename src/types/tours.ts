

export type TourType = {
  id: number;
  head_line: string;
  description: string;
  pictures: {
    trip_picture_id: number;
    trip_picture_url: string;
  }[]
  vessel: {
    vessel_id: number;
    make_model: string;
    length: string;
    year: string;
    capacity: number;
    number_of_engines: number;
    engine_horsepower: number;
    engine_brand: string;
    engine_model: string;
    vessel_features: {
      feature_id: number;
      label: string;
      description: string
    }[]
    categories: {
      trip_category_id: number;
      label: string;
      desciption: string;
      logo: string;
    }[]
    location: {
      location_id: number;
      city: string;
      state: string;
      country: string;
      zip: string;
      address: string;
      latitude: number;
      longitude: string;
    }
    pricing: {
      pricing_id: number,
      currency: string,
      price_per_day: number,
      per_day_minimum: number,
      price_per_week: number,
      price_per_hour: number,
      per_hour_minimum: number,
      price_per_night: number,
      per_night_minimum: number,
      security_allowance: number,
      price_per_multiple_days: number,
      per_multiple_days_minimum: number,
      price_per_multiple_hours: number,
      per_multiple_hours_minimum: number,
      price_per_person: number,
      per_person_minimum: number,
      per_person_charge_type: number,
      cancellation_refund_rate: number,
      cancellation_allowed_days: number,
      rental_terms: number,
    },
    user: {
      user_id: number,
      email: string;
      first_name: string,
      last_name: string
    },
    trip_status: {
        trip_status_id: number,
        description: string
    },
    operator_status: {
        operator_status_id: number,
        description: string
    }
  }
}

export type LocationType = {
  location_id: number;
  city: string;
  state: string;
  country: string;
  zip: string;
  address: string;
  latitude: string;
  longitude: string;
}

export type TourListType = {
  id: number;
  head_line: string;
  description: string;
  pictures: {
    trip_picture_id: number;
    trip_picture_url: string; 
  }[]
  location: LocationType;
  pricing: {
    pricing_id: number;
    price_per_day: number;
    currency: string;
  }
  overall_rating: string;
} 