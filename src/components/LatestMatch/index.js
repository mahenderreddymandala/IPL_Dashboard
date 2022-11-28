// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestdetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestdetails

  return (
    <div>
      <li className="latest-container">
        <div className="s1">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>

        <div className="s2">
          <img src={competingTeamLogo} alt={competingTeam} className="ctlogo" />
        </div>
        <div className="s3">
          <div className="s4">
            <h1 className="heading-s4">First Innings</h1>
            <p className="paragraph-s4">{firstInnings} </p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Second Innings</h1>
            <p className="paragraph-s4"> {secondInnings}</p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Man Of The Match</h1>
            <p className="paragraph-s4">{manOfTheMatch} </p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Umpires</h1>
            <p className="paragraph-s4">{umpires} </p>
          </div>
        </div>
      </li>

      <li className="latest-container1">
        <div className="latest">
          <div className="s1">
            <h1 className="competing-team">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>

          <div className="s2">
            <img
              src={competingTeamLogo}
              alt={competingTeam}
              className="ctlogo"
            />
          </div>
        </div>
        <div className="s3">
          <div className="s4">
            <h1 className="heading-s4">First Innings</h1>
            <p className="paragraph-s4">{firstInnings} </p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Second Innings</h1>
            <p className="paragraph-s4"> {secondInnings}</p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Man Of The Match</h1>
            <p className="paragraph-s4">{manOfTheMatch} </p>
          </div>
          <div className="s4">
            <h1 className="heading-s4">Umpires</h1>
            <p className="paragraph-s4">{umpires} </p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default LatestMatch
