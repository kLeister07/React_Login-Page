import React from 'react'

const Input = (props) => {
  return <input type={props.text || props.password} placeholder={props.placeholder} />;
}

export default Input