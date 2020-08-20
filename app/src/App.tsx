import React from 'react';
import { useSelector } from 'react-redux';

import Input from './components/input';
import Journal from './components/journal';
import loading from './loading.gif';

import './App.scss';

const App: React.FC = () => {
    const {
        data: { count, searchResult, isLoading },
    } = useSelector((state: any) => state);

    console.log(isLoading);

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
                        <h2 className="count">{`${count?.esearchresult?.count} journals found`}</h2>
                    )}
                    {searchResult && searchResult !== undefined && <Journal data={searchResult} />}
                </div>
            )}
        </>
    );
};

export default App;
