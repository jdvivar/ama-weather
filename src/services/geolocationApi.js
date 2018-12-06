
/*
* Public function to tell whether geolocation API is available
*/
export function isGeolocationAvailable() {
  return !!navigator.geolocation
}

/*
* Public asynchronous function to ask the browser for the current geolocation
*/
export async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
