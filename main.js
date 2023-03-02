var soLanDoan = 0;
var soLanDoanDung = 0;
var tongDiem = 0;

document.getElementById("num").value = soLanDoan + 1;

var subBtn = document.querySelector('input[type="submit"]');
subBtn.onclick = function () {
    soLanDoan++;
    var rdNumber = Math.floor(Math.random() * 6);

    var number = document.getElementById("number").value;
    if (rdNumber == number) {
        alert('Chúc mừng bạn đã đoán đúng!');
        tongDiem += 2;
        soLanDoanDung++;
    } else {
        alert("Bạn đoán sai rồi, số máy tạo ra là: " + rdNumber);
    }
    document.getElementById("num").value = soLanDoan + 1;

}

document.querySelector('input[type="button"]').onclick = function () {
    document.getElementById("ketqua").style = "display: block;";
    document.getElementById("choi").style = "display: none;";

    document.getElementById("soLanDoan").value = soLanDoan;
    document.getElementById("soLanDoanDung").value = soLanDoanDung;
    document.getElementById("tongDiem").value = tongDiem;

}

document.getElementById("choiTiep").onclick = function () {
    document.getElementById("ketqua").style = "display: none;";
    document.getElementById("choi").style = "display: block;";
}

document.getElementById("choiLai").onclick = function () {
    document.getElementById("ketqua").style = "display: none;";
    document.getElementById("choi").style = "display: block;";
    soLanDoan = 0;
    soLanDoanDung = 0;
    tongDiem = 0;
    document.getElementById("num").value = soLanDoan + 1;
    document.getElementById("number").value = '';
}