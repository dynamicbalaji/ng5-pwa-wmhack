import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-card',
  templateUrl: './dc-card.component.html',
  styleUrls: ['./dc-card.component.css']
})
export class DcCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
}
dcs=[{value:'CHN-M',viewValue:'Chennai Mcity'},{value:'PUNE',viewValue:'Pune'},{value:'BLR',viewValue:'Bangalore'},{value:'BEN',viewValue:'Bentonville'}]

nearMeLst = [{value:1,viewValue:'Restaurants'},{value:2,viewValue:'Pharmacy'},{value:3,viewValue:'Bank/ATM'}];

selecteddc:string="CHN-M";
lightbox_open() {
  let lightBoxVideo = <HTMLVideoElement> document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

lightbox_close() {
  let lightBoxVideo = <HTMLVideoElement> document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
}
