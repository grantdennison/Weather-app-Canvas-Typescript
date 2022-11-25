import { convertTemp, convertWind } from "../utils/textConvert";

// ######################################################
// ##      Convert Text - Test (°C - °F & °F - °C)     ##
// ######################################################

let cel = [`+10 °C`, `-10 °C`, `+0 °C`, `  ? °C`];
let far = [`50 °F`, `14 °F`, `32 °F`, `  ? °F`];

describe(`Temperature conversion`, () => {
  for (let i = 0; i < cel.length; i++) {
    test(`Converts °C to °F`, () => {
      expect(convertTemp(cel[i])).toBe(far[i]);
    });
    test(`Converts °F to °C`, () => {
      expect(convertTemp(far[i])).toBe(cel[i]);
    });
  }
});

// #########################################################
// ##    Convert Text - Test (mph - km/h & km/h - mph)    ##
// #########################################################

let mph = [`20 mph`, `5 mph`, `0 mph`, `  ? mph`];
let kmh = [`32 km/h`, `8 km/h`, `0 km/h`, `  ? km/h`];

describe(`Wind speed conversion`, () => {
  for (let i = 0; i < mph.length; i++) {
    test(`Converts mph to km/h`, () => {
      expect(convertWind(mph[i])).toBe(kmh[i]);
    });
    test(`Converts km/h to mph`, () => {
      expect(convertWind(kmh[i])).toBe(mph[i]);
    });
  }
});
