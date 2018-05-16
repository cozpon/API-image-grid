import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The backdrop whited out background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 253, 255, 0.9)',
      padding: 25
    };

    // The modal "window"
    const modalStyle = {
      maxWidth: 800,
      minHeight: 300,
      margin: '0 auto',
      padding: 40
    };

    return (
      <div
        className="Backdrop"
        style={ backdropStyle }>

        <div
          className="Modal"
          style={ modalStyle }>

          {this.props.children}

          <div className="Close-Button">
            <button onClick={this.props.onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
