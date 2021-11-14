import {MouseEvent} from 'react';
import {getRatingStyle} from '../../util';
import {offerType} from '../../types/offerType';
import {Link} from 'react-router-dom';

type PlaceCardProps = {
  offer: offerType,
  key: number,
  onSelect: (id: number) => void,
}


const premiumMarker = (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);


function PlaceCard({offer, onSelect}: PlaceCardProps): JSX.Element {
  const handleMouseEvent = (target: MouseEvent<HTMLElement>) => {
    target.preventDefault();
    onSelect(offer.id);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={handleMouseEvent}
    >
      {offer.isPremium ? premiumMarker : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${offer.isFavorite ? 'place-card__bookmark-button--active ' : ''}place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(offer.rating)} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
