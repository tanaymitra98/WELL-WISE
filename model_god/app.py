from flask import Flask, render_template, request, send_from_directory, jsonify, make_response
import pickle
import numpy as np
import os
import requests

import json
import google.generativeai as genai
from dotenv import load_dotenv 
from flask import Flask, render_template

load_dotenv()






app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/legal')
def legal():
    return render_template('legal.html')

@app.route('/medical')
def medical():
    return render_template('medical.html')

@app.route('/pulse')
def pulse():
    return render_template('pulse.html')

# New routes for integrated web apps
@app.route('/pulseguard')
def pulseguard():
    return render_template('pulseguard.html')

@app.route('/calories-burnt')
def calories_burnt():
    return render_template('calories_burnt.html')

@app.route('/fitness-plan')
def fitness_plan():
    return render_template('fitness_plan.html')

# API routes for the integrated apps
@app.route('/predict_calories', methods=['POST'])
def predict_calories():
    try:
        # Import the calories prediction logic
        import sys
        import os
        sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'calories_burnt'))
        
        # Load the model directly
        import pickle
        import numpy as np
        import bz2
        
        def load_compressed_model(filepath):
            with bz2.BZ2File(filepath, 'rb') as f:
                return pickle.load(f)
        
        # Load the model
        model_path = os.path.join(os.path.dirname(__file__), '..', 'calories_burnt', 'calories_model1.pbz2')
        model = load_compressed_model(model_path)
        
        # Get form data
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
        
        return jsonify({'prediction': f'{prediction:.2f}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Disease prediction routes
@app.route('/diabetes')
def diabetes():
    return render_template('diabetes.html')

@app.route('/heart')
def heart():
    return render_template('heart.html')

@app.route('/lung')
def lung():
    return render_template('lung.html')

@app.route('/stroke')
def stroke():
    return render_template('stroke.html')

@app.route('/predict/diabetes', methods=['POST'])
def predict_diabetes():
    try:
        # Import disease prediction logic
        import sys
        import os
        sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main'))
        
        # Load models
        import pickle
        import numpy as np
        
        # Load diabetes model
        model_path = os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main', 'diabetes_model.pkl')
        with open(model_path, 'rb') as f:
            diabetes_model = pickle.load(f)
        
        # Get form data
        pregnancies = int(request.form['pregnancies'])
        glucose = int(request.form['glucose'])
        blood_pressure = int(request.form['blood_pressure'])
        skin_thickness = int(request.form['skin_thickness'])
        insulin = int(request.form['insulin'])
        bmi = float(request.form['bmi'])
        diabetes_pedigree = float(request.form['diabetes_pedigree'])
        age = int(request.form['age'])
        
        # Make prediction
        input_data = np.array([[pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree, age]])
        prediction = diabetes_model.predict(input_data)[0]
        
        result = "Diabetic" if prediction == 1 else "Non-Diabetic"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict/heart', methods=['POST'])
def predict_heart():
    try:
        # Import disease prediction logic
        import sys
        import os
        sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main'))
        
        # Load models
        import pickle
        import numpy as np
        
        # Load heart model
        model_path = os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main', 'heart_disease_model (1).pkl')
        with open(model_path, 'rb') as f:
            heart_model = pickle.load(f)
        
        # Get form data
        age = int(request.form['age'])
        sex = int(request.form['sex'])
        cp = int(request.form['cp'])
        trestbps = int(request.form['trestbps'])
        chol = int(request.form['chol'])
        fbs = int(request.form['fbs'])
        restecg = int(request.form['restecg'])
        thalach = int(request.form['thalach'])
        exang = int(request.form['exang'])
        oldpeak = float(request.form['oldpeak'])
        slope = int(request.form['slope'])
        ca = int(request.form['ca'])
        thal = int(request.form['thal'])
        
        # Make prediction
        input_data = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
        prediction = heart_model.predict(input_data)[0]
        
        result = "Heart Disease" if prediction == 1 else "No Heart Disease"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict/lung', methods=['POST'])
def predict_lung():
    try:
        # Import disease prediction logic
        import sys
        import os
        sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main'))
        
        # Load models
        import pickle
        import numpy as np
        
        # Load lung model
        model_path = os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main', 'lung_cancer_model.pkl')
        with open(model_path, 'rb') as f:
            lung_model = pickle.load(f)
        
        # Get form data
        age = int(request.form['age'])
        gender = int(request.form['gender'])
        air_pollution = int(request.form['air_pollution'])
        alcohol_use = int(request.form['alcohol_use'])
        dust_allergy = int(request.form['dust_allergy'])
        occupational_hazards = int(request.form['occupational_hazards'])
        genetic_risk = int(request.form['genetic_risk'])
        chronic_lung_disease = int(request.form['chronic_lung_disease'])
        balanced_diet = int(request.form['balanced_diet'])
        obesity = int(request.form['obesity'])
        smoking = int(request.form['smoking'])
        passive_smoking = int(request.form['passive_smoking'])
        chest_pain = int(request.form['chest_pain'])
        coughing_of_blood = int(request.form['coughing_of_blood'])
        fatigue = int(request.form['fatigue'])
        weight_loss = int(request.form['weight_loss'])
        shortness_of_breath = int(request.form['shortness_of_breath'])
        wheezing = int(request.form['wheezing'])
        swallowing_difficulty = int(request.form['swallowing_difficulty'])
        clubbing_of_finger_nails = int(request.form['clubbing_of_finger_nails'])
        frequent_cold = int(request.form['frequent_cold'])
        dry_cough = int(request.form['dry_cough'])
        snoring = int(request.form['snoring'])
        
        # Make prediction
        input_data = np.array([[age, gender, air_pollution, alcohol_use, dust_allergy, occupational_hazards, genetic_risk, chronic_lung_disease, balanced_diet, obesity, smoking, passive_smoking, chest_pain, coughing_of_blood, fatigue, weight_loss, shortness_of_breath, wheezing, swallowing_difficulty, clubbing_of_finger_nails, frequent_cold, dry_cough, snoring]])
        prediction = lung_model.predict(input_data)[0]
        
        result = "Lung Cancer" if prediction == 1 else "No Lung Cancer"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict/stroke', methods=['POST'])
def predict_stroke():
    try:
        # Import disease prediction logic
        import sys
        import os
        sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main'))
        
        # Load models
        import pickle
        import numpy as np
        
        # Load stroke model
        model_path = os.path.join(os.path.dirname(__file__), '..', 'disease-prediction-final-main', 'stroke_model.pkl')
        with open(model_path, 'rb') as f:
            stroke_model = pickle.load(f)
        
        # Get form data
        gender = int(request.form['gender'])
        age = int(request.form['age'])
        hypertension = int(request.form['hypertension'])
        heart_disease = int(request.form['heart_disease'])
        ever_married = int(request.form['ever_married'])
        work_type = int(request.form['work_type'])
        residence_type = int(request.form['residence_type'])
        avg_glucose_level = float(request.form['avg_glucose_level'])
        bmi = float(request.form['bmi'])
        smoking_status = int(request.form['smoking_status'])
        
        # Make prediction
        input_data = np.array([[gender, age, hypertension, heart_disease, ever_married, work_type, residence_type, avg_glucose_level, bmi, smoking_status]])
        prediction = stroke_model.predict(input_data)[0]
        
        result = "Stroke Risk" if prediction == 1 else "No Stroke Risk"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
