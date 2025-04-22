// document
//   .querySelector(".hamburger-icon")
//   .addEventListener("click", function () {
//     const links = document.querySelector(".social");
//     links.style.display = links.style.display === "block" ? "none" : "block";
//   });


document.querySelector(".footer").innerHTML =
  "Created by David Duras  © " + new Date().getFullYear() + "";

document
  .getElementById("hamburger14-input")
  .addEventListener("change", function () {
    const navigation = document.querySelector(".navigation");
    if (this.checked) {
      navigation.style.display = "flex"; // Show the navigation
    } else {
      navigation.style.display = "none"; // Hide the navigation
    }
  });
