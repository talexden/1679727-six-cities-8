import {ChangeEvent} from 'react';

type ReviewRatingProps = {
  isChecked: string,
  starNumber: string,
  title: string,
  onClickRadio: (evt: ChangeEvent<HTMLInputElement>) => void;
}


function ReviewRating({onClickRadio, isChecked, starNumber, title}: ReviewRatingProps): JSX.Element {
  const radioId = `${starNumber}-stars`;
  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={starNumber}
        id={radioId}
        type="radio"
        checked={starNumber === isChecked}
        onChange={onClickRadio}
      />
      <label
        htmlFor={radioId}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default ReviewRating;
