const exerciseDatabase = {
    beginner: {
        'weight-loss': {
            cardio: [
                { name: 'Walking', duration: '20-30 min', calories: 150, description: 'Brisk walking at moderate pace' },
                { name: 'Stationary Bike', duration: '15-20 min', calories: 120, description: 'Moderate intensity cycling' },
                { name: 'Swimming', duration: '20-25 min', calories: 200, description: 'Easy swimming laps' }
            ],
            strength: [
                { name: 'Bodyweight Squats', sets: '3', reps: '10-15', calories: 50, description: 'Basic bodyweight squats' },
                { name: 'Push-ups (modified)', sets: '3', reps: '8-12', calories: 40, description: 'Wall or knee push-ups' },
                { name: 'Plank', sets: '3', reps: '15-30 sec', calories: 30, description: 'Hold plank position' }
            ]
        },
        'muscle-gain': {
            strength: [
                { name: 'Bodyweight Squats', sets: '3', reps: '12-15', calories: 60, description: 'Focus on form and control' },
                { name: 'Push-ups', sets: '3', reps: '8-12', calories: 50, description: 'Standard or modified push-ups' },
                { name: 'Lunges', sets: '3', reps: '10 each leg', calories: 55, description: 'Alternating forward lunges' },
                { name: 'Dumbbell Rows', sets: '3', reps: '10-12', calories: 45, description: 'Light weight rows' }
            ],
            cardio: [
                { name: 'Light Walking', duration: '15-20 min', calories: 100, description: 'Recovery cardio' }
            ]
        },
        'general': {
            cardio: [
                { name: 'Walking', duration: '25-30 min', calories: 150, description: 'Moderate pace walking' },
                { name: 'Light Jogging', duration: '15-20 min', calories: 160, description: 'Easy jogging intervals' }
            ],
            strength: [
                { name: 'Bodyweight Squats', sets: '3', reps: '12-15', calories: 50, description: 'Basic strength building' },
                { name: 'Push-ups', sets: '3', reps: '8-12', calories: 45, description: 'Upper body strength' },
                { name: 'Plank', sets: '3', reps: '20-40 sec', calories: 35, description: 'Core stability' }
            ]
        }
    },
    intermediate: {
        'weight-loss': {
            cardio: [
                { name: 'Running', duration: '25-35 min', calories: 300, description: 'Steady state running' },
                { name: 'HIIT Training', duration: '20-25 min', calories: 250, description: 'High intensity intervals' },
                { name: 'Cycling', duration: '30-40 min', calories: 280, description: 'Moderate to high intensity' }
            ],
            strength: [
                { name: 'Goblet Squats', sets: '4', reps: '12-15', calories: 70, description: 'Weighted squats' },
                { name: 'Push-ups', sets: '4', reps: '15-20', calories: 60, description: 'Standard push-ups' },
                { name: 'Dumbbell Deadlifts', sets: '4', reps: '10-12', calories: 80, description: 'Hip hinge movement' }
            ]
        },
        'muscle-gain': {
            strength: [
                { name: 'Barbell Squats', sets: '4', reps: '8-12', calories: 100, description: 'Compound leg exercise' },
                { name: 'Bench Press', sets: '4', reps: '8-10', calories: 90, description: 'Chest development' },
                { name: 'Bent Over Rows', sets: '4', reps: '8-10', calories: 85, description: 'Back development' },
                { name: 'Overhead Press', sets: '4', reps: '8-10', calories: 80, description: 'Shoulder development' }
            ],
            cardio: [
                { name: 'Moderate Cycling', duration: '20 min', calories: 200, description: 'Active recovery' }
            ]
        }
    },
    advanced: {
        'weight-loss': {
            cardio: [
                { name: 'HIIT Sprints', duration: '20-30 min', calories: 400, description: 'High intensity sprint intervals' },
                { name: 'Running', duration: '40-50 min', calories: 450, description: 'Long distance running' },
                { name: 'Circuit Training', duration: '30-40 min', calories: 500, description: 'Full body circuits' }
            ],
            strength: [
                { name: 'Barbell Complexes', sets: '5', reps: '6-8', calories: 150, description: 'High intensity complexes' },
                { name: 'Kettlebell Swings', sets: '4', reps: '20-25', calories: 120, description: 'Explosive hip hinge' },
                { name: 'Plyometric Push-ups', sets: '4', reps: '10-12', calories: 100, description: 'Power development' }
            ]
        },
        'muscle-gain': {
            strength: [
                { name: 'Back Squats', sets: '5', reps: '5-8', calories: 150, description: 'Heavy compound lift' },
                { name: 'Deadlifts', sets: '5', reps: '3-5', calories: 200, description: 'Full body strength' },
                { name: 'Weighted Pull-ups', sets: '4', reps: '6-8', calories: 120, description: 'Advanced back exercise' },
                { name: 'Incline Bench Press', sets: '4', reps: '6-8', calories: 130, description: 'Upper chest focus' }
            ],
            cardio: [
                { name: 'Sled Pushes', duration: '15 min', calories: 250, description: 'Power and conditioning' }
            ]
        }
    }
};

function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
}

function calculateTDEE(bmr, activityLevel) {
    const activityMultipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725,
        'very-active': 1.9
    };
    return Math.round(bmr * activityMultipliers[activityLevel]);
}

function generatePlan() {
    // Get form values
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activityLevel').value;
    const goal = document.getElementById('goal').value;
    const experience = document.getElementById('experience').value;
    const daysPerWeek = parseInt(document.getElementById('daysPerWeek').value);
    const timePerSession = parseInt(document.getElementById('timePerSession').value);

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(daysPerWeek) || isNaN(timePerSession) ||
        !gender || !activityLevel || !goal || !experience) {
        alert('Please fill in all fields with valid values');
        return;
    }

    // Calculate BMR and TDEE
    const bmr = calculateBMR(weight, height, age, gender);
    const tdee = calculateTDEE(bmr, activityLevel);
    
    // Adjust calories based on goal
    let targetCalories;
    if (goal === 'weight-loss') {
        targetCalories = Math.round(tdee * 0.85); // 15% deficit
    } else if (goal === 'muscle-gain') {
        targetCalories = Math.round(tdee * 1.1); // 10% surplus
    } else {
        targetCalories = tdee; // Maintenance
    }

    // Generate workout plan
    const workoutPlan = createWorkoutPlan(goal, experience, daysPerWeek, timePerSession);
    
    // Display results
    displayResults(targetCalories, workoutPlan, goal, experience);
}

function createWorkoutPlan(goal, experience, days, timePerSession) {
    const plan = [];
    const availableWorkouts = exerciseDatabase[experience]?.[goal] || 
                            exerciseDatabase[experience]?.['general'] || 
                            exerciseDatabase['beginner']?.['general'];
    
    if (!availableWorkouts) {
        console.error('No workout plan available for the selected options');
        return [];
    }

    // Create workout days based on available days and time per session
    const workoutTypes = Object.keys(availableWorkouts);
    
    for (let i = 0; i < days; i++) {
        const workoutType = workoutTypes[i % workoutTypes.length];
        const exercises = availableWorkouts[workoutType] || [];
        
        // Adjust number of exercises based on time per session
        let numExercises = Math.min(Math.ceil(timePerSession / 15), 6); // Max 6 exercises
        numExercises = Math.min(numExercises, exercises.length);
        
        const selectedExercises = [];
        const usedIndices = new Set();
        
        // Randomly select exercises without repetition
        while (selectedExercises.length < numExercises && selectedExercises.length < exercises.length) {
            const randomIndex = Math.floor(Math.random() * exercises.length);
            if (!usedIndices.has(randomIndex)) {
                selectedExercises.push(exercises[randomIndex]);
                usedIndices.add(randomIndex);
            }
        }
        
        plan.push({
            day: i + 1,
            type: workoutType.charAt(0).toUpperCase() + workoutType.slice(1),
            exercises: selectedExercises
        });
    }
    
    return plan;
}

function displayResults(targetCalories, workoutPlan, goal, experience) {
    // Update calorie info
    const calorieInfo = document.getElementById('calorieInfo');
    calorieInfo.innerHTML = `
        <h3>Your Daily Calorie Target: ${targetCalories} kcal</h3>
        <p>Based on your inputs and ${goal.replace('-', ' ')} goals</p>
    `;
    
    // Update workout plan
    const workoutPlanElement = document.getElementById('workoutPlan');
    workoutPlanElement.innerHTML = '<h3>Your Weekly Workout Plan</h3>';
    
    workoutPlan.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'workout-day';
        dayElement.innerHTML = `
            <h4>Day ${day.day}: ${day.type} Workout</h4>
            <div class="exercises"></div>
        `;
        
        const exercisesContainer = dayElement.querySelector('.exercises');
        
        day.exercises.forEach(exercise => {
            const exerciseElement = document.createElement('div');
            exerciseElement.className = 'exercise';
            exerciseElement.innerHTML = `
                <div class="exercise-info">
                    <h5>${exercise.name}</h5>
                    <p>${exercise.description}</p>
                </div>
                <div class="exercise-stats">
                    ${exercise.sets ? `${exercise.sets} sets` : ''}
                    ${exercise.reps ? `× ${exercise.reps}` : ''}
                    ${exercise.duration ? `• ${exercise.duration}` : ''}
                </div>
            `;
            exercisesContainer.appendChild(exerciseElement);
        });
        
        workoutPlanElement.appendChild(dayElement);
    });
    
    // Update tips
    const tipsList = document.getElementById('tipsList');
    const tips = getTips(goal, experience);
    tipsList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function getTips(goal, experience) {
    const tips = [];
    
    // General tips for all goals
    tips.push('Stay consistent with your workout schedule');
    tips.push('Drink at least 8 glasses of water daily');
    tips.push('Get 7-9 hours of quality sleep each night');
    
    // Goal-specific tips
    if (goal === 'weight-loss') {
        tips.push('Focus on whole, unprocessed foods');
        tips.push('Incorporate high-intensity interval training (HIIT)');
        tips.push('Track your food intake to ensure a calorie deficit');
    } else if (goal === 'muscle-gain') {
        tips.push('Consume 1.6-2.2g of protein per kg of body weight');
        tips.push('Progressively increase weights over time');
        tips.push('Allow 48 hours of recovery for each muscle group');
    } else if (goal === 'endurance') {
        tips.push('Gradually increase your workout duration');
        tips.push('Incorporate interval training');
        tips.push('Focus on proper breathing techniques');
    } else if (goal === 'strength') {
        tips.push('Focus on compound movements');
        tips.push('Maintain proper form over lifting heavy');
        tips.push('Allow adequate rest between sets (2-5 minutes)');
    }
    
    // Experience-specific tips
    if (experience === 'beginner') {
        tips.unshift('Start with lighter weights to focus on form');
        tips.unshift('Allow at least one rest day between workouts');
    } else if (experience === 'intermediate') {
        tips.unshift('Consider periodizing your training');
        tips.unshift('Incorporate deload weeks every 4-6 weeks');
    } else if (experience === 'advanced') {
        tips.unshift('Focus on weak points and imbalances');
        tips.unshift('Consider working with a coach for advanced programming');
    }
    
    return tips.slice(0, 5); // Return top 5 most relevant tips
}

// Make the generatePlan function available globally
window.generatePlan = generatePlan;
