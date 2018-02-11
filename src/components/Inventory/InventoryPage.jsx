import React    from 'react';
import {inject, observer} from 'mobx-react';

import InventoryHeader    from './InventoryHeader';
import InventoryList      from './InventoryList';
// import withAuth from '../hoc/withAuth';



class InventoryPage extends React.Component {

    render() {
        const {fetchInventory, isPending, list, pages} = this.props.store.models.inventory;

        return (
            <div className="container-fluid">
                <InventoryHeader />

                <InventoryList
                    fetchMore={fetchInventory}
                    list={list}
                    loading={isPending}
                    pages={pages} />
            </div>
        )

        // return (
        //     <div>
        //         <h2>Protected Page</h2>
        //         <h3>Data for authorized users only</h3>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo laudantium numquam praesentium repellendus! Atque dolorem exercitationem, hic, illum ipsa minus molestiae mollitia provident repudiandae sit unde veniam. Minima, sit!</p>
        //         {/*<pre>*/}
        //         {/*<code>{JSON.stringify(props)}</code>*/}
        //         {/*</pre>*/}
        //     </div>
        // )
    }
}


InventoryPage.returnUrl = 'inventory';


export default inject('store')(observer(InventoryPage));
// export default withAuth(inject('store')(observer(InventoryPage)));
