// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firebase-firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyDL1LtyPybllFXNfpv0wYRVYgaqCsevoh0",
//     authDomain: "allas-dashboard.firebaseapp.com",
//     databaseURL: "https://allas-dashboard.firebaseio.com",
//     projectId: "allas-dashboard",
//     storageBucket: "allas-dashboard.appspot.com",
//     messagingSenderId: "702620330594",
//     appId: "1:702620330594:web:40c0bf1c9f8f2a13017f3b",
//     measurementId: "G-8Q58V0TNJ2"
//   }


//   class Firebase{
//   constructor(){
//     app.initializeApp(firebaseConfig)
//     this.auth = app.auth()
//     this.db = app.firestore

//   }

//   login(email,password){
//       return this.auth.signInWithEmailAndPassword(email,password)
//   }

//   logout(){
//     return this.auth.signOut()
//   }

//   async register(name,email,password){
//       await this.auth.createUserWithEmailAndPassword(email,password)
//       return this.auth.currentUser.updateProfile({
//           displayName : name
//       })
//   }

//   isInitialized(){
//       return new Promise(resolve => {
//           this.auth.onAuthStateChanged(resolve)
//       })
//   }

//   getCurrentUsername(){
//       return this.auth.currentUser && this.auth.currentUser.displayName
//   }

//   forgot(email){
//      this.auth.sendPasswordResetEmail(email).then(function(){
//          window.alert("An email has been sent with verification link")
//      }).catch(function(error){
//          window.alert(error)
//      })
//   }

// }

// export default new Firebase()

import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyDL1LtyPybllFXNfpv0wYRVYgaqCsevoh0",
    authDomain: "allas-dashboard.firebaseapp.com",
    databaseURL: "https://allas-dashboard.firebaseio.com/",
    projectId: "allas-dashboard",
    storageBucket: "allas-dashboard.appspot.com",
    messagingSenderId: "702620330594",
    appId: "1:702620330594:web:40c0bf1c9f8f2a13017f3b",
    measurementId: "G-8Q58V0TNJ2"
  }


  class Firebase{


  constructor(){
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.database()
    this.data = this.db.ref("/Pedestrians");
  }

  getAll() {
    return this.data;
  }

  login(email,password){
      return this.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.auth.signOut()
  }

  async register(name,email,password){
      await this.auth.createUserWithEmailAndPassword(email,password)
      return this.auth.currentUser.updateProfile({
          displayName : name
      })
  }

  isInitialized(){
      return new Promise(resolve => {
          this.auth.onAuthStateChanged(resolve)
      })
  }

  getCurrentUsername(){
      return this.auth.currentUser && this.auth.currentUser.displayName
  }

  forgot(email){
     this.auth.sendPasswordResetEmail(email).then(function(){
         window.alert("An email has been sent with verification link")
     }).catch(function(error){
         window.alert(error)
     })
  }


}

export default new Firebase()