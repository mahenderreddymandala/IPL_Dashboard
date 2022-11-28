// Write your code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import {Component} from 'react'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.teamCardDetails()
  }

  teamCardDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const teamBannerUrls = data.team_banner_url

    const latestMatchDetail = {
      umpires: data.latest_match_details.umpires,

      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatch = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: teamBannerUrls,
      latestMatchDetails: latestMatchDetail,
      recentMatches: recentMatch,
      isLoading: false,
    })
  }

  renderIplTeamsData = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div>
        <img src={teamBannerUrl} alt="teamBannerUrl" className="teamBanner" />

        <ul className="latest-matches">
          <LatestMatch latestdetails={latestMatchDetails} />
        </ul>

        <ul className="latest-match">
          {recentMatches.map(each => (
            <MatchCard recentdetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="teamMatch-container">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          this.renderIplTeamsData()
        )}
      </div>
    )
  }
}

export default TeamMatches
