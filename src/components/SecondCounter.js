import React from 'react'
import { connect } from "react-redux";

function SecondCounter(props) {
  const { counter } = props;

  return (
    <div className="bg-success p-5 text-center text-white mb-3">
      <h4>
        Counter 2
      </h4>
      <h1>{counter}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counterTwo.counter
})

export default connect(mapStateToProps, null)(SecondCounter);