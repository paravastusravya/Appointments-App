// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, titleInput, dateInput, isStared} = appointmentDetails

  const date = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
  const staredImageUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    const {toggleStarIcon} = props
    toggleStarIcon(id)
  }

  return (
    <li className="list">
      <div className="appointment">
        <div className="name-container">
          <p className="name-heading">{titleInput}</p>
          <p className="date-time">{date}</p>
        </div>
        <div>
          <button
            type="button"
            data-testid="star"
            className="star-icon"
            onClick={onClickStar}
          >
            <img src={staredImageUrl} alt="star" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default AppointmentItem
