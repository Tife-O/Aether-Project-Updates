document.addEventListener("DOMContentLoaded", async () => {
    try {
        const userResponses = JSON.parse(localStorage.getItem("userResponses")) || [];

        let careerScores = {
            "Software Engineer": 0,
            "Mechanical Engineer": 0,
            "Doctor/Nurse": 0,
            "Business Executive": 0,
            "Artist/Content Creator": 0
        };

        userResponses.forEach(response => {
            switch(response) {
                case "A) I actively participate in projects, internships, or side hustles.":
                    careerScores["Software Engineer"] += 25;
                    careerScores["Mechanical Engineer"] += 20;
                    careerScores["Business Executive"] += 30;
                    break;
                case "B) I research and study the field in my free time but don’t take many practical steps.":
                    careerScores["Software Engineer"] += 20;
                    careerScores["Doctor/Nurse"] += 25;
                    careerScores["Artist/Content Creator"] += 10;
                    break;
                case "C) I occasionally explore my interests, but I’m not consistent.":
                    careerScores["Artist/Content Creator"] += 25;
                    careerScores["Business Executive"] += 15;
                    break;
                case "D) I don’t engage much outside of my regular responsibilities.":
                    careerScores["Business Executive"] += 10;
                    careerScores["Doctor/Nurse"] += 10;
                    break;
                case "A) Solving complex problems and analyzing data":
                    careerScores["Software Engineer"] += 30;
                    break;
                case "B) Designing and building new things":
                    careerScores["Mechanical Engineer"] += 30;
                    break;
                case "C) Helping and communicating with people":
                    careerScores["Doctor/Nurse"] += 30;
                    break;
                case "D) Organizing and managing projects":
                    careerScores["Business Executive"] += 30;
                    break;
                case "E) Creating art, music, or content":
                    careerScores["Artist/Content Creator"] += 30;
                    break;
            }
        });

        let totalScore = Object.values(careerScores).reduce((a, b) => a + b, 0) || 1; 

        let careerMatches = Object.keys(careerScores).map(career => ({
            name: career,
            score: careerScores[career],
            percentage: Math.round((careerScores[career] / totalScore) * 100)
        })).sort((a, b) => b.percentage - a.percentage);

        const resultsContainer = document.getElementById("career-results");
        resultsContainer.innerHTML = "";

        careerMatches.forEach(career => {
            const careerElement = document.createElement("div");
            careerElement.classList.add("career-card");
            careerElement.innerHTML = `
                <h3>${career.name}</h3>
                <p>Match: ${career.percentage}%</p>
            `;
            resultsContainer.appendChild(careerElement);
        });
        // additions //


        // additions //
    } catch (error) {
        console.error("Error loading career data:", error);
    }
});
