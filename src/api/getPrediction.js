import axios from 'axios';

export const getPrediction = async (data) => {
    const inputData = {
        "Sleep Hours": Number(data.sleepHours),
        "Physical Activity": Number(data.physicalActifity),
        "Caffeine Intake": Number(data.caffeine),
        "Alcohol Consumption": Number(data.alcohol),
        "Stress Level": Number(data.stress),
        "Heart Rate": Number(data.heartRate),
        "Breathing Rate": Number(data.breathingRate),
        "Sweating Level": Number(data.sweatingLevel)
    };

    const response = await axios.post('http://127.0.0.1:5000/predict', inputData);
    return response.data; // pastikan API mengembalikan `predicted_anxiety_level`
};
