const daysId = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const temperatures = ["22 °C","14 °C","17 °C","27 °C","30 °C","26 °C","19 °C"]

const kelvins = ["295.15 K", "287.15 K", "290.15 K", "300.15 K", "303.15 K", "299.15 K", "292.15 K"]

const windDirections = ["north-east", "north-west", "south-east", "south-west", "east", "south", "north"]

const windSpeeds = ["10 m/s", "14 m/s", "20 m/s", "23 m/s", "15 m/s", "19 m/s", "27 m/s"]

const windSpeeds_kmh = ["36 km/h", "50.4 km/h", "72 km/h", "82.8 km/h", "54 km/h", "68.4 km/h", "97.2 km/h"]

const types = ["sunny", "rainy", "cloudy", "cloudy", "foggy", "sunny", "rainy"]

for (let i = 0; i< daysId.length; i++) {
    
    document.getElementById(daysId[i]).addEventListener("click", function(){

            document.getElementById("day").textContent = days[i]
            document.getElementById("temp").textContent = temperatures[i]
            document.getElementById("windDir").textContent = windDirections[i]
            document.getElementById("windSpeed").textContent = windSpeeds[i]
            document.getElementById("type").textContent = types[i]

            document.getElementById("bg").className = ""
            document.getElementById("bg").classList.add(types[i])

            document.getElementById("pointer").className = ""
            document.getElementById("pointer").classList.add(windDirections[i])  
            
            document.getElementById("kelvin").addEventListener("click", function() {
                document.getElementById("temp").textContent = kelvins[i]
            })
            document.getElementById("kelvin").addEventListener("dblclick", function() {
                document.getElementById("temp").textContent = temperatures[i]
            })

            document.getElementById("kmh").addEventListener("click", function() {
                document.getElementById("windSpeed").textContent = windSpeeds_kmh[i]
            })
            document.getElementById("kmh").addEventListener("dblclick", function() {
                document.getElementById("windSpeed").textContent = windSpeeds[i]
            })
    })
}







