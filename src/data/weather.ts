///Weather interface

interface Weather {
  temperature: string;
  wind: string;
  description: string;
  forecast: [
    {
      day: string;
      temperature: string;
      wind: string;
    },
    {
      day: string;
      temperature: string;
      wind: string;
    },
    {
      day: string;
      temperature: string;
      wind: string;
    }
  ];
}

//Save data to local storage
export function save(key: string, data: object) {
  const expiry: number = Date.now() + 1000;
  const obj: { value: object; expiry: number } = {
    value: data,
    expiry: expiry
  };
  localStorage.setItem(key, JSON.stringify(obj));
}

//check if data is in local storage
export function loadLocal(key: string) {
  const dataStr = localStorage.getItem(key);
  if (dataStr) {
    const data: { value: object; expiry?: number } = JSON.parse(dataStr);
    if (data.expiry && data.expiry > Date.now()) {
      return data.value;
    }
  }
  return false;
}

//get data from server

export async function loadServer() {
  async function api(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }

  let temp = api(`https://goweather.herokuapp.com/weather/london`);

  //   const weather: Weather = temp;
  // temperature: "9 °C",
  // wind: "4 km/h",
  // description: "Clear",
  // forecast: [
  //   {
  //     day: "1",
  //     temperature: "+11 °C",
  //     wind: "14 km/h"
  //   },
  //   {
  //     day: "2",
  //     temperature: "10 °C",
  //     wind: "4 km/h"
  //   },
  //   {
  //     day: "3",
  //     temperature: "13 °C",
  //     wind: "6 km/h"
  //   }
  // ]
  return temp;
}
