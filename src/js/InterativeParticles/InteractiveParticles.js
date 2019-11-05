import WebGLView from './webgl/WebGLView';
import React from 'react';

class InteractiveParticles extends React.Component {
  constructor(props) {
    super(props);
    this.image = props.image;
    this.width = props.width ? props.width : window.innerWidth;
    this.height = props.height ? props.height : window.innerHeight;
    this.init();
  }

  init() {
    this.initWebGL();
    this.initGUI();
    this.addListeners();
    this.animate();
    this.resize();
  }

  initWebGL() {
    this.webgl = new WebGLView(this, this.image, this.width, this.height);
    document.getElementById('root').appendChild(this.webgl.renderer.domElement);
  }

  render() {
    return null;
  }

  initGUI() {
    // this.gui = new GUIView(this);
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this);

    window.addEventListener('resize', this.resize.bind(this));
    // window.addEventListener('keyup', this.keyup.bind(this));

    // const el = this.webgl.renderer.domElement;
    // el.addEventListener('click', this.click.bind(this));
  }

  animate() {
    this.update();
    this.draw();

    this.raf = requestAnimationFrame(this.handlerAnimate);
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    // if (this.gui.stats) this.gui.stats.begin();
    if (this.webgl) this.webgl.update();
    // if (this.gui) this.gui.update();
  }

  draw() {
    if (this.webgl) this.webgl.draw();
    // if (this.gui.stats) this.gui.stats.end();
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (this.webgl) this.webgl.resize();
  }

  keyup(e) {
    // g
    if (e.keyCode === 71) {
      if (this.gui) this.gui.toggle();
    }
  }

  click(e) {
    this.webgl.next();
  }
}

export default InteractiveParticles;
