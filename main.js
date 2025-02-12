import {TripDestination} from './tripDestination.js';
import {TripItinerary} from './tripItinerary.js';
import {TripCalculator} from './tripCalculator.js';
// main.js - Example of how to use all the classes together
// Create instances of each class
const calculator = new TripCalculator();
const itinerary = new TripItinerary();
const destination = new TripDestination();

// Example usage:
// 1. Register a destination
destination.registerDestination(
    "Paris", //city
    "Plane", //mode of transportation
);

// 2. Calculate trip cost
const tripCost = calculator.calculateTripCost(
    "Paris",  // city
    "Plane",  // mode of transportation 
);

// 3. Create an itinerary
// itinerary.addDayPlan(1, ["Morning: Eiffel Tower", "Afternoon: Lunch in Montmartre", "Evening: River Seine Cruise"]);
// itinerary.addDayPlan(2, ["Morning: Louvre Museum", "Afternoon: Notre-Dame", "Evening: French Restaurant"]);

itinerary.addDay("Paris");

// 4. Show results
console.log("Destinations:", destination.getAllDestinations());
console.log("Total Trip Cost: $", tripCost);
console.log(itinerary.showItinerary(destination));