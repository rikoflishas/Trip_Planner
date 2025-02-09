// tripItinerary.js
class TripItinerary {
    constructor() {
        this.schedule = {};  // Object to store daily activities
    }

    // Show the complete itinerary
    showItinerary() {
        let itinerary = "Your Trip Itinerary:\n";
        for (let i = 0; i < destination.length; i++) {
            let trip = destination[i];
            console.log(`Destino: ${trip.destination}`);
            console.log(`Fecha; ${trip.date}`);
            console.log(`Transporte: ${trip.transport}`);
            console.log(`Costo: $${trip.price}`);
            console.log(`-------------------------------------`);
            
        }
        return itinerary;
    }
}