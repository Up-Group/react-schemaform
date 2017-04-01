﻿import * as React from "react";
import UpSchemaFormComponentSelector from "./UpForm/UpSchemaFormComponentSelector"
import { UpFormControl } from "./UpForm/UpFormControl";
import ErrorMemory from "./UpForm/ErrorMemory"
import HelperMemory from "./UpForm/HelperMemory"

interface UpSchemaFormProps {
    schema: JsonSchema;
    onFormEror: (data: boolean) => void;
    onFormPayload: (data: any) => void;
}

export default class UpSchemaForm extends React.Component<UpSchemaFormProps, {}> {

    errorMemory = new ErrorMemory();

    constructor(p, c) {
        super(p, c);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.schema.title}
                </div>
                <div className="panel-body">
                    <UpSchemaFormComponentSelector isRequired={false}  schema={this.props.schema} node={""} onFormChange={this.onFormChange}  onFormError={this.onFormError} ></UpSchemaFormComponentSelector>
                </div>
                <div className="panel-footer">
                    {this.props.children}
                </div>
            </div >
        );
    }



    onFormError = (node: string) => {
        this.errorMemory.errorOn(node);
        this.props.onFormEror(true);

    }

    onFormChange = (newValue: any, node: string) => {
        var nodeArray = node.split(".");
        nodeArray.shift();

        this.setState(HelperMemory.AssignValue(this.state, nodeArray, newValue), () => {
            this.errorMemory.cleanErrorOn(node); 
            this.updateState();
        });

    }

    updateState() {
        if (this.errorMemory.hasError) {
            this.props.onFormEror(true);

        } else {
            this.props.onFormPayload(this.state);
            this.props.onFormEror(false);

        }
    }

    private newObject(nodes, value) {
        var obj = {};
        var prop = nodes.shift();
        if (nodes.length == 0) {
            obj[prop] = value;
        } else {
            obj[prop] = this.newObject(nodes, value);
        }
        return obj;

    }


}
