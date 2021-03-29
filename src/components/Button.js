import React from 'react'

const Button = props => {
  const remind = () => {
    alert("Take one dose red pill, two doses of the purple pills. Take one half of your vitamin D supplement (don't take the whole thing!)")
  }

  return(
    <button type="button" onClick={remind} className="alert-button">Supplements Reminder!</button>
  )
}

export default Button