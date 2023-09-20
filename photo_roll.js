let photoIndex = -1;

let photoList = ["img_1", "img_2", "img_3", "img_4", "img_5", "img_6"];

let descriptionList = [
  "desc_1",
  "desc_2",
  "desc_3",
  "desc_4",
  "desc_5",
  "desc_6",
];

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

  console.log(photoList[photoIndex]);

  let photoSelected = document.getElementById(photoList[photoIndex]);
  let descriptionSelected = document.getElementById(
    descriptionList[photoIndex]
  );

  if (photoIndex < 0) {
    photoIndex = -1;
    photoPosition = 0;
    photoRoll.style.left = "0px";

    console.log("PI INDEX UNDERFLOW", photoIndex);
  } else {
    for (i = 0; i < photoList.length; i++) {
      if (i != photoIndex) {
        let photoSelected = document.getElementById(photoList[i]);
        let descriptionSelected = document.getElementById(descriptionList[i]);

        photoSelected.classList.remove("selected");
        descriptionSelected.classList.remove("selected");
      } else {
        photoSelected.classList.add("selected");
        descriptionSelected.classList.add("selected");
      }
    }
  }

  // photoSelected.classList.toggle("selected");

  photoPosition -= photoSelected.offsetWidth;
  photoRoll.style.left = `-${photoPosition}` + "px";

  console.log(`PHOTOSELECTED OFFSETWIDTH: ${photoPosition}`);
  // }
}

function nextPhoto() {
  photoIndex += 1;

  let photoSelected = document.getElementById(photoList[photoIndex]);
  let descriptionSelected = document.getElementById(
    descriptionList[photoIndex]
  );

  console.log("Description selected " + descriptionList[photoIndex]);

  if (photoIndex > photoList.length - 1) {
    console.log("Photo limit exceeded");
    photoIndex = -1;
    photoPosition = 0;
    photoRoll.style.left = "0px";
  } else {
    for (i = 0; i < photoList.length; i++) {
      if (i != photoIndex) {
        let photoSelected = document.getElementById(photoList[i]);
        let descriptionSelected = document.getElementById(descriptionList[i]);

        photoSelected.classList.remove("selected");
        descriptionSelected.classList.remove("selected");
      } else {
        photoSelected.classList.add("selected");
        descriptionSelected.classList.add("selected");
      }
    }

    // photoSelected.classList.toggle("selected");

    photoPosition += photoSelected.offsetWidth;
    photoRoll.style.left = `-${photoPosition}` + "px";

    console.log(`PHOTOSELECTED OFFSETWIDTH: ${photoPosition}`);
    console.log("PHOTO INDEX: " + photoIndex);
  }

  // console.log(photoList[photoIndex]);
}
