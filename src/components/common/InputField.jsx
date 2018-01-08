import React 		from 'react';
import PropTypes 	from 'prop-types';


export default class InputField extends React.Component {

    onChange = (event) => this.props.onChange(event.target.name, event.target.value);

    render () {
        const id = this.props.id || this.props.label || this.props.placeholder;

        return (
            <div className={this.props.className}>
                <label htmlFor={id}>{this.props.label}</label>
                <input
                    id={id}
                    name={this.props.name}
                    onChange={this.onChange}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    type={this.props.type}
                    value={this.props.value}/>
            </div>
        )
    }
}


InputField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

InputField.defaultProps = {
    required: null,
    type: 'text',
};
