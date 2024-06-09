document.addEventListener('DOMContentLoaded', function () {
    var ctx1 = document.getElementById('curriculumSurveyChart').getContext('2d');
    var curriculumSurveyChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            datasets: [{
                label: 'Curriculum and Classes Survey',
                data: [1, 0, 4, 0, 2],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71']
            }]
        },
        options: {
            responsive: true
        }
    });

    var ctx2 = document.getElementById('instructionalStrategiesChart').getContext('2d');
    var instructionalStrategiesChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Direct Learning', 'Role Playing', 'Inquiry', 'Project Based', 'Technology Integration', 'Review'],
            datasets: [{
                label: 'Instructional Strategies',
                data: [4, 2, 3, 2, 2, 3],
                backgroundColor: '#36a2eb'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add event listeners for charts
    document.getElementById('curriculumSurveyChart').addEventListener('click', function () {
        window.location.href = this.dataset.url;
    });

    document.getElementById('instructionalStrategiesChart').addEventListener('click', function () {
        window.location.href = this.dataset.url;
    });
});
