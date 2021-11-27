import {getRatingStyle} from '../../utils/util';
import {OfferType} from '../../types/offer-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


type FavoritePlaceCardProps = {
  offer: OfferType,
  onClickFavorite: () => void;
}


function FavoritePlaceCard({offer, onClickFavorite}: FavoritePlaceCardProps): JSX.Element {
  const {id, previewImage, price, isFavorite, rating, title, type} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
            <span style={getRatingStyle(rating)} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
