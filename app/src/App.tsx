import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getUrlParameter from './util/get-param';
import { sendEvent } from './util/api';
import Input from './components/input';
import Journal from './components/journal';
import loading from './loading.gif';

import './App.scss';

interface dataProperties {
    count?: string;
    searchResult?: any;
    isLoading?: boolean;
}

interface State {
    data: dataProperties
};

const App: React.FC = () => {
    const dispatch = useDispatch();
    const {
        data: { count, searchResult, isLoading },
    } = useSelector((state: State) => state);

    useEffect(() => {
        const titleParam = getUrlParameter(window.location.search, 'title');
        sendEvent(titleParam, dispatch);
    }, []);

    return (
        <>
            <header>
                <h1>Pub Med Journal Search</h1>
            </header>
            <div className="form-container">
                <Input id="input" placeholder="search here for journals..." />
            </div>
            {isLoading ? (
                <div className="loading"><img src={loading} alt="loading" /></div>
            ) : (
                <div>
                    {count && (
                        <h2 className="count">{`${count} journals found`}</h2>
                    )}
                    {searchResult && searchResult !== undefined && <Journal data={searchResult} />}
                </div>
            )}
        </>
    );
};

export default App;
