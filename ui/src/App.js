import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Stack from "./Stack";
import StackAdder from "./StackAdder";
import { fetchStack } from "./actions/actions";
import AppBar from 'material-ui/AppBar';

class App extends Component {

  componentDidMount() {
    console.log("app component mounted, fetching data");
    const { dispatch } = this.props;
    dispatch(fetchStack()).then(data => {
      console.log("remote data fetched!");
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar title="STACKR" />
        <StackAdder />
        <Stack />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
