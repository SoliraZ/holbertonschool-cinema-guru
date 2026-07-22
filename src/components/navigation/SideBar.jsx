import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons'
import Activity from '../Activity'
import './navigation.css'

function SideBar() {
  const [selected, setSelected] = useState('home')
  const [small, setSmall] = useState(true)
  const [activities, setActivities] = useState([])
  const [showActivities, setShowActivities] = useState(false)
  const navigate = useNavigate()

  const setPage = (pageName) => {
    setSelected(pageName)

    if (pageName === 'home') {
      navigate('/home')
    } else if (pageName === 'favorites') {
      navigate('/favorites')
    } else if (pageName === 'watchlater') {
      navigate('/watchlater')
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    axios
      .get('http://localhost:8000/api/activity', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setActivities(response.data)
      })
      .catch(() => {})
  }, [])

  return (
    <nav
      className={`sidebar ${small ? 'sidebar-small' : 'sidebar-expanded'}`}
      onMouseEnter={() => {
        setSmall(false)
        setShowActivities(true)
      }}
      onMouseLeave={() => {
        setSmall(true)
        setShowActivities(false)
      }}
    >
      <ul className="sidebar-nav">
        <li
          className={selected === 'home' ? 'selected' : ''}
          onClick={() => setPage('home')}
        >
          <FontAwesomeIcon icon={faFolder} />
          {!small && <span>Home</span>}
        </li>
        <li
          className={selected === 'favorites' ? 'selected' : ''}
          onClick={() => setPage('favorites')}
        >
          <FontAwesomeIcon icon={faStar} />
          {!small && <span>Favorites</span>}
        </li>
        <li
          className={selected === 'watchlater' ? 'selected' : ''}
          onClick={() => setPage('watchlater')}
        >
          <FontAwesomeIcon icon={faClock} />
          {!small && <span>Watch Later</span>}
        </li>
      </ul>

      {showActivities && (
        <div className="sidebar-activities">
          <h3>Latest Activities</h3>
          <ul className="sidebar-activities-list">
            {activities.slice(0, 10).map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default SideBar
