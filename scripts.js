function tinhToan() {
    const a = parseFloat(document.getElementById("a").value) || 0;
    const b = parseFloat(document.getElementById("b").value) || 0;
    const tong = a + b;
    document.getElementById("result").innerText = "Kết quả: " + tong;
  }