import { save, loadLocal, loadServer } from "./data/weather";

const canvas = <HTMLCanvasElement>document.getElementById(`canvas1`);
export const context: any = canvas.getContext(`2d`);

context.fillStyle = "green";
context.fillRect(100, 100, 200, 200);

//############################Functions#############################
// Load weather data
async function loadWeather() {
  let weather: any = loadLocal(`weather`);
  if (!weather) {
    console.log(`weather from server`);
    weather = await loadServer();
    save(`weather`, weather);
  }
  ///#######Update text######
  //Current Day

  console.log(weather);
}
loadWeather();
