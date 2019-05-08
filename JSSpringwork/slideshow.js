slideshow = {
    photoList: ['Photo1', 'Photo2', 'Photo3', 'Photo4', 'Photo5'],
    photoIndex: 0,
    nextPhoto: function() {
        if (this.photoIndex < this.photoList.length-1) {
            this.photoIndex += 1;
            console.log(this.photoList[this.photoIndex]);
        } else {
            console.log('End of Slideshow');
        }
 
    },
    prevPhoto: function() {
        if (this.photoIndex > 0) {
            this.photoIndex -= 1;
            console.log(this.photoList[this.photoIndex]);
        } else {
            console.log('Beginning of Slideshow');
        }
 
    },
    getCurrentPhoto: function() {
        console.log(this.photoList[this.photoIndex]);
    }
 }
 
 
 slideshow.getCurrentPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.nextPhoto();
 slideshow.prevPhoto();
 slideshow.prevPhoto();
 slideshow.prevPhoto();
 slideshow.prevPhoto();
 slideshow.prevPhoto();