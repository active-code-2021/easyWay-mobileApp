import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAXsRDWRBpGTKWYwIwa3z20oOWqoofFCW8",
//   authDomain: "easyway-329720.firebaseapp.com",
//   projectId: "easyway-329720",
//   storageBucket: "easyway-329720.appspot.com",
//   messagingSenderId: "21900854044",
//   appId: "1:21900854044:web:602a24a5a84e4a67d470d9",
//   measurementId: "G-X1Q032NWQY"
// };

// const app = firebaseConfig.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

