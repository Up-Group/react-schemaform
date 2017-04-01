﻿import * as React from "react";
import {UpFormControl} from "../UpForm/UpFormControl"
import TypeNumberControl from "../ControlError/TypeNumberControl"
import UpFile from "../ReactComponent/UpFile"

export default class UpUpload extends UpFormControl<number[]> {

    }
    }
        return <UpFile onError={this.setSpecificError} hasError={this.state.hasError} onChange={this.handleChangeJsEventGlobal} fileExtension={this.props.schema.fileExtension}/>
    }

    handleChangeJsEvent(event: any) {
        return event;
    }

    isEmpty(value) {
        return value === null || value === [] || value === "";
    }


}