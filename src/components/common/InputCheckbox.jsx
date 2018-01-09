import React 		from 'react';
import PropTypes 	from 'prop-types';


const InputCheckbox = props => (

    <div className={props.className}>
        <label htmlFor={props.id || props.label}>

            <input type="checkbox" name={props.label} id={props.id || props.label}
                   checked={props.isChecked} onChange={props.onChange}/> {props.label}

        </label>
    </div>
);


InputCheckbox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default InputCheckbox;
