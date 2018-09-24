import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./css/Input.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : "",
      disabled: this.props.disabled,
      focused: false
    };
  }
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.setState({ value: event.target.value });
  }
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
    this.setState({ focused: true });
  }
  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
    this.setState({ focused: false });
  }
  onLeftChildClick(event) {
    event.stopPropagation();

    if (this.props.onLeftChildClick) {
      this.props.onLeftChildClick();
    }
  }
  componentWillReceiveProps(props) {
    if (props.disabled !== this.state.disabled) {
      this.setState({ disabled: props.disabled });
    }
    if (props.value !== this.state.value) {
      this.setState({ value: props.value });
    }
  }
  render() {
    var {
      leftChild,
      rightChild,
      maxLength,
      middleChild,
      placeholder,
      type,
      disabled,
      accept,
      ...other
    } = this.props;
    const className = classNames("Input", {
      "Input-focused": this.state.focused,
      "Input-disabled": this.state.disabled,
      "Input-hollow": this.props.hollow,
      "Input-bottomBorder": this.props.bottomBorder,
      "Input-rightBorder": this.props.borderRight,
      "Input-Invalid": this.props.isInValid
    });
    return (
      <div
        className={className}
        style={{
          height: this.props.height,
          borderRadius: this.props.borderRadius
        }}
      >
        {leftChild && (
          <div
            onClick={event => this.onLeftChildClick(event)}
            className="Input-leftChild"
            style={{
              width: this.props.LeftChildSize,
              height: this.props.LeftChildSize
            }}
          >
            {leftChild}
          </div>
        )}
        {middleChild && (
          <div
            className="Input-middleChild"
            style={{
              width: this.props.MiddleChildSize,
              height: this.props.MiddleChildSize
            }}
          >
            {middleChild}
          </div>
        )}
        {this.props.isValuesCheckForOnKeyUp === true && (
          <input
            value={this.state.value}
            className="Input-box"
            onChange={event => this.handleChange(event)}
            onKeyUp={event => this.handleChange(event)}
            onFocus={event => this.handleFocus(event)}
            onBlur={event => this.handleBlur(event)}
            placeholder={placeholder}
            style={{ ...this.props.textStyle }}
            type={type}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={this.props.readOnly}
            onKeyPress={this.props.submitOnEnter ? this.props.onEnter : null}
          />
        )}
        {this.props.isValuesCheckForOnKeyUp === false && (
          <input
            value={this.state.value}
            className="Input-box"
            onChange={event => this.handleChange(event)}
            onFocus={event => this.handleFocus(event)}
            onBlur={event => this.handleBlur(event)}
            placeholder={placeholder}
            style={{ ...this.props.textStyle }}
            type={type}
            maxLength={maxLength}
            disabled={disabled}
            readOnly={this.props.readOnly}
            onKeyPress={this.props.submitOnEnter ? this.props.onEnter : null}
          />
        )}
        {rightChild && (
          <div
            className="Input-rightChild"
            style={{
              width: this.props.RightChildSize,
              height: this.props.RightChildSize
            }}
          >
            {rightChild}
          </div>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  height: PropTypes.number,
  RightChildSize: PropTypes.number,
  borderRadius: PropTypes.strign,
  LeftChildSize: PropTypes.number,
  MiddleChildSize: PropTypes.number,
  bottomBorder: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onLeftChildClick: PropTypes.func,
  isValuesCheckForOnKeyUp: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  textStyle: PropTypes.shape({
    fontSize: PropTypes.number
  })
};

Input.defaultProps = {
  disabled: false,
  fontSize: 14,
  isValuesCheckForOnKeyUp: false,
  maxLength: 250,
  height: 45,
  borderRadius: "3px",
  type: "",
  readOnly: false
};

export default Input;
