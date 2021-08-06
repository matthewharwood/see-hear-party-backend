
import { FunctionalComponent, h } from 'preact';
import { GifPlayer } from '../../components/gif-player';

const Party: FunctionalComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Party {props.id}</h1>
      <GifPlayer />
    </div>
  )
}

export default Party;
