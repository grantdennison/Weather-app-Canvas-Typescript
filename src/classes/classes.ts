import { context, sun, thermo, wind } from "../index";

export class Tile {
  public x: number;
  public y: number;
  public tileH: number;
  public divW: number;
  public colour: string;
  public tileText: {
    day: string;
    temperature: string;
    wind: string;
    description?: string;
  };
  public textX: number;
  public textY: number;
  public img1X: number;
  public img1Y: number;
  public img2X: number;
  public img2Y: number;
  public img3X?: number;
  public img3Y?: number;
  public img3TX?: number;
  public img3TY?: number;
  public imageSize?: number;
  public date: string[];

  constructor(
    x: number,
    y: number,
    tileH: number,
    divW: number,
    colour: string,
    tileText: {
      day: string;
      temperature: string;
      wind: string;
      description?: string;
    },
    textX: number,
    textY: number,
    img1X: number,
    img1Y: number,
    img2X: number,
    img2Y: number,
    img3X?: number,
    img3Y?: number,
    img3TX?: number,
    img3TY?: number,
    imageSize?: number
  ) {
    this.x = x;
    this.y = y;
    this.tileH = tileH;
    this.divW = divW;
    this.colour = colour;
    this.tileText = tileText;
    this.textX = textX;
    this.textY = textY;
    this.img1X = img1X;
    this.img1Y = img1Y;
    this.img2X = img2X;
    this.img2Y = img2Y;
    this.img3X = img3X;
    this.img3Y = img3Y;
    this.img3TX = img3TX;
    this.img3TY = img3TY;
    this.imageSize = imageSize;
    this.date = this.tileText.day.split(`, `);
  }

  draw() {
    //###########################################Tiles setup#######################################

    context.globalAlpha = 0.4;
    context.fillStyle = this.colour;
    context.fillRect(
      //x
      this.x,
      //y
      this.y,
      // width
      this.divW,
      //height
      this.tileH
    );
    context.beginPath();
    context.lineWidth = 0.2;
    context.rect(
      //x
      this.x,
      //y
      this.y,
      // width
      this.divW,
      //height
      this.tileH
    );

    // ####################################################Text editor##########################################

    context.textAlign = "left";
    context.stroke();
    context.globalAlpha = 1;
    context.strokeStyle = `black`;
    context.fillStyle = `white`;
    context.lineWidth = 4;
    ///Day
    context.font = "italic  35px LatoWeb";
    context.strokeText(`${this.date[0]} ~`, 15 + this.x, 33 + this.y);
    context.fillText(`${this.date[0]} ~`, 15 + this.x, 33 + this.y);
    ////Date
    context.textAlign = "right";
    context.font = "italic  25px LatoWeb";
    context.strokeText(this.date[1], this.textX + this.x, this.textY + this.y);
    context.fillText(this.date[1], this.textX + this.x, this.textY + this.y);
    ////Temp
    context.textAlign = "left";
    context.font = "italic  33px LatoWeb";
    context.strokeText(
      this.tileText.temperature,
      this.x + this.img1X + 50,
      this.y + this.img1Y + 45
    );
    context.fillText(
      this.tileText.temperature,
      this.x + this.img1X + 50,
      this.y + this.img1Y + 45
    );
    ////wind
    context.font = "italic  33px LatoWeb";
    context.strokeText(
      this.tileText.wind,
      this.x + this.img2X + 60,
      this.y + this.img2Y + 45
    );
    context.fillText(
      this.tileText.wind,
      this.x + this.img2X + 60,
      this.y + this.img2Y + 45
    );

    ///############################################images#########################
    context.drawImage(
      thermo,
      this.x + this.img1X,
      this.y + this.img1Y,
      this.imageSize,
      this.imageSize
    );
    context.drawImage(
      wind,
      this.x + this.img2X,
      this.y + this.img2Y,
      this.imageSize,
      this.imageSize
    );
    if (this.img3X && this.img3Y && this.img3TX && this.img3TY) {
      context.drawImage(
        sun,
        this.x + this.img3X,
        this.y + this.img3Y,
        100,
        100
      );
      ////Description

      context.font = "italic  30px LatoWeb";
      context.textAlign = "center";

      context.strokeText(
        this.tileText.description,
        this.x + this.img3X + this.img3TX,
        this.y + this.img3Y + this.img3TY
      );
      context.fillText(
        this.tileText.description,
        this.x + this.img3X + this.img3TX,
        this.y + this.img3Y + this.img3TY
      );
    }
  }
}
