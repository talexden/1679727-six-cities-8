import {Link} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action-type';
import {logoutAction} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';


const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});


const connector = connect(null, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;

function HeaderLogout({onLogout}: PropsFromRedux): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to="/"
        onClick={(evt) => {
          evt.preventDefault();
          onLogout();
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export {HeaderLogout};

export default connector(HeaderLogout);
