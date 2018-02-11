import React    from 'react';
import './InventoryPage.sass';


const InventoryHeader = props => (
    <div className="btn-group" role="group" aria-label="inventory-header">
        <button onClick={props.handleEdit} type="button" className="btn btn-secondary">Edit</button>
        <button onClick={props.handleCreate} type="button" className="btn btn-secondary">Create</button>
        <button onClick={props.handleRemove} type="button" className="btn btn-secondary">Remove Selected</button>
    </div>
);

export default InventoryHeader;
