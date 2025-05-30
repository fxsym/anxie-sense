function getPrediction() {
    const inputData = {
        "Sleep Hours": 6,
        "Physical Activity": 2,
        "Caffeine Intake": 100,
        "Alcohol Consumption": 0,
        "Stress Level": 7,
        "Heart Rate": 80,
        "Breathing Rate": 18,
        "Sweating Level": 3
    };

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Predicted Anxiety Level:', data.predicted_anxiety_level);
        // Tampilkan hasil di UI
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
