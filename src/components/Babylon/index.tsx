// https://dev.to/justinctlam/building-a-3d-application-with-electron-and-babylonjs-using-typescript-2g29

import * as BABYLON from 'babylonjs';
import { uuid } from '../../util'

export const enum PrimitiveType {
  cube,
  sphere
}

const createRandomPosition = (lower: number = -6.0, upper: number = 6.0) => {
  const random = (lower: number, upper: number) => {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
  }

  return [random(lower, upper), random(lower, upper), random(lower, upper)]
}

export default class Renderer {
  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;

  createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine) {
    this._canvas = canvas;
    this._engine = engine;

    const scene = new BABYLON.Scene(engine);
    this._scene = scene;
    this._scene.clearColor = new BABYLON.Color3(0.15, 0.24, 0.36);

    const camera = new BABYLON.FreeCamera(uuid("camera"), new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(uuid("light"), new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const ground = BABYLON.Mesh.CreateGround(uuid("ground"), 6, 6, 2, scene);
  }

  initialize(canvas: HTMLCanvasElement) {

    canvas.height = 600; canvas.width = 800;

    const engine = new BABYLON.Engine(canvas, true);
    this.createScene(canvas, engine);

    engine.runRenderLoop(() => {
      this._scene.render();
    });

    window.addEventListener('resize', function() {
      engine.resize();
    });
  }

  createElement(type: PrimitiveType) {

    let element: any = null;

    switch (type) {
      case PrimitiveType.cube: {
        element = BABYLON.Mesh.CreateBox(uuid("cube"), 2, this._scene); break;
      }
      case PrimitiveType.sphere: {
        element = BABYLON.Mesh.CreateSphere(uuid("sphere"), 16, 2, this._scene); break;
      }
      default: { return; }
    }

    if (element && element.position) {
      const position = createRandomPosition(-4.0, 4.0)
      element.position.x = position[0]
      element.position.y = position[1]
      element.position.z = position[2]
    }
  }

}
