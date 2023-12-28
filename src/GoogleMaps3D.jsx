import { Component, createElement } from "react";

import { CesiumView } from "./components/CesiumView";
import "./ui/GoogleMaps3D.css";

export class GoogleMaps3D extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
