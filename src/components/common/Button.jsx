import React 		from 'react';
import PropTypes 	from 'prop-types';


const Button = props =>

    <button
            className={props.className}
            type={props.type}
            onClick={props.handleClick}
            disabled={props.disabled}>

        {props.content}

    </button>;


Button.propTypes = {
    handleClick: 	PropTypes.func.isRequired,
    className: 		PropTypes.string,
};

Button.defaultProps = {
    type: 		'button',
    disabled: 	null
};


export default Button;
