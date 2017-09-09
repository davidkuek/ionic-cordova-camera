import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

image:any;

  constructor(public navCtrl: NavController,private camera: Camera,private socialSharing: SocialSharing) {

  }

buttonTapped(){
this.camera.getPicture(this.options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.image = base64Image;
}, (err) => {
 // Handle error
});
}

shareTapped(){

this.socialSharing.shareViaFacebook('our first selfie', this.image).then(() => {
  // Success!
}).catch(() => {
  // Error!
});

}
}

