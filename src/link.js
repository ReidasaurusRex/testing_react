import React, { Component } from 'react';

const STATUS = {
  NORMAL: 'normal', 
  HOVERED: 'hovered',
};

class Link extends Component {

  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  this.state = {
    class: STATUS.NORMAL,
  };
}



export default Link;