const canvas = <HTMLCanvasElement>document.getElementById(`canvas1`);
export const context: any = canvas.getContext(`2d`);

context.fillStyle = "green";
context.fillRect(100, 100, 200, 200);
