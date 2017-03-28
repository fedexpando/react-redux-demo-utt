import Firebase from "firebase";

var config = {
  apiKey: "AIzaSyCE7VQPDQJOquGit63CcRtmXR9b22vBmDc",
  authDomain: "underthetree-7276b.firebaseapp.com",
  databaseURL: "https://underthetree-7276b.firebaseio.com",
  storageBucket: "underthetree-7276b.appspot.com",
  messagingSenderId: "368241464837"
};
Firebase.initializeApp(config);
const database = Firebase.database();
const todosRef = database.ref("/todos");
let isFirstSnapshot = true;
let dispatch = null;
const initialTodoList = [];

export const subscribe = init => addOne => {
    todosRef.on("value", snapshot => {
        const val = snapshot.val();    
        const shouldBeInitialState = isFirstSnapshot;
        isFirstSnapshot = false;
        for(var k in val){
            const elem = val[k];
            elem.key = k;
            if(shouldBeInitialState){
                initialTodoList.push(elem);
            }else{
                addOne(elem)(dispatch)
            }   
        }
        if(shouldBeInitialState){
            dispatch = init(initialTodoList);
        }
    });
};

export const wrapPush = action => item => dispatch => {
    const itemKey = todosRef.push(item).key;
    item.key = itemKey;
    dispatch(action(item));
};