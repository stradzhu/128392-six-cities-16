import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {MAX_OFFER_PHOTO} from '../../const';
import CardList from '../../components/card-list/card-list';
import Reviews from '../../components/reviews/reviews';
import {getRating, getBedroomsString, getAdultsString} from '../../utils';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import {clsx} from 'clsx';
import Map from '../../components/map/map';
import {useActionCreators, useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import LoadingScreen from '../loading/loading';
import {dataActions, dataSelectors} from '../../store/slice/data.ts';

function OfferScreen(): JSX.Element {
  const {id: offerId} = useParams();
  const {fetchOfferAction, fetchReviewsAction, fetchNearOffersCardAction} = useActionCreators(dataActions);

  const offer = useAppSelector(dataSelectors.offer);
  const nearOfferCards = useAppSelector(dataSelectors.nearOffersCard);

  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      // TODO: неудобно тем, что если офера не существует, то все равно отправляются
      // запросы fetchReviewsAction и fetchNearOffersCardAction (можно через then переделать)
      fetchOfferAction(offerId!),
      fetchReviewsAction(offerId!),
      fetchNearOffersCardAction(offerId!)
    ]).then(() => setDataLoaded(true));
  }, [fetchOfferAction, fetchReviewsAction, fetchNearOffersCardAction, offerId]);


  if (!isDataLoaded) {
    // TODO: лоадер показывается 2 раза. Когда идет проверка авторизации и сейчас
    return <LoadingScreen/>;
  }

  if (!offer) {
    return <NotFoundScreen/>;
  }

  const mapPoints = nearOfferCards.map(({location, id}) => ({location, id}));
  mapPoints.push({location: offer.location, id: offer.id});

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.slice(0, MAX_OFFER_PHOTO).map((path)=>(
              <div className="offer__image-wrapper" key={path}>
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
              <FavoriteButton className="offer" isFavorite={offer.isFavorite} offerId={offer.id}/>
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
                {getBedroomsString(offer.bedrooms)}
              </li>
              <li className="offer__feature offer__feature--adults">
                {getAdultsString(offer.maxAdults)}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((good) => (
                  <li className="offer__inside-item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={clsx('offer__avatar-wrapper', {'offer__avatar-wrapper--pro': offer.host.isPro}, 'user__avatar-wrapper')}>
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
              <div className="offer__description">
                <p className="offer__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <Reviews/>
          </div>
        </div>
        <section className="offer__map map">
          <Map points={mapPoints} hoveredOfferId={offer.id}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <CardList offersCard={nearOfferCards} className="near-places"/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
