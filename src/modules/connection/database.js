import Firebase from "firebase";

const config = {
    apiKey: "AIzaSyCE7VQPDQJOquGit63CcRtmXR9b22vBmDc",
    authDomain: "underthetree-7276b.firebaseapp.com",
    databaseURL: "https://underthetree-7276b.firebaseio.com",
    storageBucket: "underthetree-7276b.appspot.com",
    messagingSenderId: "368241464837"
};
Firebase.initializeApp(config);
Firebase.auth().signInAnonymously();
const database = Firebase.database();

export const todosRef = database.ref("/todos");

export const getTodoItemRef = key => database.ref(`/todos/${key}`);

export const wrap = action => item => dispatch => {
    const itemKey = todosRef.push(item).key;
    item.key = itemKey;
    dispatch(action(item));
}

