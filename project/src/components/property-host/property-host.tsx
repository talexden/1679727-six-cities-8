import {State} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({offerById}: State) => ({
  offerById,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PropertyHost({offerById}: PropsFromRedux):JSX.Element {
  const {host, description} = offerById;
  const {isPro, name, avatarUrl} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={`${isPro ? 'property__avatar-wrapper--pro ' : ''}property__avatar-wrapper user__avatar-wrapper`}
        >
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        <span className="property__user-status">
          {isPro ? 'Pro' : ''}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export {PropertyHost};

export default connector(PropertyHost);
