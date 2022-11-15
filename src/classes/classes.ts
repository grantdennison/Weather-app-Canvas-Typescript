import { context, cloudy, rain, sun, thermo, wind } from "../index";

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
    img3Y?: number
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
    this.date = this.tileText.day.split(`, `);
  }

  draw() {
    context.globalAlpha = 0.3;
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
    context.lineWidth = 0.1;
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
    context.stroke();
    context.globalAlpha = 1;
    context.strokeStyle = `black`;
    context.fillStyle = `white`;
    context.lineWidth = 3;
    ///Day
    context.font = "italic  30px LatoWeb";
    context.strokeText(`${this.date[0]} ~`, 15 + this.x, 33 + this.y);
    context.fillText(`${this.date[0]} ~`, 15 + this.x, 33 + this.y);
    ////Dte
    context.font = "italic  18px LatoWeb";
    context.strokeText(
      `${this.date[1]}`,
      this.textX + this.x,
      this.textY + this.y
    );
    context.fillText(
      `${this.date[1]}`,
      this.textX + this.x,
      this.textY + this.y
    );

    ///images
    context.drawImage(thermo, this.x + this.img1X, this.y + this.img1Y, 60, 60);
    context.drawImage(wind, this.x + this.img2X, this.y + this.img2Y, 60, 60);
    if (this.img3X && this.img3Y) {
      context.drawImage(
        sun,
        this.x + this.img3X,
        this.y + this.img3Y,
        100,
        100
      );
    }
  }
}
