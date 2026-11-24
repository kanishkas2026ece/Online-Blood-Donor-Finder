let donors = [
    {
        name: "Arun",
        phone: "9876543210",
        group: "O+",
        city: "Chennai"
    },
    {
        name: "Priya",
        phone: "9876543211",
        group: "A+",
        city: "Coimbatore"
    },
    {
        name: "Kumar",
        phone: "9876543212",
        group: "B+",
        city: "Erode"
    },
    {
        name: "Divya",
        phone: "9876543213",
        group: "AB+",
        city: "Chennai"
    }
];

function searchDonors() {

    let group = document.getElementById("bloodGroup").value;
    let city = document.getElementById("city").value.trim().toLowerCase();

    let results = document.getElementById("donorResults");

    if (group === "" || city === "") {
        results.innerHTML = "Please select blood group and enter city.";
        return;
    }

    let found = donors.filter(donor =>
        donor.group === group &&
        donor.city.toLowerCase() === city
    );

    if (found.length === 0) {
        results.innerHTML = "No matching donors found.";
        return;
    }

    results.innerHTML = found.map(donor => `
        <div class="donor-card">
            <h3>${donor.name}</h3>
            <p>Blood Group: ${donor.group}</p>
            <p>City: ${donor.city}</p>
            <p>Phone: ${donor.phone}</p>
        </div>
    `).join("");
}

document.getElementById("donorForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let donor = {
        name: document.getElementById("name").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        group: document.getElementById("group").value,
        city: document.getElementById("location").value.trim()
    };

    donors.push(donor);

    document.getElementById("registerMessage").innerHTML =
        "Successfully registered as a blood donor!";

    this.reset();
});