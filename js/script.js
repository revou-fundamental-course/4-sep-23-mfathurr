// 1. Buat section show/hide dengan kelas active/disabled
// 2. Cek status aktif section
// 3. Jalankan fungsi addEventListener sesuai status aktif

const btnSubmit = document.getElementsByClassName("btn-submit");
const inputNumber = document.getElementById("number").value;
const sisi1 = document.getElementsByClassName("sisi1");
const sisi2 = document.getElementsByClassName("sisi2");

btnSubmit[0].addEventListener("click", () => {
  // hitungLuas();
  hitungKeliling();
});

function hitungLuas() {
  sisi1[0].innerHTML = inputNumber;
  sisi2[0].innerHTML = inputNumber;
  const result = inputNumber * inputNumber;
  document.querySelector("section#luas p:last-of-type span").innerHTML = result;
}

function hitungKeliling() {
  sisi1[0].innerHTML = inputNumber;
  const result = 4 * inputNumber;
  document.querySelector("section#keliling p:last-of-type span").innerHTML =
    result;
}
