import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List'

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode('div');
    })

    it('renders the UI as expected' () => {
        const tree = renderer
            .create(
                <List 
                key={1}
                header={First List}
                cards={list.cardIds.map(id => store.allCards[id])}
                />)
            .toJSON();
        expectAllDeclaration(tree).toMatchSnapshot();
    })
})