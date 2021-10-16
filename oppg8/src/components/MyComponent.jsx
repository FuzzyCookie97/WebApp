import { useState } from 'react'

//Vet ikke om dette er nok for alternativ 2

export const MyComponent = () => {
  const [click, setClick] = useState('')

  const trueEvent = () => setClick(click => click = 'true')
  const falseEvent = () => setClick(click => click = 'false')

  

  return (
    <>
        <p>{click}</p>
        <button type="button" onClick={trueEvent}>true</button>
        <button type="button" onClick={falseEvent}>false</button>
    </>
  );
};

