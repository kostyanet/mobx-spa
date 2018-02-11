import React        from 'react';
import {observer}   from 'mobx-react';

import ReactTable                         from 'react-table';
import 'react-table/react-table.css';

import AppValues                          from '../../config/app-values';
import {DateCell, PriceCell, QualityCell} from './CellRenderers';
import './InventoryPage.sass';



@observer class InventoryList extends React.Component {

    columns = [
        {
            Header: 'Title',
            accessor: 'title',
            width: 200
        }, {
            Header: 'Category',
            accessor: 'department',
            width: 100
        }, {
            Header: 'Price',
            accessor: 'price',
            width: 100,
            Cell: PriceCell
        }, {
            Header: 'Quality',
            accessor: 'quality',
            width: 120,
            Cell: QualityCell
        }, {
            Header: 'Produced',
            accessor: 'produced',
            width: 100,
            Cell: DateCell
        }, {
            Header: 'Description',
            accessor: 'description',
            width: 200
        }
    ];


    fetchMore = state => this.props.fetchMore(state.pageSize, state.page);


    render() {
        const {list, loading, pages} = this.props;

        return <ReactTable
            className="-striped -highlight InventoryTable"
            columns={this.columns}
            data={Array.from(list)}
            defaultPageSize={AppValues.DEFAULT_PAGE_SIZE}
            loading={loading}
            manual
            onFetchData={this.fetchMore}
            pages={pages}
        />
    }
}


export default InventoryList;