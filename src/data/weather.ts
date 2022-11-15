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

export async function loadServer(): Promise<Weather | void> {
  const api = `https://goweather.herokuapp.com/weather/london`;
  try {
    const response = await fetch(api);
    const data = await response.json();

    const arr = [
      data.temperature,
      data.wind,
      data.description,
      data.forecast[0].day,
      data.forecast[0].temperature,
      data.forecast[0].wind,
      data.forecast[1].day,
      data.forecast[1].temperature,
      data.forecast[1].wind,
      data.forecast[2].day,
      data.forecast[2].temperature,
      data.forecast[2].wind
    ];

    const result = arr.every((e) => {
      return typeof e === `string`;
    });
    if (!result) throw `Type error please contact Api administrator`;

    return data;
  } catch (error) {
    alert(`Unable to updatedate reason: ${error}`);
  }
}
