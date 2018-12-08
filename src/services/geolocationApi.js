
/*
* Public function to tell whether geolocation API is available
*/
export function isGeolocationAvailable () {
  return !!navigator.geolocation
}

/*
* Public asynchronous function to ask the browser for the current geolocation
*/
export async function getCurrentPosition () {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => navigator.geolocation.getCurrentPosition(resolve, reject), 30000)
  })
}
