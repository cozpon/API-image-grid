import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    // Don't render if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="Modal-Backdrop">
        <div className="Modal">
          {this.props.children}
          <div>
            <button className="Close-Button" onClick={this.props.onClose}>
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
