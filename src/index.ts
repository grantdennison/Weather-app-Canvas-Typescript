import { save, loadLocal, loadServer } from "./data/weather";
import { Tile } from "./classes/classes";
const canvas = <HTMLCanvasElement>document.getElementById(`canvas1`);
export const context: any = canvas.getContext(`2d`);

//Images
export const sun: HTMLImageElement = new Image();
export const thermo: HTMLImageElement = new Image();
export const wind: HTMLImageElement = new Image();

const imagePath = [`./img/sun.png`, `./img/thermo.png`, `./img/wind.png`];
const images = [sun, thermo, wind];
var imageCount = 0; // number of loaded images;

// iterate each image path
for (let i = 0; i < images.length; i++) {
  images[i].src = imagePath[i];

  images[i].onload = () => {
    imageCount += 1;
    if (imageCount === images.length) {
      ///Once all imaages are loaded
      update();
    }
  };
}
//setup defaults golbal
let winW: number = window.innerWidth;
let winH: number = window.innerHeight;
let tileH: number = 150;
let tileCurH: number = 200;
let topH: number = (winH - tileCurH - tileH * 3) / 2;
let tileColour: string = "black";
let textX: number = winW / 1.2 - 120;
let textY: number = 30;
let img1X: number = 0;
let img1Y: number = tileH / 2.2;
let img2X: number = winW - winW / 1.2 / 2;
let img2Y: number = tileH / 2.2;
let offSet: number = 0;
let img3X: number = 0;
let img3Y: number = 0;
let img3TX: number = 1;
let img3TY: number = 1;
let imageSize: number = 60;

interface Date {
  day: any;
  temperature: string;
  wind: string;
  description?: string;
}

const tileTextDayCur: Date = {
  day: new Date().toLocaleDateString(`default`, {
    weekday: `long`,
    day: `2-digit`,
    month: `short`,
    year: `numeric`
  }),
  temperature: `0 °C `,
  wind: `0 km/h`,
  description: `Clear`
};
const tileTextDay1: Date = {
  day: new Date(new Date().getTime() + 86400000).toLocaleDateString(`default`, {
    weekday: `long`,
    day: `2-digit`,
    month: `short`
  }),
  temperature: `0 °C `,
  wind: `0 km/h`
};
const tileTextDay2: Date = {
  day: new Date(new Date().getTime() + 86400000 * 2).toLocaleDateString(
    `default`,
    {
      weekday: `long`,
      day: `2-digit`,
      month: `short`
    }
  ),
  temperature: `0 °C `,
  wind: `0 km/h`
};
const tileTextDay3: Date = {
  day: new Date(new Date().getTime() + 86400000 * 3).toLocaleDateString(
    `default`,
    {
      weekday: `long`,
      day: `2-digit`,
      month: `short`
    }
  ),
  temperature: `0 °C `,
  wind: `0 km/h`
};

//Get weather info in the back ground
loadWeather();

canvas.width = winW;
canvas.height = winH;
///Tile setup
const dayCur = new Tile(
  winW - winW / 1.2 / 2,
  topH,
  tileCurH,
  winW / 1.2,
  tileColour,
  tileTextDayCur,
  textX,
  textY,
  img1X,
  img1Y,
  img2X,
  img2Y,
  offSet,
  img3X,
  img3Y,
  img3TX,
  img3TY,
  imageSize
);
const day1 = new Tile(
  winW - winW / 1.2 / 2,
  topH + tileCurH,
  tileH,
  winW / 1.2,
  tileColour,
  tileTextDay1,
  textX,
  textY,
  img1X,
  img1Y,
  img2X,
  img2Y,
  offSet,
  (img3TX = 0),
  (img3TY = 0),
  (img3TX = 0),
  (img3TY = 0),
  imageSize
);
const day2 = new Tile(
  winW - winW / 1.2 / 2,
  topH + tileH + tileCurH,
  tileH,
  winW / 1.2,
  tileColour,
  tileTextDay2,
  textX,
  textY,
  img1X,
  img1Y,
  img2X,
  img2Y,
  offSet,
  (img3TX = 0),
  (img3TY = 0),
  (img3TX = 0),
  (img3TY = 0),
  imageSize
);
const day3 = new Tile(
  winW - winW / 1.2 / 2,
  topH + tileH * 2 + tileCurH,
  tileH,
  winW / 1.2,
  tileColour,
  tileTextDay3,
  textX,
  textY,
  img1X,
  img1Y,
  img2X,
  img2Y,
  offSet,
  0,
  0,
  0,
  0,
  imageSize
);
//#################################Device type#############################
const checkType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
const deviceType = checkType();
//####################################Click//////////////////////////
canvas.addEventListener(`click`, function () {
  updateText();
});
//Window resize event setup////
window.addEventListener(`resize`, function () {
  update();
});

screen.orientation.addEventListener(`change`, function () {
  update;
});

//############################Functions#############################
// Load weather data
async function loadWeather() {
  let weather: any = await loadLocal(`weather`);
  alert(`load`, weather);
  if (weather === false) {
    alert(`Server`);
    weather = await loadServer();
    save(`weather`, weather);
  }
  ///#######Update text######
  //Current Day
  tileTextDayCur.temperature = weather.temperature;
  tileTextDayCur.wind = weather.wind;
  tileTextDayCur.description = weather.description;
  // Day 1
  tileTextDay1.temperature = weather.forecast[0].temperature;
  tileTextDay1.wind = weather.forecast[0].wind;
  // Day 2
  tileTextDay2.temperature = weather.forecast[1].temperature;
  tileTextDay2.wind = weather.forecast[1].wind;
  // Day 3
  tileTextDay3.temperature = weather.forecast[2].temperature;
  tileTextDay3.wind = weather.forecast[2].wind;
  updateText();
  updateText();
}

///update text
function updateText(): void {
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

  update();
}

///Canva update for any changes
function update(): void {
  day1.offSet = day2.offSet = day3.offSet = 0;
  if (deviceType === `mobile`) mobileUpdate();
  else if (deviceType === `tablet`) tabletUpdate();
  else {
    winH = window.innerHeight;
    winW = window.innerWidth;

    dayCur.img3TX = 130;
    dayCur.img3TY = 60;

    let widthTile: number;
    canvas.width = winW;
    if (winH < 650) winH = 650;

    canvas.height = winH;
    topH = (winH - tileCurH - tileH * 3) / 2;

    if (winW < 1000) {
      if (winW < 400) winW = 400;
      widthTile = winW / 1.2;
      //canvas setting
      canvas.width = winW;

      // width setting
      dayCur.divW = day1.divW = day2.divW = day3.divW = widthTile;
      //height seting
      day1.tileH = day2.tileH = day3.tileH = tileH;
      // y setting
      dayCur.y = topH;
      day1.y = topH + tileCurH;
      day2.y = topH + tileH + tileCurH;
      day3.y = topH + tileH * 2 + tileCurH;

      //x setting
      dayCur.x = day1.x = day2.x = day3.x = (winW - widthTile) / 2;

      /////////////////Image setttings////////////////////////
      ///Image 1 x setting
      dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
      ///Image 1 y setting
      dayCur.img1Y = tileCurH / 3;
      day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2;
      ///Image 2 x setting
      dayCur.img2X = 0;
      day1.img2X = day2.img2X = day3.img2X = winW / 2.5;
      ///Image 2 y setting
      dayCur.img2Y = tileCurH / 1.5;
      day1.img2Y = day2.img2Y = day3.img2Y = tileH / 2;
      if (winW > 570) {
        ///Image 3 x setting
        dayCur.img3X = widthTile - 300;
        ///Image 3 y setting
        dayCur.img3Y = tileCurH / 3;
      } else {
        ///Image 3 x setting
        dayCur.img3X = widthTile - 140;
        ///Image 3 y setting
        dayCur.img3Y = tileCurH / 4.3;
        //Image text x setting
        dayCur.img3TX = 10;
        //Image text y setting
        dayCur.img3TY = 130;
      }
      ///Text setting date
      dayCur.textX = day1.textX = day2.textX = day3.textX = widthTile - 100;
      dayCur.textY = day1.textY = day2.textY = day3.textY = 30;
    } else {
      //##############great screens########
      topH = (winH - tileCurH - tileH) / 2;
      ////tile width

      widthTile = winW > 1300 ? 1300 / 1.2 : winW / 1.2;
      //height seting
      day1.tileH = day2.tileH = day3.tileH = tileCurH;
      // width settin
      dayCur.divW = widthTile;
      day1.divW = day2.divW = day3.divW = widthTile / 3;
      // y setting
      dayCur.y = topH;
      day1.y = day2.y = day3.y = topH + tileCurH;

      //x setting
      dayCur.x = day1.x = (winW - widthTile) / 2;
      day2.x = day1.x + day1.divW;
      day3.x = day2.x + day2.divW;
      /////////////////Image setttings////////////////////////
      ///Image 1 x setting
      dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
      ///Image 1 y setting
      dayCur.img1Y = tileCurH / 2.3;
      day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2.5;
      ///Image 2 x setting
      dayCur.img2X = widthTile / 3;
      day1.img2X = day2.img2X = day3.img2X = 0;
      ///Image 2 y setting
      dayCur.img2Y = tileCurH / 2.3;
      day1.img2Y = day2.img2Y = day3.img2Y = tileH / 1.15;
      ///Image 3 x setting
      dayCur.img3X = dayCur.img2X * 2;
      ///Image 3 y setting
      dayCur.img3Y = tileCurH / 3;

      ///Text setting date
      dayCur.textX = widthTile - 100;
      day1.textX = day2.textX = day3.textX = widthTile / 3 - 100;

      dayCur.textY = day1.textY = day2.textY = day3.textY = 30;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    dayCur.draw();
    day1.draw();
    day2.draw();
    day3.draw();
  }
}

const mobileUpdate = () => {
  //################################portrate######################
  winW = screen.availWidth - 15;
  winH = screen.availHeight - 20;
  day1.offSet = day2.offSet = day3.offSet = 0;
  //canvas setting
  canvas.width = winW;
  canvas.height = winH;
  topH = 10;
  let widthTile: number = winW;
  if (screen.width < screen.height) {
    tileH = winH / 5;
    // width setting
    dayCur.divW = day1.divW = day2.divW = day3.divW = widthTile;
    //height seting
    dayCur.tileH = tileH * 2;
    day1.tileH = day2.tileH = day3.tileH = tileH;
    // y setting
    tileCurH = tileH * 2;
    dayCur.y = topH;
    day1.y = topH + tileCurH;
    day2.y = topH + tileH + tileCurH;
    day3.y = topH + tileH * 2 + tileCurH;

    //x setting
    dayCur.x = day1.x = day2.x = day3.x = (winW - widthTile + 20) / 2;
    ///Text setting date
    // dayCur.textX = day1.textX = day2.textX = day3.textX = dayCur.divW - 400;

    /////////////////Image setttings////////////////////////
    day1.imageSize = day2.imageSize = day3.imageSize = 50;
    ///Image 1 x setting
    dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
    ///Image 1 y setting
    dayCur.img1Y = tileCurH / 3;
    day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2;
    ///Image 2 x setting
    dayCur.img2X = 0;
    day1.img2X = day2.img2X = day3.img2X = winW / 2;
    ///Image 2 y setting
    dayCur.img2Y = tileCurH / 1.5;
    day1.img2Y = day2.img2Y = day3.img2Y = tileH / 2;

    ///Image 3 x setting
    dayCur.img3X = widthTile - 160;
    ///Image 3 y setting
    dayCur.img3Y = tileCurH / 2.8;
    //Image text x setting
    dayCur.img3TX = 50;
    //Image text y setting
    dayCur.img3TY = 160;

    ///Text setting date
    dayCur.textX = day1.textX = day2.textX = day3.textX = widthTile - 20;
  } else {
    //###########################Landscape
    //##############great screens########
    tileH = winH / 7;
    tileCurH = tileH * 4;
    tileH = tileH * 3;
    //height seting
    dayCur.tileH = tileCurH;
    day1.tileH = day2.tileH = day3.tileH = tileH;
    // width settin
    dayCur.divW = widthTile;
    day1.divW = day2.divW = day3.divW = widthTile / 3;
    // y setting
    dayCur.y = topH;
    day1.y = day2.y = day3.y = topH + tileCurH;

    //x setting
    dayCur.x = day1.x = (winW - widthTile + 15) / 2;
    day2.x = day1.x + day1.divW;
    day3.x = day2.x + day2.divW;
    /////////////////Image setttings////////////////////////
    day1.imageSize = day2.imageSize = day3.imageSize = 40;
    day1.offSet = day2.offSet = day3.offSet = 15;
    ///Image 1 x setting
    dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
    ///Image 1 y setting
    dayCur.img1Y = tileCurH / 2.3;
    day1.img1Y = day2.img1Y = day3.img1Y = tileH / 3;
    ///Image 2 x setting
    dayCur.img2X = widthTile / 3.5;
    day1.img2X = day2.img2X = day3.img2X = 0;
    ///Image 2 y setting
    dayCur.img2Y = tileCurH / 2.3;
    day1.img2Y = day2.img2Y = day3.img2Y = (tileH / 3) * 2;
    ///Image 3 x setting
    dayCur.img3X = dayCur.img2X * 2;
    ///Image 3 y setting
    dayCur.img3Y = tileCurH / 3;

    ///Text setting date
    dayCur.textX = widthTile - 100;
    day1.textX = day2.textX = day3.textX = widthTile / 3 - 20;

    dayCur.textY = day1.textY = day2.textY = day3.textY = 30;

    ///Image 3 text seetting
    dayCur.img3TX = 200;
    dayCur.img3TY = 70;
  }
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  dayCur.draw();
  day1.draw();
  day2.draw();
  day3.draw();
};
const tabletUpdate = () => {
  if (screen.width < screen.height) {
    //################################portrate######################
    winW = screen.availWidth - 15;
    winH = screen.availHeight - 20;
    day1.offSet = day2.offSet = day3.offSet = 0;
    //canvas setting
    canvas.width = winW;
    canvas.height = winH;
    topH = 10;
    let widthTile: number = winW;
    if (screen.width < screen.height) {
      tileH = winH / 5;
      // width setting
      dayCur.divW = day1.divW = day2.divW = day3.divW = widthTile;
      //height seting
      dayCur.tileH = tileH * 2;
      day1.tileH = day2.tileH = day3.tileH = tileH;
      // y setting
      tileCurH = tileH * 2;
      dayCur.y = topH;
      day1.y = topH + tileCurH;
      day2.y = topH + tileH + tileCurH;
      day3.y = topH + tileH * 2 + tileCurH;

      //x setting
      dayCur.x = day1.x = day2.x = day3.x = (winW - widthTile + 20) / 2;
      ///Text setting date
      // dayCur.textX = day1.textX = day2.textX = day3.textX = dayCur.divW - 400;

      /////////////////Image setttings////////////////////////
      day1.imageSize = day2.imageSize = day3.imageSize = 50;
      ///Image 1 x setting
      dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
      ///Image 1 y setting
      dayCur.img1Y = tileCurH / 3;
      day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2;
      ///Image 2 x setting
      dayCur.img2X = 0;
      day1.img2X = day2.img2X = day3.img2X = winW / 2;
      ///Image 2 y setting
      dayCur.img2Y = tileCurH / 1.5;
      day1.img2Y = day2.img2Y = day3.img2Y = tileH / 2;

      ///Image 3 x setting
      dayCur.img3X = widthTile - 160;
      ///Image 3 y setting
      dayCur.img3Y = tileCurH / 2.8;
      //Image text x setting
      dayCur.img3TX = 50;
      //Image text y setting
      dayCur.img3TY = 160;

      ///Text setting date
      dayCur.textX = day1.textX = day2.textX = day3.textX = widthTile - 20;
    } else {
      //###########################Landscape
      //##############great screens########
      tileH = winH / 7;
      tileCurH = tileH * 4;
      tileH = tileH * 3;
      //height seting
      dayCur.tileH = tileCurH;
      day1.tileH = day2.tileH = day3.tileH = tileH;
      // width settin
      dayCur.divW = widthTile;
      day1.divW = day2.divW = day3.divW = widthTile / 3;
      // y setting
      dayCur.y = topH;
      day1.y = day2.y = day3.y = topH + tileCurH;

      //x setting
      dayCur.x = day1.x = (winW - widthTile + 15) / 2;
      day2.x = day1.x + day1.divW;
      day3.x = day2.x + day2.divW;
      /////////////////Image setttings////////////////////////
      day1.imageSize = day2.imageSize = day3.imageSize = 40;
      day1.offSet = day2.offSet = day3.offSet = 15;
      ///Image 1 x setting
      dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;
      ///Image 1 y setting
      dayCur.img1Y = tileCurH / 2.3;
      day1.img1Y = day2.img1Y = day3.img1Y = tileH / 3;
      ///Image 2 x setting
      dayCur.img2X = widthTile / 3.5;
      day1.img2X = day2.img2X = day3.img2X = 0;
      ///Image 2 y setting
      dayCur.img2Y = tileCurH / 2.3;
      day1.img2Y = day2.img2Y = day3.img2Y = (tileH / 3) * 2;
      ///Image 3 x setting
      dayCur.img3X = dayCur.img2X * 2;
      ///Image 3 y setting
      dayCur.img3Y = tileCurH / 3;

      ///Text setting date
      dayCur.textX = widthTile - 100;
      day1.textX = day2.textX = day3.textX = widthTile / 3 - 20;

      dayCur.textY = day1.textY = day2.textY = day3.textY = 30;

      ///Image 3 text seetting
      dayCur.img3TX = 200;
      dayCur.img3TY = 70;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    dayCur.draw();
    day1.draw();
    day2.draw();
    day3.draw();
  }
};

update();
