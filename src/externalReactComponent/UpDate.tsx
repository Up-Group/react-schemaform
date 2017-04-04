﻿import * as $ from "jquery";
import "eonasdan-bootstrap-datetimepicker"
import * as React from "react";
import * as ReactDOM from "react-dom";
import { UpFormControl } from "../UpForm/UpFormControl"
import { TypeDateControl, dateFormat } from "../ControlError/TypeDateControl"


interface UpDateProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
}

interface UpDateState {
    value?: Date;
}

export default class UpDate extends React.Component<UpDateProps, UpDateState> {

    }
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    }

        return <div className='input-group date' style={{ marginBottom: "3px" }} ref={(input) => { this.inputElementGroup = input; } } >
            <input
                //ref={(input) => { this.inputElement = input; } }
                style={this.props.hasError === true ? { borderColor: "red" } : null}
                type='text'
                className="form-control" />
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
            </span>
        </div>

    }

    handleChangeJsEvent(event: any) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange)
            return ;

        }
        return null;
    }

    }
    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

