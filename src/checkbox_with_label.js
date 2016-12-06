import React, { Component } from 'react';

class CheckboxWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }
}

export default CheckboxWithLabel;