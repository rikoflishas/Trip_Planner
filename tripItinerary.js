// tripItinerary.js
export class TripItinerary {
    constructor() {
        this.schedule = {};  // Object to store daily activities
    }

    addDay(destination){
        this.schedule = destination;
    }

    // Show the complete itinerary
    showItinerary = (schedule) => {
        let itinerary = "Your Trip Itinerary:\n" + schedule;
        console.log("-------------------- hasta aquí llegamos ---------------------")
        for (const i in this.schedule) {
            console.log(`Trip --> ${schedule}`);
            // console.log(`Destino: ${trip.destination}`);
            // console.log(`Fecha: ${trip.date}`);
            // console.log(`Transporte: ${trip.transport}`);
            // console.log(`Costo: $${trip.price}`);
            console.log(`------------------- END ------------------`);
            
        }
        return itinerary;
    }
}