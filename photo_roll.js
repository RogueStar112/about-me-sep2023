let photoIndex = 0;

let photoList = ["img_1", "img_2", "img_3", "img_4", "img_5"];

let unselectedPhotos = document.querySelectorAll(".unselected");

let photoRoll = document.getElementById("photo-roll");

let photoPosition = 0;

function getPhotoRollWidth() {
  let photoRollTotalLength = 0;

  for (i = 0; i < photoList.length; i++) {
    let photoSelected = document.getElementById(photoList[i]);
    photoRollTotalLength += photoSelected.offsetWidth;
  }

  console.log("TOTAL PHOTO ROLL WIDTH " + photoRollTotalLength);
  return photoRollTotalLength;
}

function prevPhoto() {
  photoIndex -= 1;

  if (photoIndex < 0) {
    /* get photoIndex length, minus 1, to account for indexing
     starting with 0 */
    photoIndex = photoList.length - 1;
    photoPosition = getPhotoRollWidth();
    photoRoll.style.left = `${photoPosition}` + "px";
  } else {
    console.log(photoList[photoIndex]);

    let photoSelected = document.getElementById(photoList[photoIndex]);

    photoSelected.classList.toggle("selected");

    photoPosition -= photoSelected.offsetWidth;
    photoRoll.style.left = `-${photoPosition}` + "px";

    console.log(`PHOTOSELECTED OFFSETWIDTH: ${photoPosition}`);
  }
}

function nextPhoto() {
  photoIndex += 1;

  if (photoIndex > photoList.length - 1) {
    console.log("Photo limit exceeded");
    photoIndex = 0;
    photoPosition = 0;
    photoRoll.style.left = "0px";
  } else {
    let photoSelected = document.getElementById(photoList[photoIndex]);

    photoSelected.classList.toggle("selected");

    photoPosition += photoSelected.offsetWidth;
    photoRoll.style.left = `-${photoPosition}` + "px";

    console.log(`PHOTOSELECTED OFFSETWIDTH: ${photoPosition}`);
  }

  // console.log(photoList[photoIndex]);
}