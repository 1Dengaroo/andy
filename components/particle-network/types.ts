export interface MousePosition {
  x: number;
  y: number;
}

export interface DotsConfig {
  nb: number;
  distance: number;
  d_radius: number;
  array: Dot[];
}

function generateVibrantColor(): string {
  const r = Math.floor(Math.random() * 156) + 100; // 100-255
  const g = Math.floor(Math.random() * 156) + 100; // 100-255
  const b = Math.floor(Math.random() * 156) + 100; // 100-255

  const dominantChannel = Math.floor(Math.random() * 3);

  let recessiveChannel;
  do {
    recessiveChannel = Math.floor(Math.random() * 3);
  } while (recessiveChannel === dominantChannel);

  const channels = [r, g, b];

  channels[dominantChannel] = Math.min(255, channels[dominantChannel] + 50);
  channels[recessiveChannel] = Math.max(0, channels[recessiveChannel] - 80);

  return `rgb(${channels[0]}, ${channels[1]}, ${channels[2]})`;
}

const color1 = generateVibrantColor();
const color2 = generateVibrantColor();

export const colorDot: string[] = [color1, color1, color1, color1, color2];

export class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (Math.random() - 0.5) * 2; // range: -1 to 1
    this.vy = (Math.random() - 0.5) * 2; // range: -1 to 1

    this.radius = Math.random() * 1.8 + 0.3;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  create(ctx: CanvasRenderingContext2D, mousePosition: MousePosition, canvasWidth: number): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const dotDistance = Math.sqrt(
      Math.pow(this.x - mousePosition.x, 2) + Math.pow(this.y - mousePosition.y, 2)
    );
    const distanceRatio = dotDistance / (canvasWidth / 1.7);

    const opacity = Math.max(0.2, 1 - distanceRatio);

    ctx.fillStyle = `${this.colour.slice(0, -1)},${opacity})`;
    ctx.fill();
  }

  animate(canvasWidth: number, canvasHeight: number): void {
    if (this.x + this.vx > canvasWidth || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.vy > canvasHeight || this.y + this.vy < 0) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;
  }
}
