let photoIndex = 0;

let photoList = ["img_1", "img_2", "img_3", "img_4", "img_5"];

let unselectedPhotos = document.querySelectorAll(".unselected");

function prevPhoto() {
  photoIndex -= 1;

  if (photoIndex < 0) {
    /* get photoIndex length, minus 1, to account for indexing
     starting with 0 */
    photoIndex = photoList.length - 1;
  }

  console.log(photoList[photoIndex]);

  let photoSelected = document.getElementById(photoList[photoIndex]);

  photoSelected.classList.toggle("selected");
}

function nextPhoto() {
  photoIndex += 1;

  if (photoIndex > photoList.length - 1) {
    photoIndex = 0;
  }

  console.log(photoList[photoIndex]);

  let photoSelected = document.getElementById(photoList[photoIndex]);

  photoSelected.classList.toggle("selected");
}
