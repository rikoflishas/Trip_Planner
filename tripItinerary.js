// tripItinerary.js
export class TripItinerary {
    constructor() {
        this.schedule = {};  // Object to store daily activities
    }

    addDay(day, destination){
        if (!Array.isArray(destination)) {
            destination = [destination];
        }

        this.schedule[day] = destination;
    }

    // Show the complete itinerary
    showItinerary = () => {
        let itinerary = "Your Trip Itinerary:\n";
        console.log("-------------------- hasta aquí llegamos ---------------------")
        for (const day in this.schedule) {
            itinerary += ` \nDia ${day}: \n`;
            this.schedule[day].forEach((destination, index) => {
                itinerary += ` ${index + 1}. ${destination}\n`
            });
        }
        return itinerary;
        console.log(`------------------- END ------------------`);
    }
}