window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Start a loop that goes through all the data
  let firstName
  for (let i=0; i<json.length;i++) {
    // Temporaririly store all the necessary data from the entry
    let firstName = json[i].passengerDetails.first
    let lastName = json[i].passengerDetails.last
    let phoneNumber = json[i].passengerDetails.phoneNumber
    let passengerDetails = json[i].passengerDetails
    let dropoffLocation = json[i].dropoffLocation
    let pickupLocation = json[i].pickupLocation
    let purpleRequested = json[i].purpleRequested
    let numberOfPassengers = json[i].numberOfPassengers
    //console.log(json[i].passengerDetails.first) test to check if loop working
    
    // Use conditional to determine level of service & save as variable
    let status
    let borderColour
      if (purpleRequested == true) {
      status = `Noober Purple`
      borderColour = `purple`
      borderSize = 4
      } else if (numberOfPassengers > 3) {
      status = `Noober XL`
      borderColour = `gray`
      borderSize = 8
      } else {
      status = `Noober X`
      borderColour = `gray`
      borderSize = 4
    }
    console.log(status)

    let htmlElement = document.querySelector(`.rides`)
    htmlElement.insertAdjacentHTML(`beforeend`,
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${status}</span>
  </h1>

  <div class="border-${borderSize} border-${borderColour}-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerDetails.first} ${passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${pickupLocation.address}</p>
        <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${dropoffLocation.address}</p>
        <p>${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}</p>
      </div>
    </div>
  </div>`)
  }

  
  

  

  // Insert the data into the HTML mockup

  // Eventually tweak HTML mockup and modify based on 
})