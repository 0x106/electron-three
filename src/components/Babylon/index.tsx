// https://dev.to/justinctlam/building-a-3d-application-with-electron-and-babylonjs-using-typescript-2g29

import * as BABYLON from 'babylonjs';
import uuid from 'uuid/v4'

export const enum PrimitiveType {
  cube,
  sphere
}

const createRandomPosition = (obj: any) => {
    const lower = -6.0;
    const upper = 6.0;

    const random = (lower: number, upper: number) => {
      return Math.floor(Math.random()*(upper-lower+1)+lower);
    }

    obj.position.x = random(lower, upper)
    obj.position.y = random(lower, upper)
    obj.position.z = random(lower, upper)
}

export default class Renderer {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;

    createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine) {
        this._canvas = canvas;
        this._engine = engine;

        // This creates a basic Babylon Scene object (non-mesh)
        const scene = new BABYLON.Scene(engine);
        this._scene = scene;

        // This creates and positions a free camera (non-mesh)
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    }

    initialize(canvas: HTMLCanvasElement) {

        canvas.height = 600; canvas.width = 800;

        const engine = new BABYLON.Engine(canvas, true);
        this.createScene(canvas, engine);

        engine.runRenderLoop(() => {
            this._scene.render();
        });

        window.addEventListener('resize', function () {
            engine.resize();
        });
    }

    private createCube() {
      const key = uuid();
      const cube = BABYLON.Mesh.CreateBox(key, 2, this._scene);
      cube.position.y = 1;
    }

    private createSphere() {
      const key = uuid();
      const sphere = BABYLON.Mesh.CreateSphere(key, 16, 2, this._scene);
      sphere.position.y = 1;
    }

    createElement(type: PrimitiveType) {
      switch(type) {
         case PrimitiveType.cube: {
            this.createCube(); break;
         }
         case PrimitiveType.sphere: {
            this.createSphere(); break;
         }
         default: { break; }
      }
    }

  }
