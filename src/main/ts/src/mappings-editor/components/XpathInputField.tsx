import * as React from 'react';

interface XpathInputFieldProps {
    fieldValue : string
    onChange : (xpath : string) => void
}

interface XpathInputFieldState {
    fieldValue : string
}

export default class XpathInputField extends React.Component<XpathInputFieldProps, XpathInputFieldState> {
    constructor(props : XpathInputFieldProps) {
        super(props);
        this.state = {
            fieldValue : null
        }
    }


    render() {
        return (
            <input type="text" placeholder="xpath..." 
                value={this.state.fieldValue === null ? this.props.fieldValue : this.state.fieldValue} 
                onChange={(ev) => this.setState({...this.state, fieldValue: ev.target.value})}
                onBlur={(ev) => { 
                    this.props.onChange(ev.target.value);
                    this.setState({...this.state, fieldValue: null})
                }}
            />
        );
    }
}