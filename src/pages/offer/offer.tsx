import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import CardList from '../../components/card-list/card-list';
import Reviews from '../../components/reviews/reviews';
import {OffersType} from '../../types/offer';
import {ReviewsType} from '../../types/reviews';
import {getRating} from '../../utils';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type OfferProps = {
  offers: OffersType;
  reviews: ReviewsType;
  authorizationStatus: AuthorizationStatus;
}

function OfferScreen({offers, reviews, authorizationStatus}: OfferProps): JSX.Element {
  const {id: offerId} = useParams();

  const offer = offers.find((item) => String(item.id) === offerId);

  if (!offer) {
    return <NotFoundScreen/>;
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.map(({id, path})=>(
              <div className="offer__image-wrapper" key={id}>
                <img className="offer__image" src={path} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}

            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: getRating(offer.rating)}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedroomsCount} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.inside.map(({id, title}) => (
                  <li className="offer__inside-item" key={id}>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {offer.host.name}
                </span>
                {offer.host.isPro &&
                  <span className="offer__user-status">
                      Pro
                  </span>}
              </div>
              <div className="offer__description" dangerouslySetInnerHTML={{__html: offer.host.description}} />
            </div>
            <Reviews reviews={reviews} authorizationStatus={authorizationStatus}/>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <CardList offers={offers.slice(0, 3)} blockClass="near-places__card" elementClass="near-places__image-wrapper"/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
