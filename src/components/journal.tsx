import React from 'react';

import './journal.scss';

interface Props {
    data?: {};
}

const Journal: React.FC<Props> = (props) => {
    const results: any = props.data;
    delete results['uids'];
    return (
        <>
            <div>
                {Object.keys(results).map((key) => (
                    <div className="journal" key={results[key].uid}>
                        <h3 className="journal-title">{results[key].title}</h3>
                        {results[key].fulljournalname && (
                            <p className="journal-name">{`in ${results[key].fulljournalname}`}</p>
                        )}
                        <p className="journal-pubDate">{results[key].pubdate}</p>
                        <div className="journal-author">
                            By:{' '}
                            {results[key].authors.map((el: any) => (
                                <p key={el.name}>{el.name}</p>
                            ))}
                        </div>
                        <a
                            className="journal-link"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={`https://pubmed.ncbi.nlm.nih.gov/${results[key].uid}`}>
                            View journal
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Journal;
