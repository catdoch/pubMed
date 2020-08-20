import React from 'react';
import { useDispatch } from 'react-redux';
import getCount from '../redux/actions';

// interface Props {
//     value?: string;
// }

const SearchButton = (props) => {
    const sendEvent = (value, dispatch) => {
        fetch(
            `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=20&retmode=json&term=${value}`
        )
            .then((response) => response.json())
            .then((data) => dispatch(getCount(data)));
    };

    const { value } = props;
    const dispatch = useDispatch();

    return (
        <button
            className="input-search"
            onClick={() => {
                sendEvent(value, dispatch);
            }}>
            Search now
        </button>
    );
};

export default SearchButton;
