import * as React from "react"
import { PropertyControls, ControlType } from "framer"

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    overflow: "hidden",
    fontWeight: "bold",
}

interface Props {
    text: string
    fill: string
    radius: number
}

export class Button extends React.Component<Props> {
    static defaultProps = {
        text: "Get Started",
        fill: "#09F",
        radius: 100,
        width: 150,
        height: 50,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        fill: { type: ControlType.Color, title: "Fill" },
        radius: { type: ControlType.Number, title: "Radius" },
    }

    render() {
        return (
            <div
                style={{
                    ...style,
                    background: this.props.fill,
                    borderRadius: this.props.radius,
                }}
            >
                {this.props.text}
            </div>
        )
    }
}
