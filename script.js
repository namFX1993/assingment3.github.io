"use strict";

const form = document.querySelector("form");
const showInfo = document.querySelector(".show-info");
const myInfo = document.querySelector(".my-info");
const email = document.querySelector("#EMailVerify");
const message = document.querySelector(".form-text");

// Thông báo lỗi khi email không đúng định dạng

function errorAlert(input) {
  message.classList.add("error");
  message.textContent = "Email không đúng định dạng";
}

// thông báo thành công

function successAlert(input) {
  message.textContent = "";
}

// check email đúng hay sai định dạng

function checkEmail(input) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isEmailError = regex.test(input.value);
  if (regex.test(input.value)) {
    successAlert(input);
  } else {
    errorAlert(input);
  }
  return isEmailError;
}

// hiển thị thông tin vầ ẩn form sau khi nhấn nút submit và đã kiểm tra email nhập vào là đúng

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmailError = checkEmail(email);
  if (isEmailError) {
    myInfo.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
  }
});

// Hiển thị view more khi hover
const view = document.querySelectorAll(".view");
const desContainer = document.querySelectorAll(".des-container");
const jobInfoContainer = document.querySelector(".job-info-container");
const description = document.querySelectorAll(".description");

//  hàm hiển thị viewmore khi di chuột vào vùng chứa container

jobInfoContainer.addEventListener("mouseover", function (e) {
  const mouseTarget = e.target;
  desContainer.forEach((el) => {
    if (el == mouseTarget.closest(".des-container"))
      el.querySelector(".view").classList.remove("hidden");
  });
});

//  hàm hiển ẩn viewmore khi di chuột khỏi vùng chứa container

jobInfoContainer.addEventListener("mouseout", function (c) {
  const mouseTarget = c.target;
  desContainer.forEach((el) => {
    if (el !== mouseTarget) el.querySelector(".view").classList.add("hidden");
  });
});

// hàm chuyển từ view more, hiển thị description khi click vào view more và chuyển view more sang view less

view.forEach((v) => {
  v.addEventListener("click", function () {
    v.classList.toggle("active");
    const y = v.toggleAttribute("active");

    // hiển thị description khi click view more

    if (y) {
      v.closest(".des-container")
        .querySelector(".description")
        .classList.remove("hidden");
      v.closest(".des-container").classList.add("h-100");
    }
    // ẩn description khi click view less
    else {
      v.closest(".des-container")
        .querySelector(".description")
        .classList.add("hidden");
      v.closest(".des-container").classList.remove("h-100");
    }
  });
});
