import React from 'react';
import { useDispatch } from 'react-redux';
import { sendEvent } from '../util/api';

interface Props {
    value?: string;
}

const SearchButton: React.FC<Props> = (props) => {
    const { value } = props;
    const dispatch = useDispatch();

    return (
        <button
            className="input-search"
            onClick={() => {
                sendEvent(value, dispatch);
                window.history.replaceState(null, 'title', `?title=${value}`);
            }}>
            Search now
        </button>
    );
};

SearchButton.defaultProps = {
    value: '',
}

export default SearchButton;
