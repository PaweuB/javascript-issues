let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
}

// ad 1 
greenEnergy(spaceship);
  
// ad 2
remotelyDisable(spaceship);

// ad 3
console.log(spaceship);