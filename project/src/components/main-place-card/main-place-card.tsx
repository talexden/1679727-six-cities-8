import {getRatingStyle} from '../../utils/util';
import {OfferType} from '../../types/offer-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type MainPlaceCardProps = {
  offer: OfferType,
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClickFavorite:() => void;
}

function MainPlaceCard({offer, onMouseEnter, onMouseLeave, onClickFavorite}: MainPlaceCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, type, title} = offer;
  const premiumMarker = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium ? premiumMarker : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          to={`${AppRoute.Offer}/${id}`}
        >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${isFavorite ? 'place-card__bookmark-button--active ' : ''}place-card__bookmark-button button`}
            type="button"
            onClick={onClickFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(Math.round(rating))} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.Offer}/${id}`}
          >{title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default MainPlaceCard;
