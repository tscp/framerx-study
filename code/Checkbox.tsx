import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { CheckedIcon, BoxIcon } from "./canvas"

export function Checkbox(props) {
    const { checked } = props

    const [isChecked, setIsChecked] = React.useState(checked)

    React.useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    const toggleIsChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <Frame name="TouchTarget" onTap={toggleIsChecked}>
            <BoxIcon center />
            {isChecked && <CheckedIcon center />}
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
