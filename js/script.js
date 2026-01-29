// Welcoming speech menggunakan prompt (poin 4)
window.onload = function() {
    let name = prompt("Masukkan nama Anda untuk sapaan hangat:", "Harfi");
    if (name) {
        document.getElementById("user-name").innerText = name;
    }
};

// Validasi Form & Show Value (poin 5)
const form = document.getElementById("message-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value;
    const tgl = document.getElementById("input-tgl").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("input-pesan").value;
    const timeNow = new Date();

    // Tampilkan di HTML
    document.getElementById("current-time").innerText = timeNow.toString();
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tgl").innerText = tgl;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;

    alert("Pesan Terkirim!");
});