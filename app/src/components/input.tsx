import React, { Component } from 'react';

import SearchButton from './search-button';

/**
 * NOTE seems @types/react is not handling defaultProps for
 * class components properly, so we take following approach.
 */
interface OwnProps {
    id: string;
    inline?: boolean;
    placeholder?: string;
    inputRef?: (...args: any[]) => void;
    name?: string;
    onInput?: (...args: any[]) => void;
    type?: string;
    /**
     * Can be passed down from `Field` component.
     */
    errorMessages?: any;
}
const defaultProps = {
    inline: false,
    inputRef: () => {},
    onInput: () => {},
    type: 'text',
};

type Props = OwnProps & typeof defaultProps;

interface State {
    value: string;
}

class Input extends Component<Props, State> {
    static defaultProps = defaultProps;

    state = {
        value: ''
    };

    /** Initialised in `handleInputRef`. */
    private input!: HTMLInputElement;

    handleClear = () => {
        this.input.value = '';
        const event = new Event('input', { bubbles: true });
        this.input.dispatchEvent(event);
        this.input.focus();
    };

    handleInput = (event: any) => {
        this.setState({
            value: event.currentTarget.value,
        });
        const { onInput } = this.props;
        onInput(event);
    };

    handleInputRef = (element: HTMLInputElement) => {
        this.input = element;
        const { inputRef } = this.props;
        inputRef(element);
        
    };

    render() {
        const {
            id,
            inline,
            name = id,
            type,
            inputRef: _,
            placeholder,
            errorMessages: __,
            ...props
        } = this.props;

        const { value } = this.state;

        return (
            <div className="form-container-input">
                <input
                    {...props}
                    type="input"
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    onChange={this.handleInput}
                    ref={this.handleInputRef}
                />
                {value?.length > 0 && (
                    <>
                        <button
                            aria-label="Clear input"
                            type="button"
                            className="input-clear"
                            onClick={this.handleClear}
                        >x</button>
                        <SearchButton value={value} />
                    </>
                )}
            </div>
        );
    }
}

export default Input;
