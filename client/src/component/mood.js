import React, { Component } from "react";
import axios from "axios";

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/sad").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}

class Happy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/happy").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}
class Romantic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/romantic").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}
class Tarab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/tarab").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}

class Sarcastic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/sarcastic").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://localhost:5000/workout").then(function (response) {
      that.setState({
        songs: response.data,
      });
    });
  }

  render() {
    var songsData = this.state.songs;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {songsData.map(function (ele) {
          return (
            <div key={ele._id}>
              <label>
                <pre>Song name :{ele.song}</pre>
                <pre>Singer name :{ele.singer}</pre>
              </label>

              <audio controls src={ele.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}

export { Mood, Happy, Romantic, Tarab, Sarcastic, Workout };
