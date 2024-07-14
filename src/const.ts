export type CardType = {
  id: number;
  name: string;
  price: string;
  premium: boolean;
  bookmarked: boolean;
  type: string;
  image: string;
};

type SettingType = {
  offersCount: number;
  cards: CardType[];
};

export const Setting: SettingType = {
  offersCount: 456,
  cards: [
    {
      id: 111,
      name: 'Beautiful & luxurious apartment at great location',
      price: '€120',
      premium: true,
      bookmarked: false,
      type: 'Apartment',
      image: 'img/apartment-01.jpg',
    },
    {
      id: 222,
      name: 'Wood and stone place',
      price: '€80',
      premium: false,
      bookmarked: true,
      type: 'Room',
      image: 'img/room.jpg',
    },
    {
      id: 333,
      name: 'Canal View Prinsengracht',
      price: '€132',
      premium: false,
      bookmarked: false,
      type: 'Apartment',
      image: 'img/apartment-02.jpg',
    },
    {
      id: 444,
      name: 'Nice, cozy, warm big bed apartment',
      price: '€180',
      premium: true,
      bookmarked: false,
      type: 'Apartment',
      image: 'img/apartment-03.jpg',
    },
    {
      id: 555,
      name: 'Wood and stone place',
      price: '€80',
      premium: false,
      bookmarked: true,
      type: 'Room',
      image: 'img/room.jpg',
    }
  ]
};
