import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ListingService } from '../services/listing.service';
import { CategoryService } from '../services/category.service';
import { TagService } from '../services/tag.service';
import { Listing } from '../models/listing';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import { SessionService } from '../services/session.service';
import {
  Camera,
  CameraOptions,
  DestinationType,
} from '@ionic-native/camera/ngx';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-create-new-listing',
  templateUrl: './create-new-listing.page.html',
  styleUrls: ['./create-new-listing.page.scss'],
})
export class CreateNewListingPage implements OnInit {
  submitted: boolean;
  newListing: Listing;
  categoryId: string;
  tagIds: string[];

  categories: Category[];
  tags: Tag[];

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  userId: number;

  imgURL: string;
  tempFile: File;
  blob: Blob;

  showImage: boolean;
  useCustomUpload: boolean;
  fileName: string | null;
  fileToUpload: File | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private categoryService: CategoryService,
    private sessionService: SessionService,
    private tagService: TagService,
    private camera: Camera,
    private fileUploadService: FileUploadService
  ) {
    this.submitted = false;
    this.newListing = new Listing();
    this.newListing.picturePath = '';
    this.newListing.rentalAvailability = true;
    this.newListing.forSaleAvailability = true;
    this.newListing.dateListed = new Date();
    this.newListing.likes = 0;
    this.newListing.name = '';
    this.resultSuccess = false;
    this.resultError = false;
    this.userId = this.sessionService.getCurrentUser().userId;

    this.showImage = false;
    this.useCustomUpload = true;
    this.fileName = null;
    this.fileToUpload = null;
  }

  ngOnInit() {
    this.categoryService.getLeafCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log('********** CreateNewListingComponent.ts: ' + error);
      }
    );

    this.tagService.getTags().subscribe(
      (response) => {
        this.tags = response;
      },
      (error) => {
        console.log('********** CreateNewListingComponent.ts: ' + error);
      }
    );
  }

  clear() {
    this.submitted = false;
    this.newListing = new Listing();
  }

  dataURLtoFile(dataurl: string, filename: string): File {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  dataURItoBlob(dataURI: string): Blob {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }

  create(createListingForm: NgForm) {
    let longTagIds: number[] = new Array();

    if (this.tagIds != null) {
      for (var i = 0; i < this.tagIds.length; i++) {
        longTagIds.push(parseInt(this.tagIds[i]));
      }
    }

    this.submitted = true;

    if (createListingForm.valid) {
      this.listingService
        .createNewListing(
          this.fileName,
          this.newListing,
          parseInt(this.categoryId),
          this.userId,
          longTagIds
        )
        .subscribe(
          (response) => {
            let newListingId: number = response;
            this.resultSuccess = true;
            this.resultError = false;
            this.message =
              'New Listing ' + newListingId + ' created successfully';

            this.newListing = new Listing();
            this.categoryId = '';
            this.tagIds = new Array();
            this.submitted = false;
            createListingForm.reset();
          },
          (error) => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message =
              'An error has occurred while creating the new Listing: ' + error;

            console.log('********** CreateNewListingPage.ts: ' + error);
          }
        );
    }
  }
  getCamera() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 720,
        correctOrientation: true,
      })
      .then(
        (imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.imgURL = (<any>window).Ionic.WebView.convertFileSrc(imageData);
          this.newListing.picturePath = this.imgURL;
          this.tempFile = imageData.getPath();
          console.log(
            '********** DEBUG CreateNewListingPage.ts imgUrl : ' +
            this.newListing.picturePath
          );
          // this.fileUploadService.uploadFile(this.tempFile).subscribe(
          //   (response) => {},
          //   (error) => {}
          // );
        },
        (err) => {
          console.log(err);
        }
      );
  }
  getGallery() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then(
        (imageData) => {
          this.imgURL = 'data:image/jpeg;base64,' + imageData;
          this.tempFile = this.dataURLtoFile(this.imgURL, 'test.jpg');
          console.log('create check tempFile name:' + this.tempFile.name);
          this.fileUploadService.uploadFile(this.tempFile).subscribe(
            (response) => {
              console.log('create success');
            },
            (error) => {
              console.log('create faileur');
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
  }
  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0);

    if (this.fileToUpload != null) {
      this.fileName = this.fileToUpload.name;

      this.fileUploadService.uploadFile(this.fileToUpload).subscribe(
        (response) => {
          this.showImage = true;
          console.log(
            '********** FileUploadComponent.ts: File uploaded successfully: ' +
            response.status
          );
        },
        (error) => {
          this.showImage = true;
          console.log('********** FileUploadComponent.ts: ' + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(['/index/']);
  }
}
