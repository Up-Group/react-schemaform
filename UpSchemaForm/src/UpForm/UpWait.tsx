﻿import * as React from "react";
import UpSchemaFormComponentSelector from "./UpSchemaFormComponentSelector"
import {UpFormControl} from "./UpFormControl";
import ErrorMemory from "./ErrorMemory"
import HelperMemory from "./HelperMemory"

interface UpWaitProps {
    wait: boolean;
    text?: string;
}

export default class UpWait extends React.Component<UpWaitProps, {}> {

        super(p, c);
    }

    render() {
                {this.props.text != null ? this.props.text : "Requête en cours"}
                <br/>
                <img alt="" src="Components/up-utilities/pdfviewer/web/images/loading-icon.gif"/>
            </div>





}
