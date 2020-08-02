import { render } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import reducers from '../../flux/reducers';
import ChangeOrderButton from "../ChangeOrderButton";

describe('ChangeOrderButton component unit tests', () => {
    test('ChangeOrderButton should render properly', () => {
        const { container } = render(
            <HouxProvider reducers={reducers}>
                <ChangeOrderButton id={1} />
            </HouxProvider>,
        );
        expect(container).toMatchSnapshot();
    });
});
