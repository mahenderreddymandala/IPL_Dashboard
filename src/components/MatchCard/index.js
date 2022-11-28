// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentdetails} = props

  const {competingTeam, competingTeamLogo, result, matchStatus} = recentdetails

  const status = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-container">
      <img src={competingTeamLogo} alt={competingTeam} className="ctlogo" />

      <h1 className="ct-team">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
