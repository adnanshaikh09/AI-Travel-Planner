# AI Travel Planner

## Project Overview
The **AI Travel Planner** app helps users seamlessly plan their trips by utilizing advanced **Generative AI (Gemini)** and **Firebase** for data management and authentication. It provides personalized travel itineraries, including recommendations for flights, accommodations, activities, and dining options based on user preferences.

## Features
- **Personalized Itineraries**: Customized travel plans generated using Gemini AI.
- **Secure Data Storage**: Firebase Firestore to store and manage user preferences and saved itineraries.
- **User Authentication**: Secure sign-in and access to personalized data using Firebase Authentication.
- **Real-time Location Data**: Google Places API integration for fetching travel-related details.

## Use Case
### Primary Functionality
- Users input their travel preferences (destination, dates, budget, interests) and receive personalized travel itineraries.
- The app provides suggestions for activities, accommodations, and travel options.
- Users can save and retrieve their travel plans using Firebase.

## Components
- **Input Forms**: Collects user preferences (destination, travel dates, budget, interests).
- **AI Recommendations**: Gemini AI generates personalized itineraries based on input.
- **Display Components**: Showcases itinerary details, suggested activities, and travel options.
- **Data Storage**: Firebase Firestore stores user data and saved itineraries.
- **Authentication**: Secure sign-in using Firebase Authentication.

## Screens
1. **Welcome Screen**: Introduction to the app with options to sign in or sign up.
2. **Home Screen**: Overview of the user's saved trips and options to start planning a new trip.
3. **Preferences Screen**: Form for entering travel preferences.
4. **Itinerary Screen**: Displays the AI-generated travel itinerary.
5. **Details Screen**: Detailed view of selected travel options with links to booking platforms.

## APIs Used
- **Gemini AI API**: Generates custom itineraries based on user preferences.
- **Firebase Authentication**: Manages user sign-in and sign-up securely.
- **Firebase Firestore**: Stores user preferences and saved itineraries.
- **Google Places API**: Fetches detailed information about travel destinations.

## Risks and Challenges
- **Learning Curve**: Implementing Gemini AI may require learning new concepts.
- **API Integration**: Complex integration of multiple third-party APIs.
- **Scalability**: Ensuring efficient data management as the app grows.
- **Timeline Constraints**: Prioritization of core features to meet project deadlines.


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start