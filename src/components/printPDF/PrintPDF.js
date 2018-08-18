import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
    render() {
        return (

            <div className="printContainer">
                {this.props.children}
            </div>
        );
    }
}

export default class PrintPDF extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#" id="printThisOut">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} >
                    {this.props.children}
                </ComponentToPrint>
            </div>
        );
    }
}
