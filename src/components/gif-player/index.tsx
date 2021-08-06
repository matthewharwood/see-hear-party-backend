import { FunctionalComponent, h } from 'preact';
import {useState, useMemo} from 'preact/hooks';
import {useInterval} from "../../hooks/use-interval";

export function shuffle(arr): any[] {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const GifPlayer: FunctionalComponent = (props: {gifs: Array<string>}) => {
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(true);
    console.log(props.gifs)
    const _gifs = useMemo(() => shuffle(props.gifs), [props.gifs]);
    const _gifsMaxIndex = _gifs.length - 1;
    useInterval(() => {
        if (_gifs && play) {
            const next = count + 1;
            setCount(next % _gifsMaxIndex)
            console.log(_gifs[count], count)
        }
  }, 2000);

  return _gifs.length ? (
    <video controls width="250" playsInline autoPlay muted loop key={_gifs[count]}>
      <source src={_gifs[count]}
              type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video>
  ) : (
      <h1>Add Tags</h1>
  )
};

export {
  GifPlayer
}
