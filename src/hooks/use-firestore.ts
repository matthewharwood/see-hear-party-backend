import {db} from '../firestore';
import {useEffect, useState} from 'preact/hooks';

//@ts-ignore
type FirestoreData = any ;

const useFirestore = (collectionName: string): FirestoreData => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async (): Promise<void> => {
            const querySnapshot = await db.collection(collectionName).get();
            for await (const d of querySnapshot.docs.map(doc => doc.data())) {
                setData((_d) => ({..._d, d}));
            }
        })();
    }, [setData, collectionName]);

    return data;
}

export {
    useFirestore,
}
