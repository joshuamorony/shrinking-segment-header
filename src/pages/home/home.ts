import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	section: string = 'two';
	somethings: any = new Array(20);

	constructor(public navCtrl: NavController) {

	}

}
