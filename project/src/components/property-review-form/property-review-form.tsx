import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import ReviewRating from '../review-rating/review-rating';
import {nanoid} from 'nanoid';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {StateType} from '../../types/state-type';
import {clearCommentForm} from '../../store/action';
import {valueRatings} from '../../const';
import {useParams} from 'react-router-dom';
import LoadingScreen from '../loading-screen/loading-screen';
import {sendCommentAction} from '../../store/api-actions';

type FormStateItemType = {
  value: string,
  isValid: boolean,
  minValue?: number,
  maxValue?: number,
};

const mapStateToProps = ({isClearCommentForm, isCommentLoading}: StateType) => ({
  isClearCommentForm,
  isCommentLoading,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function PropertyCommentForm({isClearCommentForm, isCommentLoading}: PropsFromRedux): JSX.Element {
  const [
    formState,
    setFormState,
  ] = useState<{ [key: string]: FormStateItemType }>({
    rating: {
      value: '0',
      isValid: false,
    },
    review: {
      value: '',
      isValid: false,
      minValue: 50,
      maxValue: 300,
    },
  });

  const dispatch = useDispatch();
  const {id: offerId} = useParams<{id: string}>();

  useEffect(() => {
    if (isClearCommentForm) {
      setFormState({
        ...formState,
        rating: {
          ...formState.rating,
          value: '0',
        },
        review: {
          ...formState.review,
          value: '',
        },
      });

      dispatch(clearCommentForm());
    }
  }, [dispatch, formState, isClearCommentForm]);


  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = evt.target;
    let isValid: boolean;
    if (
      name === 'review'
      && formState.review.maxValue
      && formState.review.minValue
    ) {
      isValid = Boolean(
        value.length >= formState.review.minValue
        && value.length < formState.review.maxValue,
      );
    } else {
      isValid = Boolean(value);
    }

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isValid,
      },
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const comment = {
      rating: formState.rating.value,
      comment: formState.review.value,
    };

    dispatch(sendCommentAction(offerId, comment));
  };

  if (isCommentLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {Object.keys(valueRatings).reverse().map((key) => (
          <ReviewRating
            isChecked={formState.rating.value}
            key={nanoid()}
            starNumber={key}
            title={valueRatings[key]}
            onClickRadio={handleChange}
          />
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review.value}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={ (!formState.rating.isValid || !formState.review.isValid) || isCommentLoading }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default connector(PropertyCommentForm);
