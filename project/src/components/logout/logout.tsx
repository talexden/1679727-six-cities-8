import {Link} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action-type';
import {logoutAction} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import { toast } from 'react-toastify';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logout() {
    dispatch(logoutAction);
  },
});


const connector = connect(null, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;

function Logout({logout}: PropsFromRedux): JSX.Element {
  return (
    <Link
      className="header__nav-link"
      to="/"
      onClick={(evt) => {
        debugger;
        evt.preventDefault();
        logout();
      }}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export {Logout};

export default connector(Logout);
