import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-setting',
  templateUrl: './hospital-setting.component.html',
  styleUrls: ['./hospital-setting.component.scss']
})
export class HospitalSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //url; //Angular 8
	url: any; //Angular 11, for stricter type
	msg = "assets/images/upload-icon.png";

	url2: any;
	msg2 = "assets/images/upload-icon.png";
  imageIcon:string = "assets/images/upload-icon.png";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

	selectFile2(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg2 = "";
			this.url2 = reader.result; 
		}
	}

}
