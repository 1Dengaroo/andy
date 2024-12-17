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

const colorDot: string[] = [
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(255, 77, 90)'
];

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
    this.vx = (-0.5 + Math.random()) * 0.15;
    this.vy = (-0.5 + Math.random()) * 0.15;
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

    ctx.fillStyle = `${this.colour.slice(0, -1)},${Math.max(0.2, 1 - distanceRatio)})`;
    ctx.fill();
  }

  animate(canvasWidth: number, canvasHeight: number): void {
    if (this.y < 0 || this.y > canvasHeight) {
      this.vy = -this.vy;
    }
    if (this.x < 0 || this.x > canvasWidth) {
      this.vx = -this.vx;
    }

    this.x += this.vx;
    this.y += this.vy;
  }
}
