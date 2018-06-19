import * as firebase from 'firebase'
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyAS9v5GpX_WqFY0kSI9dwBjRIlPpb-Ch40",
    authDomain: "laboratoria-challenge.firebaseapp.com",
    databaseURL: "https://laboratoria-challenge.firebaseio.com",
    projectId: "laboratoria-challenge",
    storageBucket: "laboratoria-challenge.appspot.com",
    messagingSenderId: "366666196058"

}

const FirebaseApp = firebase.initializeApp(config)
const auth = firebase.auth()
const db = firebase.firestore()

export { db, auth }
