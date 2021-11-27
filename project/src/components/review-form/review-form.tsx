import {ChangeEvent, useState} from 'react';
import ReviewRating from '../review-rating/review-rating';
import {setStateSelector} from '../../utils/util';
import {nanoid} from 'nanoid';

function ReviewForm (): JSX.Element {

  const [review, setReview] = useState('');
  const defaultStateRadio = new Array(5).fill(false);
  const [stateRadio, setStateRadio] = useState(defaultStateRadio);


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {stateRadio.map((state, id)=> (
          <ReviewRating
            isChecked={state}
            key={nanoid()}
            id={id}
            onClickRadio={()=>{setStateRadio(setStateSelector(defaultStateRadio, id));}}
          />
        ))}

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
  );
}

export default ReviewForm;
