import { Component, Input} from '@angular/core';
import { Utils } from '../../utils'

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.less']
})
export class SettingsMenuComponent {
  private utils:any = new Utils();
  showMenu:boolean = false;
  public user:string;
  @Input() user;
  constructor() {
    console.log(this.user);
    //console.log(this.utils.modifyUserName(this.user));
  }

  onOpenMenu(){
    this.showMenu = !this.showMenu;
    //console.log(this.modifyUserName());
  }

}
