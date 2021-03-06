import React    from 'react';
import withAuth from '../hoc/withAuth';


const ProtectedPage = (props) => (
    <div>
        <h2>Protected Page</h2>
        <h3>Data for authorized users only</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo laudantium numquam praesentium repellendus! Atque dolorem exercitationem, hic, illum ipsa minus molestiae mollitia provident repudiandae sit unde veniam. Minima, sit!</p>
        {/*<pre>*/}
        {/*<code>{JSON.stringify(props)}</code>*/}
        {/*</pre>*/}
    </div>
);

ProtectedPage.returnUrl = 'protected';


export default withAuth(ProtectedPage);
