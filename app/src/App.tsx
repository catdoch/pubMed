import React from 'react';
import { useSelector } from 'react-redux';

import Input from './components/input';

import './App.scss';

const App: React.FC = () => {
    const { data: { count } } = useSelector((state: any) => state);

    return (
        <>
            <header>
                <h1>Pub Med Journal Search</h1>
            </header>
            <div className="form-container">
                <Input id="input" placeholder="search here for journals..." />
            </div>
            <div>
                <h2>{`Count is ${count}`}</h2>
            </div>
        </>
    );
};

export default App;
