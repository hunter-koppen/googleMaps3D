import { Component, createElement } from "react";

export class CesiumView extends Component {
    constructor(props) {
        super(props);
        Cesium.Ion.defaultAccessToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Y2VkODRmZS03ODIxLTQ5Y2YtODZhZC00YjA1NWY2ZDFjNTIiLCJpZCI6MTg2ODY5LCJpYXQiOjE3MDM4MDE5OTZ9.nKsPGvUz0wpfj2VtRSD2hOoWUFNYdGeAe__tQN5EJRE";
    }

    async componentDidMount() {
        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const viewer = new Cesium.Viewer("cesiumContainer", {
            globe: false
        });

        try {
            const tileset = await Cesium.createGooglePhotorealistic3DTileset();
            viewer.scene.primitives.add(tileset);
        } catch (error) {
            console.log(`Failed to load tileset: ${error}`);
        }
    }

    render() {
        return <div id="cesiumContainer"></div>;
    }
}
