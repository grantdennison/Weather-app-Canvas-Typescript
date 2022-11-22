import { save, loadLocal, loadServer } from "./utils/fetchData";
import { Tile } from "./classes/classes";
import { updateText } from "./utils/textConvert";
import { tabletUpdate } from "./devices/tablet";
import { mobileUpdate } from "./devices/mobile";
import { desktopUpdate } from "./devices/desktop";
import {
  tileTextDayCur,
  tileTextDay1,
  tileTextDay2,
  tileTextDay3
} from "./utils/tileText";
export const canvas = <HTMLCanvasElement>document.getElementById(`canvas1`);
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

canvas.width = winW;
canvas.height = winH;
///Tile setup
export const dayCur = new Tile(
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
export const day1 = new Tile(
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
export const day2 = new Tile(
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
export const day3 = new Tile(
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
// ###################################################################################
// ################    Device type   (Mobile - Tablet - Desktop)   ###################
// ###################################################################################

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

// ###################################################################################
// ##############    Event Listeners (click - resize - orientation)    ###############
// ###################################################################################

canvas.addEventListener(`click`, function () {
  updateText();
});

window.addEventListener(`resize`, function () {
  update();
});

screen.orientation.addEventListener(`change`, function () {
  update;
});

// ###################################################################################
// ################    Fetch & Save weather Data (Local - Server)    #################
// ###################################################################################

export async function loadWeather() {
  let weather: any = await loadLocal(`weather`);
  if (!weather) {
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
  update();
}

loadWeather();

// ###################################################################################
// ##############################    Update Canvas    ################################
// ###################################################################################

///Canvas update for any changes
function update(): void {
  day1.offSet = day2.offSet = day3.offSet = 0;
  if (deviceType === `mobile`) mobileUpdate();
  else if (deviceType === `tablet`) tabletUpdate();
  else {
    desktopUpdate();
  }
}

update();

export function sub(a: number, b: number): any {
  return a + b;
}
