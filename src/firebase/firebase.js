import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const configFirebase = {
  apiKey: "AIzaSyCZgFzgfzywFKWcGTNM0PC6CQf12Kwp9Ys",
  authDomain: "projectamri-92cbc.firebaseapp.com",
  projectId: "projectamri-92cbc",
  storageBucket: "projectamri-92cbc.appspot.com",
  messagingSenderId: "96018242189",
  appId: "1:96018242189:web:c3347ff1aaa510573a20c4",
  measurementId: "G-ZDW64RF69N",
}

class Firebase {
    constructor(){
        initializeApp(configFirebase)
        this.auth = getAuth()
    }
    createUser = obj =>{
        return createUserWithEmailAndPassword(
            this.auth, obj.email, obj.password
        )
    }

  signin = obj =>{
            return signInWithEmailAndPassword(
                this.auth,obj.email, obj.password)
        
    }
}
export default Firebase