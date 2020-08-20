import React from 'react';
import { useDispatch } from 'react-redux';
import { getCount, updateData, getLoading } from '../redux/actions';

// interface Props {
//     value?: string;
// }

const SearchButton = (props) => {
    const listJournalsEvent = async(ids) => {
        const idJoin = ids.join(',');

        const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${idJoin}`);
        const json = await response.json();
        
        dispatch(updateData(json.result));
    };

    const sendEvent = async (value, dispatch) => {
        dispatch(getLoading(true));
        const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=20&retmode=json&term=${value}`);
        const json = await response.json();
        dispatch(getCount(json));
        dispatch(getLoading(false));
        listJournalsEvent(json?.esearchresult?.idlist);
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
