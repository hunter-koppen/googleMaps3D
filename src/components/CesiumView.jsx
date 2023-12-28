import { Component, createElement } from "react";

export class CesiumView extends Component {
    constructor(props) {
        super(props);
        Cesium.RequestScheduler.requestsByServer["tile.googleapis.com:443"] = 18
        Cesium.Ion.defaultAccessToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Y2VkODRmZS03ODIxLTQ5Y2YtODZhZC00YjA1NWY2ZDFjNTIiLCJpZCI6MTg2ODY5LCJpYXQiOjE3MDM4MDE5OTZ9.nKsPGvUz0wpfj2VtRSD2hOoWUFNYdGeAe__tQN5EJRE";
    }

    async componentDidMount() {
        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const viewer = new Cesium.Viewer("cesiumContainer", {
            imageryProvider: false,
            baseLayerPicker: false,
            geocoder: false,
            globe: false,
            requestRenderMode: true,
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
    }

    render() {
        return <div id="cesiumContainer"></div>;
    }
}
