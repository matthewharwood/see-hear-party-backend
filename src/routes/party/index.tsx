
import { FunctionalComponent, h,  } from 'preact';
import {useState, useEffect} from 'preact/hooks';
import { GifPlayer } from '../../components/gif-player';
import {useSnapshot} from "../../hooks/use-snapshot";
import {db} from "../../firestore";
import {KEYWORDS_COLLECTION} from './config';


const Party: FunctionalComponent<{id: string}> = (props) => {
  const [gifs, updateGifs] = useState([]); // set state for gif
  const { loading: keywordLoading, data: keywordData } = useSnapshot(db.collection(KEYWORDS_COLLECTION)); // get keywordData from keywords
  // @ts-ignore
  const getGifs = async (url = '', keywordData = {}): any => {

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
            body: JSON.stringify(keywordData) // body keywordData type must match "Content-Type" header
        });

        const r = await response.json(); // parses JSON response into native JavaScript objects
        updateGifs(r.flat());
        return r;
  }

  useEffect(() => {
      if(!keywordLoading && keywordData) {
          const tagData = {tags: (keywordData || []).map(({value = {slug: ''}}) => {
                  return  value.slug
              }).join(',')};
          getGifs(
              'https://us-central1-see-hear-party.cloudfunctions.net/submitTags',
              tagData
          );
      }
  }, [keywordLoading, keywordData]);


  return ((keywordLoading && !keywordData) || !gifs.length) ? (<p>Collection of Tags is empty or keywordLoading</p>) : (
      <div>
          <GifPlayer gifs={gifs} />
      </div>
  );
}

export default Party;
