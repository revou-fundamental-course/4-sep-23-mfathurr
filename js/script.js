// 1. Buat section show/hide dengan kelas active/disabled
// 2. Cek status aktif section
// 3. Jalankan fungsi addEventListener sesuai status aktif

const btnSubmit = document.getElementsByClassName("btn-submit");
const inputNumber = document.getElementById("number").value;

btnSubmit[0].addEventListener("click", () => {
  hitungLuas();
});

function hitungLuas() {
  const result = inputNumber * inputNumber;
  document.querySelector("section#luas p:last-of-type span").innerHTML = result;
}

function hitungKeliling() {
  const result = 4 * inputNumber;
  document.querySelector("section#keliling p:last-of-type span").innerHTML =
    result;
}
