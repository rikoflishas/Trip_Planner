// tripItinerary.js
export class TripItinerary {
    constructor() {
        this.schedule = {};  // Object to store daily activities
    }

    addDay(destination){
        this.schedule = destination;
    }

    // Show the complete itinerary
    showItinerary = (destination) => {
        let itinerary = "Your Trip Itinerary:\n";
        for (let i = 0; i < destination.length; i++) {
            let trip = destination[i];
            // console.log(`Destino: ${trip.destination}`);
            // console.log(`Fecha: ${trip.date}`);
            // console.log(`Transporte: ${trip.transport}`);
            // console.log(`Costo: $${trip.price}`);
            console.log(`-------------------------------------`);
            
        }
        return itinerary;
    }
}