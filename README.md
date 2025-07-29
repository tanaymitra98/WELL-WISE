# WellWise - Integrated Health & Fitness Platform

A comprehensive web application that integrates multiple health and fitness tools into a single platform.

## Features

### 🏠 Landing Page
- Modern, responsive design with glass morphism effects
- Interactive cards for each integrated application
- Smooth animations and transitions

### 💉 PulseGuard - Disease Prediction
- **Diabetes Prediction**: Assess diabetes risk based on glucose levels, BMI, age, and other factors
- **Heart Disease Prediction**: Evaluate cardiovascular risk using chest pain, cholesterol, and blood pressure data
- **Lung Cancer Prediction**: Analyze respiratory health and lung cancer risk factors
- **Stroke Prediction**: Assess cerebrovascular risk and stroke prevention

### 🔥 Calories Burnt Prediction
- Predict calories burned during exercise
- Input parameters: gender, age, height, weight, duration, heart rate, body temperature
- Uses machine learning model for accurate predictions

### 🏃‍♂️ Fitness Plan Generator
- Personalized workout plans based on individual goals
- Customizable parameters: fitness level, goals, frequency, duration
- Comprehensive exercise and nutrition recommendations
- Downloadable fitness plans

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd model_god
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Access the application**
   - Open your browser and go to `http://localhost:5000`
   - The landing page will display all available tools

## Project Structure

```
model_god/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── static/
│   ├── styles.css        # Landing page styles
│   └── page-styles.css   # Integrated app styles
├── templates/
│   ├── index.html        # Landing page
│   ├── pulseguard.html   # Disease prediction hub
│   ├── diabetes.html     # Diabetes prediction form
│   ├── heart.html        # Heart disease prediction form
│   ├── lung.html         # Lung cancer prediction form
│   ├── stroke.html       # Stroke prediction form
│   ├── calories_burnt.html # Calories prediction form
│   └── fitness_plan.html # Fitness plan generator
└── uploads/              # File upload directory
```

## API Endpoints

### Disease Prediction
- `GET /pulseguard` - Disease prediction hub
- `GET /diabetes` - Diabetes prediction form
- `GET /heart` - Heart disease prediction form
- `GET /lung` - Lung cancer prediction form
- `GET /stroke` - Stroke prediction form
- `POST /predict/diabetes` - Diabetes prediction API
- `POST /predict/heart` - Heart disease prediction API
- `POST /predict/lung` - Lung cancer prediction API
- `POST /predict/stroke` - Stroke prediction API

### Calories Prediction
- `GET /calories-burnt` - Calories prediction form
- `POST /predict_calories` - Calories prediction API

### Fitness Plan
- `GET /fitness-plan` - Fitness plan generator

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Machine Learning**: scikit-learn, numpy, pandas
- **Styling**: Glass morphism, gradient backgrounds, animations
- **Icons**: Font Awesome

## Machine Learning Models

The application uses pre-trained machine learning models for predictions:

- **Diabetes Model**: Trained on Pima Indians Diabetes Database
- **Heart Disease Model**: Trained on Heart Disease UCI dataset
- **Lung Cancer Model**: Trained on lung cancer prediction dataset
- **Stroke Model**: Trained on stroke prediction dataset
- **Calories Model**: Trained on exercise calories dataset

## Features

### Responsive Design
- Works seamlessly on desktop, tablet, and mobile devices
- Adaptive layouts and touch-friendly interfaces

### User Experience
- Intuitive navigation with back buttons
- Real-time form validation
- Loading states and error handling
- Smooth animations and transitions

### Security
- Input validation and sanitization
- Error handling for malformed requests
- Secure file handling

## Usage

1. **Start with the Landing Page**
   - Visit the main page to see all available tools
   - Click on any card to access the specific application

2. **Disease Prediction**
   - Navigate to PulseGuard
   - Choose the specific disease you want to predict
   - Fill in the required health parameters
   - Get instant predictions with detailed explanations

3. **Calories Prediction**
   - Enter your exercise parameters
   - Get accurate calorie burn predictions
   - View results with confidence levels

4. **Fitness Plan Generation**
   - Input your personal information and goals
   - Generate customized workout plans
   - Download your personalized fitness plan

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

⚠️ **Important**: All predictions and recommendations provided by this application are for educational and informational purposes only. They should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical decisions.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Developed by Quad.Coders** 🚀 # WELL-WISE
