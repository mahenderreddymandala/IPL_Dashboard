// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamcarddetails} = props
  const {teamImageUrl, name, id} = teamcarddetails

  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      <div>
        <li className="team-cards">
          <img src={teamImageUrl} alt="teamcard" className="teamcard" />
          <h1 className="heading3">{name}</h1>
        </li>
      </div>
    </Link>
  )
}

export default TeamCard
