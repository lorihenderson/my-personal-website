document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('demo').onclick = function changeContent() {
        document.getElementById('demo').textContent = "Fooled ya!";
        document.getElementById('demo').style = "Color: blue";
     }

})
