import React from 'react';
import { render, screen } from '@testing-library/react';
import Journal from './journal';

const data = {
  data: {
      uid: '32809478',
      authors: [{ name: 'Khatter NJ', authtype: 'Author' }],
      pubdate: '2020 Jan',
      fulljournalname: 'full journal name',
      title: 'title of journal'
  },
};

const SUT = render(<Journal data={data} />);

test('renders Journal component', () => {
    expect(SUT).toMatchSnapshot();
});
