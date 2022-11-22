import { dayCur, day1, day2, day3, canvas, context } from "../index";

let topH: number = 10,
  tileH: number = 150,
  tileCurH: number = tileH * 2;

export const tabletUpdate = () => {
  // ##############################################################
  // #############    Device Orientation (Portrait)   #############
  // ##############################################################

  let winW = screen.availWidth - 15;
  let winH = screen.availHeight - 20;
  day1.offSet = day2.offSet = day3.offSet = 0;

  // ##################################
  // ##    Canvas (Width & Height)   ##
  // ##################################

  canvas.width = winW;
  canvas.height = winH;
  topH = 10;
  let widthTile: number = winW;

  if (screen.width < screen.height) {
    tileH = winH / 5;

    // #######################
    // ##    TIle (Width)   ##
    // #######################
    dayCur.divW = day1.divW = day2.divW = day3.divW = widthTile;

    // ########################
    // ##    TIle (Height)   ##
    // ########################
    dayCur.tileH = tileH * 2;
    day1.tileH = day2.tileH = day3.tileH = tileH;

    // ###################
    // ##    TIle (X)   ##
    // ###################
    dayCur.x = day1.x = day2.x = day3.x = (winW - widthTile + 20) / 2;

    // ###################
    // ##    TIle (Y)   ##
    // ###################
    tileCurH = tileH * 2;
    dayCur.y = topH;
    day1.y = topH + tileCurH;
    day2.y = topH + tileH + tileCurH;
    day3.y = topH + tileH * 2 + tileCurH;

    // #######################
    // ##    Image (Size)   ##
    // #######################
    day1.imageSize = day2.imageSize = day3.imageSize = 50;

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
    day1.img2X = day2.img2X = day3.img2X = winW / 2;

    // #####################
    // ##    Image (2Y)   ##
    // #####################
    dayCur.img2Y = tileCurH / 1.5;
    day1.img2Y = day2.img2Y = day3.img2Y = tileH / 2;

    // #####################
    // ##    Image (3X)   ##
    // #####################
    dayCur.img3X = widthTile - 160;

    // #####################
    // ##    Image (3Y)   ##
    // #####################
    dayCur.img3Y = tileCurH / 2.8;

    // ############################
    // ##    Image (3X - Text)   ##
    // ############################
    dayCur.img3TX = 50;

    // ############################
    // ##    Image (3Y - Text)   ##
    // ############################
    dayCur.img3TY = 160;

    // #############################
    // ##    Image (Date- Text)   ##
    // #############################
    dayCur.textX = day1.textX = day2.textX = day3.textX = widthTile - 20;
  } else {
    // #############################################################
    // ###########    Device Orientation (LandScape)   #############
    // #############################################################

    tileH = winH / 7;
    tileCurH = tileH * 4;
    tileH = tileH * 3;

    // #######################
    // ##    TIle (Width)   ##
    // #######################
    dayCur.tileH = tileCurH;
    day1.tileH = day2.tileH = day3.tileH = tileH;

    // ########################
    // ##    TIle (Height)   ##
    // ########################
    dayCur.divW = widthTile;
    day1.divW = day2.divW = day3.divW = widthTile / 3;

    // ###################
    // ##    TIle (X)   ##
    // ###################
    dayCur.x = day1.x = (winW - widthTile + 15) / 2;
    day2.x = day1.x + day1.divW;
    day3.x = day2.x + day2.divW;

    // ###################
    // ##    TIle (Y)   ##
    // ###################
    dayCur.y = topH;
    day1.y = day2.y = day3.y = topH + tileCurH;

    // #######################
    // ##    Image (Size)   ##
    // #######################
    day1.imageSize = day2.imageSize = day3.imageSize = 40;
    day1.offSet = day2.offSet = day3.offSet = 15;

    // #####################
    // ##    Image (1X)   ##
    // #####################
    dayCur.img1X = day1.img1X = day2.img1X = day3.img1X = 0;

    // #####################
    // ##    Image (1Y)   ##
    // #####################
    dayCur.img1Y = tileCurH / 2.3;
    day1.img1Y = day2.img1Y = day3.img1Y = tileH / 3;

    // #####################
    // ##    Image (2X)   ##
    // #####################
    dayCur.img2X = widthTile / 3.5;
    day1.img2X = day2.img2X = day3.img2X = 0;

    // #####################
    // ##    Image (2Y)   ##
    // #####################
    dayCur.img2Y = tileCurH / 2.3;
    day1.img2Y = day2.img2Y = day3.img2Y = (tileH / 3) * 2;

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
    day1.textX = day2.textX = day3.textX = widthTile / 3 - 20;

    // ############################
    // ##    Image (3X - Text)   ##
    // ############################
    dayCur.textY = day1.textY = day2.textY = day3.textY = 30;

    // ############################
    // ##    Image (3Y - Text)   ##
    // ############################
    dayCur.img3TX = 200;
    dayCur.img3TY = 70;
  }
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  dayCur.draw();
  day1.draw();
  day2.draw();
  day3.draw();
};
