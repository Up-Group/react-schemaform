﻿import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { UpFormControl } from "../UpForm/UpFormControl"
import { TypeDateControl, dateFormat } from "../ControlError/TypeDateControl"

export default class UpDate extends UpFormControl<Date> {

        this._ControlErrorCentral.addControl(new TypeDateControl(dateFormat.date));
    }
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEventGlobal);
    }

        return <div className='input-group date' style={{ marginBottom: "3px" }} ref={(input) => { this.inputElementGroup = input; } } >
            <input
                ref={(input) => { this.inputElement = input; } }
                style={this.state.hasError === true ? { borderColor: "red" } : null}
                type='text'
                className="form-control" />
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
            </span>
        </div>

    }

    handleChangeJsEvent(event: any) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            return event.date.toDate();
        }
        return null;
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

