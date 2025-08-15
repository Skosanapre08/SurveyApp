
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]').value;
    const q3 = document.getElementById("q3").value;

    const result = `
        <h2>Survey Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Exercise:</strong> ${q1}</p>
        <p><strong>Lifestyle Rating:</strong> ${q2}</p>
        <p><strong>Healthy Food:</strong> ${q3}</p>
    `;

    document.getElementById("result").innerHTML = result;
});
