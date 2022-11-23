import { convertTemp, convertWind } from "../utils/textConvert";

// ############################################
// ##      Convert Text - Test (°C - °F)     ##
// ############################################
describe(`Temperature convert`, () => {
  test(`Converts 10 °C to 50 °F`, () => {
    expect(convertTemp(`10 °C`)).toBe(`50 °F`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts -10 °C to 14 °F`, () => {
    expect(convertTemp(`-10 °C`)).toBe(`14 °F`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts 0 °C to 32 °F`, () => {
    expect(convertTemp(`0 °C`)).toBe(`32 °F`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts °C to ? °F`, () => {
    expect(convertTemp(`°C`)).toBe(`  ? °F`);
  });
});

// ############################################
// ##      Convert Text - Test (°F - °C)     ##
// ############################################

describe(`Temperature convert`, () => {
  test(`Converts 50 °F to 10 °C`, () => {
    expect(convertTemp(`50 °F`)).toBe(`+10 °C`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts 14 °F to -10 °C`, () => {
    expect(convertTemp(`14 °F`)).toBe(`-10 °C`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts 32 °F to 0 °C`, () => {
    expect(convertTemp(`32 °F`)).toBe(`+0 °C`);
  });
});
describe(`Temperature convert`, () => {
  test(`Converts empty string to  ? °C`, () => {
    expect(convertTemp(``)).toBe(`  ? °C`);
  });
});

// ###############################################
// ##      Convert Text - Test (mph - km/h)     ##
// ###############################################

describe(`Wind speed convert`, () => {
  test(`Converts 20 mph to 32 km/h`, () => {
    expect(convertWind(`20 mph`)).toBe(`32 km/h`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts 5 mph to 8 km/h`, () => {
    expect(convertWind(`5 mph`)).toBe(`8 km/h`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts 0 mph to 0 km/h`, () => {
    expect(convertWind(`0 mph`)).toBe(`0 km/h`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts mph to ? km/h`, () => {
    expect(convertWind(`mph`)).toBe(`  ? km/h`);
  });
});

// ###############################################
// ##      Convert Text - Test (km/h - mph)     ##
// ###############################################

describe(`Wind speed convert`, () => {
  test(`Converts 32 km/h to 20 mph`, () => {
    expect(convertWind(`32 km/h`)).toBe(`20 mph`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts 8 km/h to 5 mph`, () => {
    expect(convertWind(`8 km/h`)).toBe(`5 mph`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts 0 km/h to 0 mph`, () => {
    expect(convertWind(`0 km/h`)).toBe(`0 mph`);
  });
});
describe(`Wind Speed convert`, () => {
  test(`Converts empty string to ? mph`, () => {
    expect(convertWind(``)).toBe(`  ? mph`);
  });
});
