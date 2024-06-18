// load_model.js

async function loadModel() {
    const modelPath = 'model.json';
    const model = await tf.loadLayersModel(modelPath);
    console.log(model.summary());

    document.getElementById('imageInput').addEventListener('change', async (event) => {
        const file = event.target.files[0];
        const imageData = await loadImage(file);
        const preprocessedImage = preprocessImage(imageData);
        const prediction = model.predict(preprocessedImage);
        displayPrediction(prediction);
    });
}

function loadImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => resolve(img);
        };
        reader.readAsDataURL(file);
    });
}

function preprocessImage(image) {
    const tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([416, 416]) // Adjust size according to model input
        .toFloat()
        .expandDims();
    return tensor.div(tf.scalar(255.0)); // Normalize the image
}

function displayPrediction(prediction) {
    const predictionOutput = document.getElementById('predictionOutput');
    const classNames = ['Cacar Air', 'Jamur Kuku', 'Jerawat', 'Kurap', 'Kutu Air']; // Replace with actual class names
    const scores = prediction.dataSync();
    const maxScoreIndex = scores.indexOf(Math.max(...scores));

    let outputHTML = `<h2>Prediction Results:</h2><ul>`;
    scores.forEach((score, index) => {
        outputHTML += `<li>${classNames[index]}: ${score.toFixed(4)}</li>`;
    });
    outputHTML += `</ul><h3>Predicted Class: ${classNames[maxScoreIndex]}</h3>`;
    predictionOutput.innerHTML = outputHTML;
}

loadModel();
