// #####################################################
// ##########      Convert Text (Temp)     #############
// #####################################################
export function convertTemp(temperature: string) {
  // const days = [dayCur, day1, day2, day3];

  if (temperature.slice(-1) === `C`) {
    // #####################################
    // ##      Convert Text (°C - °F)     ##
    // #####################################
    let cel = parseFloat(temperature.slice(0, -3));
    return isNaN(cel) ? `  ? °F` : `${Math.round((cel * 9) / 5 + 32)} °F`;
  } else {
    // #####################################
    // ##      Convert Text (°F - °C)     ##
    // #####################################
    let fer = parseFloat(temperature.slice(0, -3));
    if (isNaN(fer)) {
      return `  ? °C`;
    } else {
      let temp = Math.round(((fer - 32) * 5) / 9);
      return temp < 0 ? `${temp} °C` : `+${temp} °C`;
    }
  }
}
// #####################################
// ##    Convert Text (km/h - mph)    ##
// #####################################

export function convertWind(wind: string) {
  if (wind.slice(-3) === `mph`) {
    console.log(wind);
    let mph = parseFloat(wind.slice(0, -4));
    return isNaN(mph) ? `  ? km/h` : `${Math.round(mph / 0.621371)} km/h`;
  } else {
    // #####################################
    // ##    Convert Text (mph - km/h)    ##
    // #####################################
    let kmh = parseFloat(wind.slice(0, -5));
    return isNaN(kmh) ? `  ? mph` : `${Math.round(kmh * 0.621371)} mph`;
  }
}
