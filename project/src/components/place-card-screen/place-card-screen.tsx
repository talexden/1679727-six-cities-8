import {getRatingStyle} from '../../util';

const TEMPORARY_CARD = {
  rating: 4.3,
  isPremium: true,
  price : 123,
  title: 'My Hotel',
  type: 'Room',
  previewImage: 'img/room.jpg',
};


// type PlaceCardScreenProps = {
//   rating: number;
//   isPremium: boolean,
//   price : number,
//   title: string,
//   type: string,
//   previewImage: string,
//   placeStyle: string,
// }


const premiumMarker = (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);


function PlaceCardScreen(): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      {TEMPORARY_CARD.isPremium ? premiumMarker : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={TEMPORARY_CARD.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{TEMPORARY_CARD.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStyle(TEMPORARY_CARD.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{TEMPORARY_CARD.title}</a>
        </h2>
        <p className="place-card__type">{TEMPORARY_CARD.type}</p>
      </div>
    </article>
  );
}

export default PlaceCardScreen;
