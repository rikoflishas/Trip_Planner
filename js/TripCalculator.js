// tripCalculator.js
class TripCalculator {
    constructor() {
        // Base prices for different expense categories
        this.price = 100;  // Basic daily cost
        this.transportationCost = 100;  // Base flight cost
    }

    // Calculate total trip cost
    calculateTripCost(city, transport) {
        //Price based on city of destination
        if(city === "Paris"){
            this.price = 150;
        }   else if(city === "London"){
            this.price = 200;
        }   else if(city === "New York"){
            this.price = 250;
        }

        //Price based on mode of transportation
        if(transport === "Plane"){
            this.price += 200;
        }else if(transport === "Train"){
            this.price += 100;
        }
        return this.price;
    }
}