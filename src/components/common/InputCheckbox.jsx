import React 		from 'react';
import PropTypes 	from 'prop-types';


export default class InputCheckbox extends React.Component {

    onChange = (event) => this.props.onChange(event.target.name, event.target.value);

    render () {
        const {className, isChecked, id, label} = this.props;

        return (
            <div className={className}>
                <label htmlFor={id || label}>
                    <input type="checkbox" name={label} id={id || label}
                           checked={isChecked} onChange={this.onChange}/> {label}
                </label>
            </div>
        )
    }
}

InputCheckbox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
