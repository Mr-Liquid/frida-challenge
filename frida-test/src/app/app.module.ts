import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TabsComponent } from './content/tabs/tabs.component';
import { TableComponent } from './content/table/table.component';
import {HttpService} from "./http.service";
import { AngularFireModule } from 'angularfire2';
import { SettingsMenuComponent } from './header/settings-menu/settings-menu.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyAXoKO24mfV_aA2Zt8GzmQi_ZvyqxWse0Q',
  authDomain: 'true',
  databaseURL: 'https://frida-test.firebaseio.com/',
  storageBucket: 'https://frida-test.firebaseio.com/api/'
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TabsComponent,
    TableComponent,
    SettingsMenuComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    TabsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
