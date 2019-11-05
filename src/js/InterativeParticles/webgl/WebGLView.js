import * as THREE from 'three';

import InteractiveControls from './controls/InteractiveControls';
import Particles from './particles/Particles';

export default class WebGLView {
  constructor(app, image, width, height) {
    this.app = app;
    this.image = image;
    this.width = width;
    this.height = height;

    if (this.height <= 0) {
      this.height = window.innerHeight;
    }
    if (this.width <= 0) {
      this.width = window.innerWidth;
    }

    this.initThree();
    this.initParticles();
    this.initControls();

    this.goto();
  }

  initThree() {
    // scene
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.width / this.height,
      1,
      10000,
    );
    this.camera.position.z = 300;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // clock
    this.clock = new THREE.Clock(true);
  }

  initControls() {
    this.interactive = new InteractiveControls(
      this.camera,
      this.renderer.domElement,
    );
  }

  initParticles() {
    this.particles = new Particles(this);
    this.scene.add(this.particles.container);
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    const delta = this.clock.getDelta();

    if (this.particles) this.particles.update(delta);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  goto() {
    this.particles.init(this.image);
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.renderer) return;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z;

    this.renderer.setSize(this.width, this.height);

    if (this.interactive) this.interactive.resize();
    if (this.particles) this.particles.resize();
  }
}
