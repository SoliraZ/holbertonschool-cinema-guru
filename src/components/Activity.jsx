import './components.css'

function Activity({ activity }) {
  const username = activity?.user?.username || ''
  const title = activity?.title?.title || ''
  const activityType =
    activity?.activityType === 'favorite' ? 'favorites' : 'watch later'
  const date = activity?.createdAt
    ? new Date(activity.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <li className="activity">
      <p>
        <span className="activity-highlight">{username}</span> added{' '}
        <span className="activity-highlight">{title}</span> to {activityType} -{' '}
        <span className="activity-date">{date}</span>
      </p>
    </li>
  )
}

export default Activity
