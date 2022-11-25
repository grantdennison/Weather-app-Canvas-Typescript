import { loadServer, loadLocal, save, expiryMin } from "../utils/fetchData";

// ##########################################
// ##      Local Storage - Test (Save)     ##
// ##########################################

test("Data is added into local storage", () => {
  const mockId = "1";
  const mockJson = { value: "json data" };
  save(mockId, mockJson);
  // 15 min expiry
  const expiry = Date.now() + 1000 * 60 * expiryMin;
  expect(localStorage.getItem(mockId)).toEqual(
    JSON.stringify({ value: mockJson, expiry: expiry })
  );
  localStorage.clear();
});

// ##########################################
// ##      Local Storage - Test (Load)     ##
// ##########################################

test("Data is loaded from local storage", () => {
  const mockId = "1";
  const mockJson = { value: "json data" };
  save(mockId, mockJson);
  expect(loadLocal(mockId)).toEqual(mockJson);
  localStorage.clear();
});

// ##############################################
// ##    Fetch Data - Test   (API - Success)   ##
// ##############################################

const weather = {
  temperature: `20 °C`,
  wind: `20km/h`,
  description: `Sunny`,
  forecast: [
    {
      day: `1`,
      temperature: `20 °C`,
      wind: `20km/h`
    },
    {
      day: `2`,
      temperature: `20 °C`,
      wind: `20km/h`
    },
    {
      day: `3`,
      temperature: `20 °C`,
      wind: `20km/h`
    }
  ]
};

test("API call pass test", async () => {
  window.alert = jest.fn();
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(weather)
    })
  );

  const value = await loadServer();

  expect(value).toEqual(weather);
  expect(fetch).toHaveBeenCalledTimes(1);
  window.alert.mockClear();
});

// ##############################################
// ##    Fetch Data - Test   (API - Success)   ##
// ##############################################

test("Fails type check", async () => {
  window.alert = jest.fn();
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          temperature: `20 °C`,
          wind: `20km/h`,
          description: `Sunny`,
          forecast: [
            {
              day: `1`,
              temperature: `20 °C`,
              wind: `20km/h`
            },
            {
              day: `2`,
              temperature: `20 °C`,
              wind: `20km/h`
            },
            {
              day: `3`,
              temperature: `20 °C`,
              wind: 10
            }
          ]
        })
    })
  );

  const rate = await loadServer();

  expect(rate).toEqual(false);
  expect(fetch).toHaveBeenCalledTimes(1);
  window.alert.mockClear();
});

// ##############################################
// ##    Fetch Data - Test   (API - Error)   ##
// ##############################################

it("Api resolves false", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API is down"));

  const value = await loadServer();

  expect(value).toEqual(false);
  expect(fetch).toHaveBeenCalledWith(
    "https://goweather.herokuapp.com/weather/london"
  );
});
