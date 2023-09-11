// 1. Buat section show/hide dengan kelas active/disabled
const navHitungLuas = document.querySelector("nav a:nth-child(1)");
console.log(navHitungLuas);
const navHitungKeliling = document.querySelector("nav a:nth-child(2)");
console.log(navHitungKeliling);
const sectionLuas = document.querySelector("section#luas");
const sectionKeliling = document.querySelector("section#keliling");

navHitungLuas.addEventListener("click", () => {
  sectionLuas.classList.add("active");
  sectionKeliling.classList.remove("active");
});

navHitungKeliling.addEventListener("click", () => {
  sectionKeliling.classList.add("active");
  sectionLuas.classList.remove("active");
});

// 2. Cek status aktif section & jalankan fungsi addEventListener sesuai status aktif
const btnSubmit = document.getElementsByClassName("btn-submit");
const inputNumber = document.getElementById("number").value;
const sisi1 = document.getElementsByClassName("sisi1");
const sisi2 = document.getElementsByClassName("sisi2");

btnSubmit[0].addEventListener("click", () => {
  if (document.querySelector("section#luas > .btn-action > .btn-submit")) {
    hitungLuas();
  } else if (
    document.querySelector("section#keliling > .btn-action > .btn-submit")
  ) {
    hitungKeliling();
  }
});

function hitungLuas() {
  sisi1[0].innerHTML = inputNumber;
  sisi2[0].innerHTML = inputNumber;
  const result = inputNumber * inputNumber;
  console.log(result);
  document.querySelector("section#luas p:last-of-type span").innerHTML = result;
}

function hitungKeliling() {
  sisi1[0].innerHTML = inputNumber;
  const result = 4 * inputNumber;
  console.log(result);
  document.querySelector("section#keliling p:last-of-type span").innerHTML =
    result;
}
