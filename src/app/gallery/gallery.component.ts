import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }
  ngOnInit() {
    this.galleryOptions = [
      {
          width: '800px',
          height: '700px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          arrowPrevIcon: 'fa fa-angle-left',
          arrowNextIcon: 'fa fa-angle-right'
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.galleryImages = [
        {
            small: '/assets/gallery-photos/9.JPG',
            medium: '/assets/gallery-photos/9.JPG',
            big: '/assets/gallery-photos/9.JPG'
        },
        {
          small: '/assets/gallery-photos/3.JPG',
          medium: '/assets/gallery-photos/3.JPG',
          big: '/assets/gallery-photos/3.JPG'
        },
        {
          small: '/assets/gallery-photos/2.JPG',
          medium: '/assets/gallery-photos/2.JPG',
          big: '/assets/gallery-photos/2.JPG'
        },
        {
          small: '/assets/gallery-photos/11.JPG',
          medium: '/assets/gallery-photos/11.JPG',
          big: '/assets/gallery-photos/11.JPG'
        },
        {
          small: '/assets/gallery-photos/1.JPG',
          medium: '/assets/gallery-photos/1.JPG',
          big: '/assets/gallery-photos/1.JPG'
        },
        {
          small: '/assets/gallery-photos/6.JPG',
          medium: '/assets/gallery-photos/6.JPG',
          big: '/assets/gallery-photos/6.JPG'
        },
        {
          small: '/assets/gallery-photos/7.JPG',
          medium: '/assets/gallery-photos/7.JPG',
          big: '/assets/gallery-photos/7.JPG'
        },
        {
          small: '/assets/gallery-photos/4.JPG',
          medium: '/assets/gallery-photos/4.JPG',
          big: '/assets/gallery-photos/4.JPG'
        },
        {
          small: '/assets/gallery-photos/5.JPG',
          medium: '/assets/gallery-photos/5.JPG',
          big: '/assets/gallery-photos/5.JPG'
        },
        {
          small: '/assets/gallery-photos/8.JPG',
          medium: '/assets/gallery-photos/8.JPG',
          big: '/assets/gallery-photos/8.JPG'
        },
        {
          small: '/assets/gallery-photos/10.JPG',
          medium: '/assets/gallery-photos/10.JPG',
          big: '/assets/gallery-photos/10.JPG'
        }
    ];
  }
}


