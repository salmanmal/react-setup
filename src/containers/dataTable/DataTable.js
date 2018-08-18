import React, { Component } from 'react';
import DataTables from 'mui-datatables';




export default class DataTable extends Component {

    handleFilterValueChange = (value) => {
        // your filter logic
    }

    handleSortOrderChange = (key, order) => {
        // your sort logic
    }

    render() {
        const TABLE_COLUMNS = [
            {
                key: 'name',
                label: 'Dessert (100g serving)',
            }, {
                key: 'calories',
                label: 'Calories',
            },

        ];

        const TABLE_DATA = [
            {
                name: 'Frozen yogurt',
                calories: '159',
                fat: '6.0',
                carbs: '24',

            }, {
                name: 'Ice cream sandwich',
                calories: '159',
                fat: '6.0',
                carbs: '24',

            },

        ];
        return (
            
            <DataTables
                height={'auto'}
                selectable={false}
                showRowHover={true}
                columns={TABLE_COLUMNS}
                data={TABLE_DATA}
                showCheckboxes={false}
                onCellClick={this.handleCellClick}
                onCellDoubleClick={this.handleCellDoubleClick}
                onFilterValueChange={this.handleFilterValueChange}
                onSortOrderChange={this.handleSortOrderChange}
                page={1}
                count={100}
            />
            
        );
    }
}