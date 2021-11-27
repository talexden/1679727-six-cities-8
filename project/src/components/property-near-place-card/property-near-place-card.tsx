import {OfferType} from '../../types/offer-type';
import {getRatingStyle} from '../../utils/util';
import {Link} from 'react-router-dom';

type PropertyNearPlaceCardProps = {
  offer: OfferType,
  onClick: () => void,
  onClickFavorite: () => void,
}


function PropertyNearCard ({offer, onClick, onClickFavorite}: PropertyNearPlaceCardProps): JSX.Element {
  const {previewImage, type, rating, price, isFavorite, title} = offer;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to='#' onClick={onClick}>
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
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}button`}
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
          <Link to='#' onClick={onClick}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PropertyNearCard;
