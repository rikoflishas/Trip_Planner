
// tripDestination.js
class TripDestination {
    constructor() {
        this.destinations = [];  // Array to store all registered destinations
    }

    // Function to add a new destination
    registerDestination(city, transport) {
        const destination = {
            city: city,
            dateAdded: new Date(),
            transport: transport,
            price: TripCalculator.calculateTripCost(city, transport)
        };
        
        this.destinations.push(destination);
        return `${city} has been registered as a destination!`;
    }

    // Function to get all registered destinations
    getAllDestinations() {
        return this.destinations;
    }
}