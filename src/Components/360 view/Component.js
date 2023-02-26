import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const style = {
  height: 400, 
  width:400,// we can control scene size by setting container dimensions
  margin:"0 auto",
  backgroundColor:"#fff",
  border:"1px solid gray"
};

class App extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addLights();
    this.loadTheModel();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }
  sceneSetup = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.z = 100; 
    this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor( 0xffffff, 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement); 
  };

  loadTheModel = () => {
    const loader = new OBJLoader();
    loader.load("../glase.obj",(object) => {
        this.scene.add(object);
        console.log(this.scene);
        // const el = this.scene.getObjectById();
        // console.log(el);
        // el.position.set(0, -150, 0);
        // el.material.color.set(0x50c878);
        // el.rotation.x = 23.5;
        // this.model = el;
      },
      (xhr) => {
        const loadingPercentage = Math.ceil((xhr.loaded / xhr.total) * 100);
        console.log(loadingPercentage + "% loaded");
        this.props.onProgress(loadingPercentage);
      },
      (error) => {
        console.log("An error happened:" + error);
      }
    );
  };
  addLights = () => {
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(-1000, -2000, -1000);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  startAnimationLoop = () => {
    if (this.model) this.model.rotation.z += 0.005;
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div style={style} ref={(ref) => (this.mount = ref)} />;
  }
}

class Index_360 extends React.Component {
  state = { isMounted: true };

  render() {
    const { isMounted = true, loadingPercentage = 0 } = this.state;
    return (
      <>
        {isMounted && (
          <App
            onProgress={(loadingPercentage) =>
              this.setState({ loadingPercentage })
            }
          />
        )}
        {isMounted && loadingPercentage === 100 && (
          <div>Scroll to zoom, drag to rotate</div>
        )}
        {loadingPercentage !== 100 && (
          <div>Loading Model: {loadingPercentage}%</div>
        )}
      </>
    );
  }
}

export default Index_360;
