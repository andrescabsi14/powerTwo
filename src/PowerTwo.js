import React from "react";

class PowerOfTwo extends React.Component {
  state = {
    err: false,
    number: 0,
    powerTwo: false,
    bits: 32
  };

  bitSize = num => 32 - Math.clz32(num);

  handleNumberChange = event => {
    this.setState({ powerTwo: "", number: "", err: false });
    const inputNumber =
      event.target.value !== 0 ? Number(event.target.value) : 0;

    const bitValidation = this.bitSize(inputNumber);

    if (bitValidation && inputNumber < Number.MAX_SAFE_INTEGER) {
      this.setState({ number: event.target.value });
    } else {
      this.setState({ number: event.target.value, err: true });
    }
  };

  powerOfTwo = num => {
    const number = Number(num);
    const validation = Math.log2(number) % 1 === 0;
    this.setState({ powerTwo: validation });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.powerOfTwo(event.target[0] && event.target[0].value);
  };

  render() {
    return (
      <div className="component-power-two">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="number">
            <input
              className={this.state.err ? "invalid" : ""}
              onChange={this.handleNumberChange}
              type="text"
              id="number"
              value={this.state.number}
              placeholder="0"
            />
            Write your number...
          </label>
          <button disabled={this.state.number === 0 || this.state.err}>
            Check
          </button>
          {this.state.number && this.state.err ? (
            <div className="error-msg">Invalid number.</div>
          ) : null}
        </form>
        <section className="result">
          {this.state.number &&
          !this.state.err &&
          this.state.powerTwo === true ? (
            <div className="validation-success">
              {this.state.number} is power of 2
            </div>
          ) : null}
          {this.state.number &&
          !this.state.err &&
          this.state.powerTwo === false ? (
            <div className="validation-error">
              {this.state.number} is not power of 2
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}

export default PowerOfTwo;
