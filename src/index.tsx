import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE} from './const';
import {offersCard} from './mocks/offers-card';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      activeCity={DEFAULT_CITY}
      sortType={DEFAULT_SORT_TYPE}
      offers={offers}
      offersCard={offersCard}
      reviews={reviews}
      authorizationStatus={AuthorizationStatus.Auth}
    />
  </React.StrictMode>
);
