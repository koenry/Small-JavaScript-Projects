
function calculateArea (id) {
    const diameter = document.getElementById('inputDiam').value;
    parseInt(diameter);
    const area3 = Math.PI * (diameter ** 2) / 4;
        if (id === '1') {
            document.getElementById('result').innerHTML = Math.round(area3) + ' cm²'; 
        } else if (id === '2') {
            document.getElementById('result').innerHTML = Math.round(area3) + ' in²'; 
        
}
}


