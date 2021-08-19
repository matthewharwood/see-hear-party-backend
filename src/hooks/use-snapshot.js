import { useState, useEffect, useRef } from "preact/hooks";


const useMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => (isMounted.current = false);
    }, []);
    return isMounted;
};

const useSnapshot = (query)  => {
    const [data, updateData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const mounted = useMounted();

    useEffect(() => {
        const snapshot = query.onSnapshot((snapshot) => {
            // create data array to feed to state
            const data = [];
            snapshot.forEach((doc) => {
                data.push({id: doc.id, value: doc.data()});
            });
            // set states
            if (mounted.current) updateData(data);
            if (setLoading && mounted.current) setLoading(false);
        });
        return () => snapshot();
    }, []);

    return { data, loading };
};

export {useSnapshot};
