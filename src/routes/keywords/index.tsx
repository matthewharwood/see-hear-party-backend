
import { FunctionalComponent, h,  } from 'preact';
import {useState} from 'preact/hooks';
import {useSnapshot} from "../../hooks/use-snapshot";
import {db} from "../../firestore";


const Keywords: FunctionalComponent<{id: string}> = (props) => {
  const [tag1, updateTag1] = useState('');
  const { loading, data } = useSnapshot(db.collection("playlists"));

  const postData = async (url = '', data = {}): any => {
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

        return await response.json(); // parses JSON response into native JavaScript objects
  }
  const onDelete = (id) => {
      db.collection('playlists').doc(id).delete()
  };

  const onSubmit = () => {
      const tagData = {tags: loading ? tag1 : data.map(({value}) => {
              return  value.slug
          }).concat(tag1).join(',')};

      db.collection("playlists").add({
          slug: tag1,
      });
      return postData(
          'https://us-central1-see-hear-party.cloudfunctions.net/submitTags',
          tagData,
      )
  };
  return (
    <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Gif Keywords</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                               placeholder="Add Keyword" value={tag1} onInput={(e: any) => updateTag1(e.target.value)} />
                        <button
                            onClick={onSubmit}
                            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                            Add
                        </button>
                    </div>
                </div>
                <div>
                    {loading ? null : data.map(({value, id}) => {
                        return (
                            <div key={id} className="flex mb-4 items-center">
                                <p className="w-full text-green">{value.slug}</p>

                                <button
                                    onClick={() => onDelete(id)}
                                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove
                                </button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>


    </div>
  )
}

export default Keywords;
