
import { FunctionalComponent, h,  } from 'preact';
import {useState} from 'preact/hooks';
import { GifPlayer } from '../../components/gif-player';

const Party: FunctionalComponent<{id: string}> = (props) => {
  const [tag1, updateTag1] = useState('');
  const [gifs, updateGifs] = useState([]);

  const postData = async(url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // console.log(data, url);
        const r = await response.json(); // parses JSON response into native JavaScript objects
        updateGifs(r.flat());
        return r;
  }

  return (
    <div>
      <h1>Party {props.id}</h1>
      <GifPlayer gifs={gifs}/>
        <div>
            <h2>Add Keywords</h2>
            <pre>{JSON.stringify(gifs, null, 2)}</pre>
            <input type="text" value={tag1} onInput={(e: FormEvent<HTMLInputElement>) => updateTag1(e.target.value)} />
            <button onClick={(e) => postData('https://us-central1-see-hear-party.cloudfunctions.net/submitTags', {tags: tag1})}>Submit words {tag1}</button>
        </div>
    </div>
  )
}

export default Party;
