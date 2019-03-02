import React, { Component } from 'react';

class Footer extends Component {
  handleDele(index) {
    this.props.handleDele(index)
  }
  render() {
    return (
      <React.Fragment>
                <div>footer</div>
      </React.Fragment>
    )
  }
}

export default Footer;
