import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';

@Component({
  selector: 'app-scan-qrcode',
  templateUrl: './scan-qrcode.component.html',
  styleUrls: ['./scan-qrcode.component.scss']
})
export class ScanQrcodeComponent implements OnInit {

  scanActive = false;
  scanResult = "";
  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput!: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  loading!: HTMLIonLoadingElement;

  status: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator;
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PAW!');
    }
  }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
  }

  ngAfterViewInit(): void {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  captureImage(){
    this.fileinput.nativeElement.click();
  }

  handleFile(files: FileList){
    const file = files.item(0);

    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR (imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code){
        this.scanResult = code.data;
        this.showQrToast();
      }
    };
    img.src = URL.createObjectURL(file);

  }

  async startScan() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true)
    this.videoElement.play();

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    console.log('SCAN');

    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null!;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      console.log('code: ', code);

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this))
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  // Helper funtions
  stopScan() {
    this.scanActive = false;
  }

  reset() {
    this.scanResult = "";
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: 'top',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(this.scanResult!, '_system', 'location=yes');
          }
        }
      ]
    });
    toast.present();
  }

}
