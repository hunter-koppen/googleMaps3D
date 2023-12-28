import { Component, createElement } from "react";

export class CesiumView extends Component {
    render() {
        return <div className="widget-hello-world">Hello {this.props.sampleText}</div>;
    }
}
