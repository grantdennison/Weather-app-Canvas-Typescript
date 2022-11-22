import { dayCur, day1, day2, day3, canvas, context } from "../index";

let topH: number = 10,
  tileH: number = 150,
  tileCurH: number = tileH * 2;

export const desktopUpdate = () => {
  let winH = window.innerHeight;
  let winW = window.innerWidth;

  dayCur.img3TX = 130;
  dayCur.img3TY = 60;

  let widthTile: number;

  // ##################################
  // ##    Canvas (Width & Height)   ##
  // ##################################
  canvas.width = winW;
  if (winH < 650) winH = 650;

  canvas.height = winH;
  topH = (winH - tileCurH - tileH * 3) / 2;

  // ##################################
  // ##    Screen (Smaller 1000px)   ##
  // ##################################

  if (winW < 1000) {
    if (winW < 400) winW = 400;
    widthTile = winW / 1.2;
    // ##################################
    // ######    Canvas (Width)   #######
    // ##################################
    canvas.width = winW;

    // #######################
    // ##    TIle (Width)   ##
    // #######################
    dayCur.divW = day1.divW = day2.divW = day3.divW = widthTile;

    // ########################
    // ##    TIle (Height)   ##
    // ########################
    dayCur.tileH = tileCurH;
    day1.tileH = day2.tileH = day3.tileH = tileH;

    // ###################
    // ##    TIle (X)   ##
    // ###################
    dayCur.x = day1.x = day2.x = day3.x = (winW - widthTile) / 2;

    // ###################
    // ##    TIle (Y)   ##
    // ###################
    dayCur.y = topH;
    day1.y = topH + tileCurH;
    day2.y = topH + tileH + tileCurH;
    day3.y = topH + tileH * 2 + tileCurH;

    // #####################
    // ##    Image (1X)   ##
    // #####################
    dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;

    // #####################
    // ##    Image (1Y)   ##
    // #####################
    dayCur.img1Y = tileCurH / 3;
    day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2;

    // #####################
    // ##    Image (2X)   ##
    // #####################
    dayCur.img2X = 0;
    day1.img2X = day2.img2X = day3.img2X = winW / 2.5;

    // #####################
    // ##    Image (2Y)   ##
    // #####################
    dayCur.img2Y = tileCurH / 1.5;
    day1.img2Y = day2.img2Y = day3.img2Y = tileH / 2;
    if (winW > 570) {
      // ###########################
      // ##    Image (3X > 570)   ##
      // ###########################
      dayCur.img3X = widthTile - 300;

      // ###########################
      // ##    Image (3Y > 570)   ##
      // ###########################
      dayCur.img3Y = tileCurH / 3;
    } else {
      // #####################
      // ##    Image (3X)   ##
      // #####################
      dayCur.img3X = widthTile - 140;

      // #####################
      // ##    Image (3Y)   ##
      // #####################
      dayCur.img3Y = tileCurH / 4.3;

      // ############################
      // ##    Image (3X - Text)   ##
      // ############################
      dayCur.img3TX = 10;

      // ############################
      // ##    Image (3Y - Text)   ##
      // ############################
      dayCur.img3TY = 130;
    }
    // #############################
    // ##    Image (Date- Text)   ##
    // #############################
    dayCur.textX = day1.textX = day2.textX = day3.textX = widthTile - 100;
    dayCur.textY = day1.textY = day2.textY = day3.textY = 30;
  } else {
    // ##################################
    // ##    Screen (Larger 1000px)   ###
    // ##################################
    topH = (winH - tileCurH - tileH) / 2;

    // #######################
    // ##    TIle (Width)   ##
    // #######################
    widthTile = winW > 1300 ? 1300 / 1.2 : winW / 1.2;
    dayCur.divW = widthTile;
    day1.divW = day2.divW = day3.divW = widthTile / 3;
    // ########################
    // ##    TIle (Height)   ##
    // ########################
    day1.tileH = day2.tileH = day3.tileH = tileCurH;

    // ###################
    // ##    TIle (X)   ##
    // ###################
    dayCur.x = day1.x = (winW - widthTile) / 2;
    day2.x = day1.x + day1.divW;
    day3.x = day2.x + day2.divW;
    // ###################
    // ##    TIle (Y)   ##
    // ###################
    dayCur.y = topH;
    day1.y = day2.y = day3.y = topH + tileCurH;

    // #####################
    // ##    Image (1X)   ##
    // #####################
    dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;

    // #####################
    // ##    Image (1Y)   ##
    // #####################
    dayCur.img1Y = tileCurH / 2.3;
    day1.img1Y = day2.img1Y = day3.img1Y = tileH / 2.5;

    // #####################
    // ##    Image (2X)   ##
    // #####################
    dayCur.img2X = widthTile / 3;
    day1.img2X = day2.img2X = day3.img2X = 0;
    // #####################
    // ##    Image (2Y)   ##
    // #####################
    dayCur.img2Y = tileCurH / 2.3;
    day1.img2Y = day2.img2Y = day3.img2Y = tileH / 1.15;

    // #####################
    // ##    Image (3X)   ##
    // #####################
    dayCur.img3X = dayCur.img2X * 2;

    // #####################
    // ##    Image (3Y)   ##
    // #####################
    dayCur.img3Y = tileCurH / 3;

    // #############################
    // ##    Image (Date- Text)   ##
    // #############################
    dayCur.textX = widthTile - 100;
    day1.textX = day2.textX = day3.textX = widthTile / 3 - 100;

    dayCur.textY = day1.textY = day2.textY = day3.textY = 30;
  }
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  dayCur.draw();
  day1.draw();
  day2.draw();
  day3.draw();
};
