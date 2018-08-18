import React from 'react';
import Excel  from '../../components/downloadExcel/ExcelFile';


class CsvToExcel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            csvData: "",
            excelData: []
        }
    }
    inputChange = (e) => {
        debugger;
        const value = e.target.value;
        if (value != this.state.csvData) {
            this.setState({ csvData: value });
        }
    }
    downloadExcel = () => {
        try {
            const rowString=this.state.csvData;
            const data = JSON.parse(this.state.csvData);
            this.setState({excelData:data},()=>{document.getElementById("clickdownloadbutton").click()});
        }
        catch (e) {
            alert("please enter JSON Array only.")
        }
    }
    render() {


        return (
            <div>
                <span>Please Enter your JSON Array here</span><br />
                <textarea onChange={this.inputChange} name="csvData" value={this.state.csvData} />
                <button onClick={this.downloadExcel} >Download Excel</button>
                {this.state.excelData.length > 0 ? <Excel data={this.state.excelData} filename="smcsvtoexcel" /> : ""}
            </div>
        );
    }
}

export default CsvToExcel;