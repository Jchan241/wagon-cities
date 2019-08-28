import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedCity extends Component {
  render() {
    const city = this.props.selectedCity
    console.log(city)
    if (this.props.selectedCity) {
      const image = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`
      return (
        <div className="active-city">
          <h3>{city.name}</h3>
          <p>{city.address}</p>
          <img src={image} alt=""/>
        </div>
      );
    }
    return (
      <div className="active-city"></div>
    )
  }
};

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(SelectedCity);
