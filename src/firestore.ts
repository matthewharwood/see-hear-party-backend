
let db:any = null;

const getDb = (firebase): void => {
    db = firebase.firestore();
};

export {
    getDb,
    db,
}
