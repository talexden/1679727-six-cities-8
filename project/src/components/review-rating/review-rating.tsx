type ReviewRatingProps = {
  isChecked: boolean,
  id: number,
  clickRadio: () => void,
}


function ReviewRating({clickRadio, isChecked, id}: ReviewRatingProps): JSX.Element {
  const radioValue = `${id}`
  const radioId = `${id}-stars`
  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={radioValue}
        id={radioId}
        type="radio"
        checked={isChecked}
        onChange={clickRadio}
      />
      <label htmlFor={radioId} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  )
}

export default ReviewRating;
