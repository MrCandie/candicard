"use strict";
const displayImage = document.querySelector("#displayImage");
const displayLogo = document.querySelector("#displayLogo");
const fullnameSpan = document.querySelector(".fullname");
const professionSpan = document.querySelector(".profession");
const skillSpan = document.querySelector(".skill");
const ageSpan = document.querySelector(".age");
const idSpan = document.querySelector(".id");
const fileUpload = document.querySelector("#file");
const logoUpload = document.querySelector("#logo");
const inputFullname = document.querySelector("#fullname");
const inputProfession = document.querySelector("#profession");
const inputSkill = document.querySelector("#skill");
const inputAge = document.querySelector("#age");
const inputID = document.querySelector("#id");
const uploadBtn = document.querySelector("#upload");
const downloadBtn = document.querySelector("#download");
const cardPart = document.querySelector(".part1");
const downloadLink = document.querySelector("#download-link");
const section2 = document.querySelector(".section-2");
console.log(logoUpload);
let uploadedImg = "";
let uploadLogo = "";

class Candicard {
  #reader;
  #uploadedImg;
  #uploadLogo;
  constructor() {
    fileUpload.addEventListener("change", this._fileUploadMtd.bind(this));
    logoUpload.addEventListener("change", this._logoUploadMtd.bind(this));
    uploadBtn.addEventListener("click", this._upload.bind(this));
    this._downloadLink();
    downloadBtn.addEventListener("click", this._downloadBtn.bind(this));
  }

  // file upload method
  _fileUploadMtd() {
    this.#reader = new FileReader();
    this.#reader.addEventListener("load", this._fileReader.bind(this));
    this.#reader.readAsDataURL(fileUpload.files[0]);
  }

  // file reader method
  _fileReader() {
    this.#uploadedImg = this.#reader.result;
    displayImage.style.backgroundImage = `url(${this.#uploadedImg})`;
  }

  // logo upload method
  _logoUploadMtd() {
    this.#reader = new FileReader();
    this.#reader.addEventListener("load", this._logoReader.bind(this));
    this.#reader.readAsDataURL(logoUpload.files[0]);
  }

  //logo reader method
  _logoReader() {
    this.#uploadLogo = this.#reader.result;
    displayLogo.style.backgroundImage = `url(${this.#uploadLogo})`;
  }

  // upload btn
  _upload(e) {
    e.preventDefault();
    fullnameSpan.textContent = inputFullname.value;
    professionSpan.textContent = inputProfession.value;
    skillSpan.textContent = inputSkill.value;
    ageSpan.textContent = inputAge.value;
    idSpan.textContent = inputID.value;
  }

  // download link method
  _downloadLink() {
    html2canvas(section2).then((canvas) => {
      downloadLink.href = canvas.toDataURL();
      downloadLink.click();
    });
  }

  // download btn
  _downloadBtn(e) {
    e.preventDefault();
    this._downloadLink();
    fullnameSpan.textContent = "";
    professionSpan.textContent = "";
    skillSpan.textContent = "";
    ageSpan.textContent = "";
    idSpan.textContent = "";
  }
}

const candie = new Candicard();
console.log(candie);
