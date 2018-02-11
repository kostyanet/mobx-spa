import React    from 'react';
import {inject, observer} from 'mobx-react';

import InventoryHeader    from './InventoryHeader';
import InventoryList      from './InventoryList';
// import withAuth from '../hoc/withAuth';



class InventoryPage extends React.Component {

    toBeRemovedList = [];


    handleCreate = _ => { /*todo*/ };

    handleEdit = _ => { /*todo*/ };

    handleRemove = _ => {
        let idList = Array.from(this.toBeRemovedList).map(checkbox => checkbox.dataset.id);

        this.props.store.models.inventory.removeItems(idList)
            .then(_ => {
                this.toBeRemovedList.forEach(checkbox => checkbox.checked = null);
                this.toBeRemovedList = [];
            });
    };

    handleSelect = eventTarget => {
        if (eventTarget.checked) {
            this.toBeRemovedList.push(eventTarget);

        } else {
            let idx = this.toBeRemovedList.indexOf(eventTarget);
            this.toBeRemovedList.splice(idx, 1);
        }
    };


    render() {
        const {fetchInventory, isPending, list, pages} = this.props.store.models.inventory;

        return (
            <div className="container-fluid">
                <InventoryHeader
                    handleEdit={this.handleEdit}
                    handleCreate={this.handleCreate}
                    handleRemove={this.handleRemove} />

                <InventoryList
                    fetchMore={fetchInventory}
                    handleSelect={this.handleSelect}
                    list={list}
                    loading={isPending}
                    pages={pages} />
            </div>
        )
    }
}


InventoryPage.returnUrl = 'inventory';


export default inject('store')(observer(InventoryPage));
// export default withAuth(inject('store')(observer(InventoryPage))); // todo: revert when done
