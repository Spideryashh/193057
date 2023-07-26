import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

class TrainSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trains: [],
    };
  }

  componentDidMount() {
    this.getTrains();
  }

  getTrains() {
    axios
      .get("/http://20.244.56.144/train/trains/")
      .then((response) => {
        this.setState({ trains: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { trains } = this.state;
    const filteredTrains = trains.filter((train) => {
      return train.departure_time - moment().utc().diff(moment(), "minutes") >= 30;
    });
    const sortedTrains = filteredTrains.sort((a, b) => {
      const priceDiff = a.price - b.price;
      const availabilityDiff = b.seat_availability - a.seat_availability;
      const timeDiff = a.departure_time - b.departure_time;
      return priceDiff || availabilityDiff || timeDiff;
    });
    return (
      <div>
        <h1>Train Schedule</h1>
        <table>
          <thead>
            <tr>
              <th>Train</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Seat Availability (Sleeper)</th>
              <th>Price (Sleeper)</th>
              <th>Seat Availability (AC)</th>
              <th>Price (AC)</th>
            </tr>
          </thead>
          <tbody>
            {sortedTrains.map((train) => (
              <tr key={train.id}>
                <td>{train.name}</td>
                <td>{moment(train.departure_time).format("HH:mm")}</td>
                <td>{moment(train.arrival_time).format("HH:mm")}</td>
                <td>{train.seat_availability.sleeper}</td>
                <td>{train.price.sleeper}</td>
                <td>{train.seat_availability.ac}</td>
                <td>{train.price.ac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TrainSchedule;