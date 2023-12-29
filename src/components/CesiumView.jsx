import { Component, createElement } from "react";

export class CesiumView extends Component {
    constructor(props) {
        super(props);
        Cesium.RequestScheduler.requestsByServer["tile.googleapis.com:443"] = 18;
        Cesium.Ion.defaultAccessToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Y2VkODRmZS03ODIxLTQ5Y2YtODZhZC00YjA1NWY2ZDFjNTIiLCJpZCI6MTg2ODY5LCJpYXQiOjE3MDM4MDE5OTZ9.nKsPGvUz0wpfj2VtRSD2hOoWUFNYdGeAe__tQN5EJRE";
    }

    componentDidMount() {
        this.initializeCesiumViewer();
    }

    initializeCesiumViewer = async () => {
        const viewer = new Cesium.Viewer("cesiumContainer", {
            imageryProvider: false,
            baseLayerPicker: false,
            geocoder: false,
            globe: false,
            requestRenderMode: true,
            contextOptions: {
                webgl: { preserveDrawingBuffer: true }
            }
        });

        try {
            const tileset = await Cesium.createGooglePhotorealistic3DTileset();
            viewer.scene.primitives.add(tileset);
            // Fly the camera to San Francisco at the given longitude, latitude, and height.
            viewer.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(5.0494988, 52.1326496, 200),
                orientation: {
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-60)
                }
            });
        } catch (error) {
            console.log(`Failed to load tileset: ${error}`);
        }

        this.viewer = viewer;
    };

    handleButtonClick = () => {
        var scene = this.viewer.scene;
        var canvas = scene.canvas;
        var image = canvas.toDataURL();

        // Create a link element
        var link = document.createElement("a");
        link.href = image;
        link.download = "screenshot.png"; // Set the desired file name

        // Simulate a click event to trigger the download
        link.click();
    };

    render() {
        return (
            <div>
                <div id="cesiumContainer"></div>
                <button onClick={this.handleButtonClick}>Click me</button>
            </div>
        );
    }
}
