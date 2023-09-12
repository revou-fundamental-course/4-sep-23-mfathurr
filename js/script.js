// 1. Buat section show/hide dengan kelas active/disabled
const navHitungLuas = document.querySelector("nav button:nth-child(1)");
console.log(navHitungLuas);
const navHitungKeliling = document.querySelector("nav button:nth-child(2)");
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
const sisi1 = document.getElementsByClassName("sisi1");
const sisi2 = document.getElementsByClassName("sisi2");

btnSubmit[0].addEventListener("click", () => {
  sectionLuas.classList.contains("active")
    ? hitungLuas()
    : "Terjadi kesalahan hitung luas";
});

btnSubmit[1].addEventListener("click", () => {
  sectionKeliling.classList.contains("active")
    ? hitungKeliling()
    : "Terjadi kesalahan hitung keliling";
});

function hitungLuas() {
  const inputNumber = document.getElementById("numberLuas").value;
  sisi1[0].innerText = inputNumber;
  sisi2[0].innerText = inputNumber;
  document.querySelector("section#luas p:last-of-type span").innerText =
    inputNumber * inputNumber;
}

function hitungKeliling() {
  const inputNumber = document.getElementById("numberKeliling").value;
  sisi1[0].innerHTML = inputNumber;
  document.querySelector("section#keliling p:last-of-type span").innerHTML =
    4 * inputNumber;
}

// 4. Reset button
const btnReset = document.getElementsByClassName("btn-reset");

btnReset[0].addEventListener("click", () => {
  sectionLuas.classList.contains("active")
    ? resetLuas()
    : "Terjadi kesalahan reset luas";
});

btnReset[1].addEventListener("click", () => {
  sectionKeliling.classList.contains("active")
    ? resetKeliling()
    : "Terjadi kesalahan reset keliling";
});

function resetLuas() {
  document.getElementById("numberLuas").value = "";
  sisi1[0].innerHTML = 0;
  sisi2[0].innerHTML = 0;
  document.querySelector("section#luas p:last-of-type span").innerHTML = 0;
}

function resetKeliling() {
  document.getElementById("numberKeliling").value = "";
  sisi1[0].innerHTML = 0;
  document.querySelector("section#keliling p:last-of-type span").innerHTML = 0;
}
