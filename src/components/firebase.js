import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/database'
import 'firebase/firestore'


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
    this.data = this.db.ref();
    
  }

  getAll() {
    return this.data;
  }

  getPedestrians(){
    return this.data.child('/Pedestrians');
    }
  getPeds(){
    var data = this.data.child('/Pedestrians');
    var dtas;
    data.on('value', (snapshot) => {
      snapshot.forEach(snap => {
        dtas = snap.val();
      })
    });
    return dtas;
    }
  getBiks(){
    var data = this.data.child('/Bikes');
    var dtas;
    data.on('value', (snapshot) => {
      snapshot.forEach(snap => {
        dtas = snap.val();
      })
    });
    return dtas;
    }
  getCrs(){
    var data = this.data.child('/Cars');
    var dtas;
    data.on('value', (snapshot) => {
      snapshot.forEach(snap => {
        dtas = snap.val();
      })
    });
    return dtas;
    }
    
  getBikes(){

    return this.data.child('/Bikes');
    }

  getCars(){

    return this.data.child('/Cars');
    }
  getAir(){

    return this.data.child('/AQI');
    }
  getCarbon(){

    return this.data.child('/CO2_ppm');
    }
  getTemperature(){

    return this.data.child('/Temperature');
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


  setting(checkedA,checkedB,checkedC,checkedD,checkedE,checkedF,checkedG,checkedH,checkedI) {
    this.data.child('/users/' + this.getCurrentUsername()).set({
      people_counting: checkedA,
      bicycle_counting: checkedB,
      car_counting: checkedC,
      pm: checkedD,
      cotwo: checkedE,
      temp: checkedF,
      fall_detection: checkedG,
      car_detection: checkedH,
      bike_accident: checkedI,
    });    
  }

  settingdata() {
    return this.data.child('/users/' + this.getCurrentUsername())
    
  }


}

export default new Firebase()