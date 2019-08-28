import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {
  handleClick = () => {
    //create redux action
    // console.log(this.props)
    this.props.selectCity(this.props.city)
  }

  render() {
    const city = this.props.city
    return (
      <div className="list-group-item" onClick={this.handleClick}>{city.name}</div>
    );
  }
};

import { selectCity } from '../actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  }
}

export default connect(null, mapDispatchToProps)(City);


      // <div className="list-group-item" key={this.props.name}>
      //   <p>{this.props.name}</p>
      // </div>
