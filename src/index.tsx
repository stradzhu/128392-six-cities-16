import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthorizationStatus, Setting} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.offersCount}
      favoritesCount={Setting.favoritesCount}
      cards={Setting.cards}
      authorizationStatus={AuthorizationStatus.Auth}
    />
  </React.StrictMode>
);
