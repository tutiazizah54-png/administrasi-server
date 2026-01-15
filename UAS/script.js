
function ubahWarna() {
  document.getElementById("box").style.backgroundColor = "blue";
}


function tambahElemen() {
  let p = document.createElement("p");
  p.textContent = "Ini elemen baru dari JavaScript";
  document.body.appendChild(p);
}


function hitung(operator) {
  let a = parseFloat(document.getElementById("angka1").value);
  let b = parseFloat(document.getElementById("angka2").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Masukkan angka!");
    return;
  }

  let hasil;
  if (operator === "+") hasil = a + b;
  if (operator === "-") hasil = a - b;
  if (operator === "*") hasil = a * b;
  if (operator === "/") hasil = a / b;

  document.getElementById("history").innerHTML +=
    `<p>${a} ${operator} ${b} = ${hasil}</p>`;
}

function hapusInput() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

function hapusHistory() {
  document.getElementById("history").innerHTML = "";
}
