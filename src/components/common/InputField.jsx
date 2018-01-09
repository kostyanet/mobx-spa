import React 		from 'react';
import PropTypes 	from 'prop-types';


const InputField = props => (

    <div className={props.className}>
        <label htmlFor={props.id || props.name}>{props.label}</label>

        <input
            id={props.id || props.name}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            required={props.required}
            type={props.type}
            value={props.value}/>

    </div>
);


InputField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

InputField.defaultProps = {
    required: null,
    type: 'text',
};


export default InputField;
