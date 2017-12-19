import React, {PureComponent as Component} from 'react'
import axios from 'axios'


class Seat extends Component {
  constructor(props){
    super(props)
    this.state = {
      taken: false,
      seat_id: 0,
      user_id: 4,
      flight_id: 0,
      reservation_id: 0
    }
  }

  componentDidMount(){
    this.setState({
      taken: this.props.seatInfo.taken,
      seat_id: this.props.seatInfo.id,
      user_id: this.props.seatInfo.user_id,
      flight_id: this.props.seatInfo.flight_id,
      reservation_id: this.props.seatInfo.reservation_id
     })
  }

  render(){

    return(
      <div className="seat" onClick={() => {this.props.clicky(this.state)} }>
        { (!this.props.seatInfo.taken) ?  this.props.seatInfo.name  : "X" }
      </div>
    )
  }
}


class SeatBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      seats: []
    }

    axios.get("http://localhost:3000/flights/5.json").then( res => {  this.setState({seats: res.data.seats}) } )
    this.handles = this.handles.bind(this)
  }

  handles(s) {
    console.log(s)
    if(!s.user_id){
      axios.put(`http://localhost:3000/seats/${s.seat_id}.json`, {user_id: 4, taken: true}).then( res => {
        console.log(res)
      })
      axios.post("http://localhost:3000/reservations.json", {user_id: 4, flight_id: s.flight_id, seat_id: s.seat_id}).then(
        res => { console.log(res) }
      )

    }else{
      axios.put(`http://localhost:3000/seats/${s.seat_id}.json`, {user_id: null, taken: false}).then( res => {
        console.log(res)

      })
      console.log(s.reservation_id)
      axios.delete(`http://localhost:3000/reservations/${s.reservation_id}.json`).then( res => {
        console.log("del") }
      )
    }
    axios.get("http://localhost:3000/flights/5.json").then( res => {  this.setState({seats: res.data.seats}) } )
    setTimeout(window.location.reload(), 400)
  }

  render() {

    return(
      <div className="seatbox">
        {  this.state.seats.map( (s) => {
          return <Seat seatInfo={s} key={s.id} clicky={ this.handles } />
        } )  }
      </div>
    )
  }
}

export default SeatBox
{/* <Seat seats=/> */}
