import {getRatingStyle} from '../../utils/util';
import ReviewForm from '../review-form/review-form';
import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {nanoid} from 'nanoid';
import {AuthorizationStatus, COMMENT_LIST_SIZE} from '../../const';
import {CommentType} from '../../types/comment-type';
import {formatDateYYYYMMDD, formatDateMMMMYYYY} from '../../utils/util';


const mapStateToProps = ({comments, authorizationStatus}: State) => ({
  comments,
  authorizationStatus,
});

const sortCommentsByDate = (comments: CommentType[]) => [...comments].sort((a, b) => a.date > b.date ? -1 : 1);

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PropertyReviews({comments, authorizationStatus}: PropsFromRedux): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          sortCommentsByDate(comments).slice(0, COMMENT_LIST_SIZE).map((comment)=>(
            <li className="reviews__item" key={nanoid()}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                </div>
                <span className="reviews__user-name">{comment.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={getRatingStyle(comment.rating)} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{comment.comment}</p>
                <time className="reviews__time" dateTime={formatDateYYYYMMDD(new Date(comment.date))}>{formatDateMMMMYYYY(new Date(comment.date))}</time>
              </div>
            </li>
          ))
        }
      </ul>
      {(authorizationStatus === AuthorizationStatus.Auth) ? <ReviewForm /> : '' }
    </section>
  );
}

export default connector(PropertyReviews);
