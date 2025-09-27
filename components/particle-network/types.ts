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

export class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor(canvas: HTMLCanvasElement, isLight: boolean = false) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;

    this.radius = Math.random() * 1.8 + 0.3;

    if (isLight) {
      this.color = 'rgb(0, 0, 0)';
    } else {
      this.color = 'rgb(255, 255, 255)';
    }
  }

  create(ctx: CanvasRenderingContext2D, mousePosition: MousePosition, canvasWidth: number): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const dotDistance = Math.sqrt(
      Math.pow(this.x - mousePosition.x, 2) + Math.pow(this.y - mousePosition.y, 2)
    );
    const distanceRatio = dotDistance / (canvasWidth / 1.7);

    ctx.fillStyle = `${this.color.slice(0, -1)},${Math.max(0.2, 1 - distanceRatio)})`;
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
