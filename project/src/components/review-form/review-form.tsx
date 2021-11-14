import {ChangeEvent, useState} from 'react';
import ReviewRating from '../review-rating/review-rating';

function ReviewForm () {

  const [review, setReview] = useState('')
  const defaultStateRadio = [false, false, false, false, false];
  const [stateRadio, setStateRadio] = useState(defaultStateRadio);


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stateRadio.map((state, id)=>
          {return (
              <ReviewRating
                isChecked={state}
                key={`${id}${state}`}
                id={id}
                clickRadio={()=>{
                  const newState = [...defaultStateRadio];
                  newState[id] = true
                  setStateRadio(newState);
                  console.log(newState);
                }}
              />
          )}
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  )
}

export default ReviewForm;
