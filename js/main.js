// main.js - Example of how to use all the classes together
// Create instances of each class
const destination = new TripDestination();
const calculator = new TripCalculator();
const itinerary = new TripItinerary();

// Example usage:
// 1. Register a destination
destination.registerDestination(
    "Paris", 
    "France", 
);

// 2. Calculate trip cost
const tripCost = calculator.calculateTripCost(
    "Paris",  // city
    "Plane",  // mode of transportation
);

// 3. Create an itinerary
// itinerary.addDayPlan(1, ["Morning: Eiffel Tower", "Afternoon: Lunch in Montmartre", "Evening: River Seine Cruise"]);
// itinerary.addDayPlan(2, ["Morning: Louvre Museum", "Afternoon: Notre-Dame", "Evening: French Restaurant"]);

// 4. Show results
console.log("Destinations:", destination.getAllDestinations());
console.log("Total Trip Cost: $", tripCost);
console.log(itinerary.showItinerary());