import React from 'react'


export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="ships">
        <h2>name={this.props.name}</h2>
        <p>speed={this.props.speed}</p>
        <p>hasRockets={this.props.hasRockets}</p>
        <p>colors={this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  speed: "slow",
  hasRockets: false
}
