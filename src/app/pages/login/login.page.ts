import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AppID from 'ibmcloud-appid-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // appID = new AppID();

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  //   await this.appID.init({
  //     "clientId": "6b0e9bab-10f6-451b-b771-97c924aeb0cc",
  //     "tenantId": "07561369-07a3-4b16-b805-7a89da19a30e",
  //     "secret": "Mzk5ZTA1OTQtOTBhNC00MDgzLWEwZDktNjQ1OTQ0ODhhMWU2",
  //     "name": "Ruti Zino",
  //     "oAuthServerUrl": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/07561369-07a3-4b16-b805-7a89da19a30e",
  //     "profilesUrl": "https://eu-gb.appid.cloud.ibm.com",
  //     "discoveryEndpoint": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/07561369-07a3-4b16-b805-7a89da19a30e/.well-known/openid-configuration",
  //     "type": "regularwebapp",
  //     "scopes": []
  //   });
  // }

  // async login() {
  //   const tokens = await this.appID.signin();
  //   console.log(tokens);
  //   let userInfo = await this.appID.getUserInfo(tokens.accessToken);
  //   console.log(userInfo);
  // }
  // }

  login() {
    this.router.navigate(['/home']);
  }
}
