import { dayCur, day1, day2, day3 } from "../index";

///update text
export function updateText(): void {
  const days = [dayCur, day1, day2, day3];
  let fer, cel, kmh, mph;
  if (dayCur.tileText.temperature.slice(-1) === `C`) {
    ////##################change to F and mph
    for (let i = 0; i < days.length; i++) {
      cel = parseFloat(days[i].tileText.temperature.slice(0, -3));
      if (isNaN(cel)) {
        fer = `  ?`;
      } else {
        fer = Math.round((cel * 9) / 5 + 32);
      }

      kmh = parseFloat(days[i].tileText.wind.slice(0, -5));
      if (isNaN(kmh)) {
        mph = `  ?`;
      } else {
        mph = Math.round(kmh * 0.621371);
      }

      days[i].tileText.temperature = `${fer} °F`;
      days[i].tileText.wind = `${mph} mph`;
    }
  } else {
    for (let i = 0; i < days.length; i++) {
      ////##################change to C and km/h
      fer = parseFloat(days[i].tileText.temperature.slice(0, -3));
      if (isNaN(fer)) {
        cel = `  ?`;
      } else {
        cel = Math.round(((fer - 32) * 5) / 9);
        if (cel < 0) cel = `-${cel * -1}`;
        else cel = `+${cel}`;
      }

      mph = parseFloat(days[i].tileText.wind.slice(0, -4));
      if (isNaN(mph)) {
        kmh = `  ?`;
      } else {
        kmh = Math.round(mph / 0.621371);
      }
      days[i].tileText.temperature = `${cel} °C`;
      days[i].tileText.wind = `${kmh} km/h`;
    }
  }
}
