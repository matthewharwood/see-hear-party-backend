
import { FunctionalComponent, h } from 'preact';

const Party: FunctionalComponent = (props) => {
  console.log(props)
  return (
    <h1>Party {props.id}</h1>
  )
}

export default Party;