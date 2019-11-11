import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { CheckedIcon, BoxIcon } from "./canvas"

export function Checkbox(props) {
    const { checked } = props

    return (
        <Frame name="TouchTarget">
            <BoxIcon center />
            {checked && <CheckedIcon center />}
        </Frame>
    )
}

Checkbox.defaultProps = {
    checked: false,
}

addPropertyControls(Checkbox, {
    checked: {
        title: "checked",
        type: ControlType.Boolean,
        defaultValue: true,
    },
})
