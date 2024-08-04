import {OffersType} from '../types/offer';

export const offers: OffersType = [
  {
    id: '6ba1dd4b-66cc-40b4-97cd-c965b0fe4434',
    title: 'The house among olive ',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'house',
    price: 816,
    images: [
      'img/static/hotel/12.jpg',
      'img/static/hotel/14.jpg',
      'img/static/hotel/15.jpg',
      'img/static/hotel/18.jpg',
      'img/static/hotel/1.jpg',
      'img/static/hotel/9.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Cable TV',
      'Washing machine',
      'Air conditioning',
      'Wi-Fi',
      'Laptop friendly workspace',
      'Breakfast',
      'Coffee machine',
      'Dishwasher',
      'Heating'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.2,
    bedrooms: 1,
    maxAdults: 3
  },
  {
    id: '7ff1b879-6ec3-4153-916a-d8e6ece36799',
    title: 'Amazing and Extremely Central Flat',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'room',
    price: 161,
    images: [
      'img/static/hotel/14.jpg',
      'img/static/hotel/19.jpg',
      'img/static/hotel/8.jpg',
      'img/static/hotel/2.jpg',
      'img/static/hotel/6.jpg',
      'img/static/hotel/13.jpg'
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Baby seat',
      'Towels',
      'Coffee machine',
      'Washing machine',
      'Cable TV',
      'Kitchen',
      'Breakfast',
      'Fridge',
      'Heating'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 3.3,
    bedrooms: 1,
    maxAdults: 1
  },
  {
    id: '205a8ecf-7253-42b1-a4b6-44972543a964',
    title: 'Canal View Prinsengracht',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'hotel',
    price: 383,
    images: [
      'img/static/hotel/12.jpg',
      'img/static/hotel/6.jpg',
      'img/static/hotel/10.jpg',
      'img/static/hotel/20.jpg',
      'img/static/hotel/9.jpg',
      'img/static/hotel/5.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    goods: [
      'Kitchen',
      'Cable TV',
      'Towels',
      'Laptop friendly workspace',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 1.3,
    bedrooms: 1,
    maxAdults: 5
  },
  {
    id: 'fe3a1eb0-1077-41bb-b271-a046d7c34f33',
    title: 'Wood and stone place',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'house',
    price: 951,
    images: [
      'img/static/hotel/8.jpg',
      'img/static/hotel/1.jpg',
      'img/static/hotel/5.jpg',
      'img/static/hotel/13.jpg',
      'img/static/hotel/9.jpg',
      'img/static/hotel/15.jpg'
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Wi-Fi',
      'Breakfast',
      'Dishwasher',
      'Laptop friendly workspace',
      'Coffee machine',
      'Washing machine',
      'Kitchen',
      'Heating',
      'Baby seat',
      'Towels',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.8,
    bedrooms: 1,
    maxAdults: 8
  },
  {
    id: 'c37df0e5-3a77-401d-8dfd-793a671d7243',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'I am happy to welcome you to my apartment in the city center! Three word: location, cosy and chic!',
    type: 'house',
    price: 581,
    images: [
      'img/static/hotel/15.jpg',
      'img/static/hotel/2.jpg',
      'img/static/hotel/10.jpg',
      'img/static/hotel/5.jpg',
      'img/static/hotel/1.jpg',
      'img/static/hotel/17.jpg'
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    goods: [
      'Kitchen',
      'Dishwasher',
      'Washer',
      'Baby seat',
      'Fridge',
      'Wi-Fi',
      'Air conditioning',
      'Washing machine',
      'Breakfast',
      'Towels'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.8,
    bedrooms: 5,
    maxAdults: 7
  },
  {
    id: 'ad577345-5e98-4dc8-8913-98a4a9c811f2',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'hotel',
    price: 231,
    images: [
      'img/static/hotel/10.jpg',
      'img/static/hotel/2.jpg',
      'img/static/hotel/12.jpg',
      'img/static/hotel/7.jpg',
      'img/static/hotel/1.jpg',
      'img/static/hotel/17.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Wi-Fi',
      'Breakfast',
      'Baby seat',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'img/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.9,
    bedrooms: 4,
    maxAdults: 3
  }
];
