var x = document.getElementById('input').value

if (x % 2 === 0) {
    document.getElementById("oddeven").innerText = "Even"
} else {
    document.getElementById("oddeven").innerText = "Odd"
}