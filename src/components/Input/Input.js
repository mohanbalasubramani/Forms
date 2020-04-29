import React, { PureComponent } from 'react'
import './style.css';

class Input extends PureComponent {

    // constructor( props ){
    //     super( props );
    //     this.state = {
    //         empty: ( !props.value || ( props.value && props.value === '' ) ),
    //         valid: undefined
    //     }
    // }

    // static defaultProps = {
    //     alwaysShowLabel: false,
    //     clear: false,
    //     disabled: false,
    //     error: false,
    //     focus: false,
    //     loading: false,
    //     required: false,
    //     type: 'text',
    //     validate: false,
    //     showLabel: true
    // }

    // componentDidMount() {
        
    // }
    // handleChange = e => {

    //     const check = event => {
    //         this.setState({ valid: this.refs.input.checkValidity() });
    //         if( this.props.onChange ) this.props.onChange( event );
    //         if( this.props.callback ) this.props.callback( event );
    //     },
    //     empty = ( e.target.value === '' );

    //     if( this.debounce ) clearTimeout( this.debounce );

    //     if( this.props.debounce ){            
    //         this.debounce = setTimeout( check, this.props.debounce, { ...e } );
    //     } else {
    //         check( e );
    //     }

    //     if( empty !== this.state.empty ) this.setState({ empty });

    // }
    handleChange(e){
        console.log("object",e.target.value)
    }
    render() {
        return (
            <input name="test" onChange={this.handleChange} placeholder={ this.props.placeholder }/>
        )
    }
}

export default Input;