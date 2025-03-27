function calculate_area() {
    let side_area = document.getElementById("side_area").value;
    
    if (side_area === "" || side_area <= 0) {
        alert("Please enter a valid value!");
        return;
    }

    let area = side_area * side_area;

    document.getElementById("result_area").innerHTML = `
        <p>Area: ${area} unit area</p>
    `;
}

function calculate_circumference() {
    let side_circumference = document.getElementById("side_circumference").value;
    
    if (side_circumference === "" || side_circumference <= 0) {
        alert("Please enter a valid value!");
        return;
    }

    let circumference = 4 * side_circumference;

    document.getElementById("result_circumference").innerHTML = `
        <p>Circumference: ${circumference} unit length</p>
    `;
}