const positionLat = 15;
const positionLong = 29;
const addressLat = 38;
const addressLong = 22;
const distance = Math.sqrt(Math.pow(positionLat - positionLong, 2) + Math.pow(addressLat - addressLong, 2));
console.log('дистанция = ', distance, 'км');
