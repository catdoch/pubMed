import { getCount, updateData, getLoading } from '../redux/actions';

const sendEvent = async (value: string | undefined, dispatch: (action: any) => void) => {
    dispatch(getLoading(true));
    const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmax=20&retmode=json&term=${value}`);
    const json = await response.json();
    dispatch(getCount(json?.esearchresult?.count));
    listJournalsEvent(json?.esearchresult?.idlist, dispatch);
};

const listJournalsEvent = async(ids: [string], dispatch: (action: any) => void) => {
    const idJoin = ids.join(',');

    const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${idJoin}`);
    const json = await response.json();
    
    dispatch(updateData(json.result));
    dispatch(getLoading(false));
};


export { sendEvent };