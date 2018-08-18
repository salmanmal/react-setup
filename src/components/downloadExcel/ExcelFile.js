import Workbook from 'react-excel-workbook'
import React from 'react';
import moment from 'moment';

import './ExcelFile.scss';


const excel = (props) => {
    
    const columns = Object.keys(props.data[0]);
    return (<div className="row text-center" style={{ marginTop: '100px' }}>
        <Workbook filename={props.filename+"_("+moment().format('MM-DD-YYYY HH:mm:ss')+").xlsx"} element={<button className="btn btn-lg btn-primary hidebtn" id="clickdownloadbutton">Download Your Excel File!</button>}>
            <Workbook.Sheet data={props.data} name="Sheet A">
                {columns.map((item) => { return <Workbook.Column label={item} value={item} /> })}
            </Workbook.Sheet>
        </Workbook>
    </div>
    );
}

export default excel;