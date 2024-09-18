import { View, Text } from 'react-native';
import React from 'react';
import PlaceCard from './PlaceCard';

export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>🏕️ Plan Details</Text>

      {Object.entries(details).reverse().map(([day, dayDetails], dayIndex) => (
        <View key={dayIndex}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, marginTop: 20 }}>
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>
          {dayDetails.plan.map((place, index) => (
            <PlaceCard key={`${dayIndex}-${index}`} place={place} />
          ))}
        </View>
      ))}
    </View>
  );
}
