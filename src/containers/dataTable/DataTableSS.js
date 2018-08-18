import React from 'react';

import SortableTbl from 'react-sort-search-table';
let MyData = 
[
    {
        "cat": 1,
        "_id": "d-rhe-428-j",
        
        "name": "RHE-428-J (4ch Compact)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "srd-482",
        
        "name": "SRD-482 (4ch)",
        "brand": "Samsung",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "sh3-04u",
        
        "name": "SH3-04U (4ch)",
        "brand": "SNM",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "d-rhe-828-j",
        
        "name": "RHE-828-J (8ch Compact)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"Network, USB 2.0 or SATA",
        "videoout":"HDMI, VGA, BNC"
    },
]
class BaseProductDeleteComponent extends React.Component{
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        alert("delete " + this.props.rowData.name);
        console.log(this.props.rowData, this.props.tdData);
    }
    render () {
        return (	
            <td >	
                <input type="button" className="btn btn-danger" value="Delete" onClick={this.deleteItem}/>
            </td>
        );
    }
}
 
BaseProductDeleteComponent.propTypes = {
    rowData: React.PropTypes.object,
    tdData: React.PropTypes.string,
};
 
 
 
 
function ProductTblImgpreloader() {
    return <div className="loading-div" style={{minHeight: "100px"}}/>;
}
 

 
 
 
 
const BaseProductTblImageComponent = (props) =>
{
    return (
        <td style={{width: '170px', minWidth: '170px', backgroundColor: '#fff'}} >
            
        </td>
    );
};
 
BaseProductTblImageComponent.propTypes = {
    rowData: React.PropTypes.object,
    tdData: React.PropTypes.string,
};
 
 
 
 
class BaseProductEditComponent extends React.Component{
    constructor(props) {
        super(props);
        this.editItem = this.editItem.bind(this);
    }
    editItem(){
        alert("edit " + this.props.rowData.name);
        console.log(this.props.rowData, this.props.tdData);
    }
    render () {
        return (	
            <td >	
                <input type="button" className="btn btn-warning" value="Edit" onClick={this.editItem}/>
            </td>
        );
    }
}
BaseProductEditComponent.propTypes = {
    rowData: React.PropTypes.object,
    tdData: React.PropTypes.string,
};
 
const ProductsTblPage = (props) =>{
    let col = [
        "imageUrl",
        "name",
        "brand",
        "type",
        "channel",
        "remote",
        "backup",
        "HDD",
        "videoout",
        "delete", 
        "edit"
    ];
    let tHead = [
        "Image",
        "Model",
        "Brand",
        "Type",
        "Channel",
        "Remote",
        "Backup",
        "HDD",
        "Video output",
        "Delete", 
        "Edit"		
    ];
 
    return (
        <SortableTbl tblData={MyData}
            tHead={tHead}
            customTd={[
                        {custd: BaseProductTblImageComponent, keyItem: "imageUrl"},
                        {custd: BaseProductEditComponent, keyItem: "edit"},
                        {custd: BaseProductDeleteComponent, keyItem: "delete"}
                        ]}
            dKey={col}
        />
    );
};
export default ProductsTblPage;
 

 