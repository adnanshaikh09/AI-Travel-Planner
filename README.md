
---

# AI Travel Planner

Welcome to the **AI Travel Planner** app! This app leverages advanced **Generative AI (Gemini)** and **Firebase** to help you plan your trips effortlessly. Whether you're looking for personalized itineraries, recommendations for activities, or secure data management, we've got you covered.

## Features

- **Personalized Itineraries**: Get customized travel plans tailored to your preferences with the help of Gemini AI.
- **Secure Data Storage**: Manage and store your travel preferences and saved itineraries using Firebase Firestore.
- **User Authentication**: Sign in securely with Firebase Authentication to access your personalized data.
- **Real-time Location Data**: Access detailed travel-related information through Google Places API integration.

## Use Case

### Primary Functionality

- Enter your travel preferences (destination, dates, budget, interests) to receive a personalized itinerary.
- Discover suggestions for activities, accommodations, and travel options based on your input.
- Save and retrieve your travel plans seamlessly using Firebase.

## Components

- **Input Forms**: Collect user preferences including destination, travel dates, budget, and interests.
- **AI Recommendations**: Generate tailored itineraries with Gemini AI based on the provided preferences.
- **Display Components**: View detailed itineraries, suggested activities, and travel options.
- **Data Storage**: Use Firebase Firestore to store user data and saved itineraries.
- **Authentication**: Securely sign in with Firebase Authentication.

## Screens

1. **Welcome Screen**: Introduction to the app with options to sign in or sign up.
2. **Home Screen**: View your saved trips and start planning new ones.
3. **Preferences Screen**: Enter your travel preferences to generate a personalized itinerary.
4. **Itinerary Screen**: Display the AI-generated travel itinerary.
5. **Details Screen**: Get detailed views of selected travel options with booking links.

## APIs Used

- **Gemini AI API**: Generates custom itineraries based on user preferences.
- **Firebase Authentication**: Manages secure user sign-in and sign-up.
- **Firebase Firestore**: Stores and manages user preferences and itineraries.
- **Google Places API**: Provides detailed information about travel destinations.

## Risks and Challenges

- **Learning Curve**: Adapting to Gemini AI may involve a learning curve.
- **API Integration**: Integrating multiple third-party APIs can be complex.
- **Scalability**: Ensuring efficient data management as the app scales.
- **Timeline Constraints**: Prioritizing core features to meet project deadlines.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the App**

   ```bash
   npx expo start
   ```

We hope you enjoy planning your next trip with the AI Travel Planner app. Happy travels!

---