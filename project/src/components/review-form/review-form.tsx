import {PureComponent, ChangeEvent} from 'react';

type MyProps = {};

type MyState = {
  rating: string,
  review: string,
}

class ReviewForm extends PureComponent<MyProps, MyState> {
  constructor(props: number) {
    super(props);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleInputRadioChange = this.handleInputRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      rating: '',
      review: '',
    }
  }

  handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({review: event.target.value});
  }

  handleInputRadioChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({rating: event.target.value});
  }

  handleSubmit(event: ChangeEvent<HTMLElement>) {
    event.preventDefault();

    // Для проверки.
    alert(`Форма отправлена`);
  }


  render() {
    const {review} = this.state;
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            onChange={this.handleInputRadioChange}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
          onChange={this.handleTextAreaChange}
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
}

export default ReviewForm;
