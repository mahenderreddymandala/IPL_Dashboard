import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplteamsData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplteamsData: formattedData, isLoading: false})
  }

  renderIPLdata = () => {
    const {iplteamsData} = this.state
    return (
      <div>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1 className="heading-1">IPL Dashboard</h1>
        </div>
        <ul className="ipl-teams">
          {iplteamsData.map(eachteam => (
            <TeamCard teamcarddetails={eachteam} key={eachteam.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    // console.log(iplteamsData)

    return (
      <div className="main-container">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.renderIPLdata()
        )}
      </div>
    )
  }
}

export default Home
