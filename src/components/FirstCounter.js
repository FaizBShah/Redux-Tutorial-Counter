import React from 'react'
import { connect } from "react-redux";

function FirstCounter(props) {
  const { counter } = props;

  return (
    <div className="bg-danger p-5 text-center text-white mb-3">
      <h4>
        Counter 1
      </h4>
      <h1>{counter}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counterOne.counter
})

export default connect(mapStateToProps, null)(FirstCounter);