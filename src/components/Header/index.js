import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://cdn-icons-png.flaticon.com/512/1141/1141789.png?w=740&t=st=1684199231~exp=1684199831~hmac=33e4029888ffc95b44a2ccf8cedf090e5f9f88033feac67b6c7dbc91429b938a"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://cdn-icons-png.flaticon.com/512/1141/1141789.png?w=740&t=st=1684199231~exp=1684199831~hmac=33e4029888ffc95b44a2ccf8cedf090e5f9f88033feac67b6c7dbc91429b938a"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
