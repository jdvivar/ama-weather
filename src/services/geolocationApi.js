
/*
* Tell whether geolocation API is available (public)
* @return {Boolean}
*/
export function isGeolocationAvailable () {
  return !!navigator.geolocation
}

/**
 * Ask the browser for the current geolocation (public)
 * @async
 * @return {Promise}
 */
export async function getCurrentPosition () {
  return new Promise((resolve, reject) => {
    // The only purpose of this delay is to show off an animation
    // There's no reason in a production-ready code to delay this operation
    window.setTimeout(
      () => navigator.geolocation.getCurrentPosition(resolve, reject),
      1000
    )
  })
}
