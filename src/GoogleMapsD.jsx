import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/GoogleMapsD.css";

export class GoogleMapsD extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
