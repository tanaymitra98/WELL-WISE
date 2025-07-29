from flask import Flask, render_template, request
import pickle
import numpy as np
import bz2

# Load the compressed model
def load_compressed_model(filepath):
    with bz2.BZ2File(filepath, 'rb') as f:
        return pickle.load(f)

# Load the model
model = load_compressed_model('calories_model1.pbz2')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        gender = int(request.form['gender'])
        age = float(request.form['age'])
        height = float(request.form['height'])
        weight = float(request.form['weight'])
        duration = float(request.form['duration'])
        heart_rate = float(request.form['heart_rate'])
        body_temp = float(request.form['body_temp'])

        # Prepare input for model
        input_data = np.array([[gender, age, height, weight, duration, heart_rate, body_temp]])
        prediction = model.predict(input_data)[0]

        return render_template('index.html', prediction_text=f'Estimated Calories Burned: {prediction:.2f}')

if __name__ == '__main__':
    app.run(debug=True)