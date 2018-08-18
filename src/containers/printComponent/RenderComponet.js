import React from 'react';

import PrintPDF from '../../components/printPDF/PrintPDF';

export default class RenderComponent extends React.Component {

    onButtonClick = () => {
        document.getElementById("printThisOut").click();
    }
    render() {
        return <div>
            <button onClick={this.onButtonClick}>Print</button>
            <div>
                <PrintPDF >
                    <h1>Myname is Salman</h1>
                    </PrintPDF>
            </div>
        </div>
    }
}