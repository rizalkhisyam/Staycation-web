import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom'

import Button from './index';

test("tidak bisa diklik jika ada isDisbaled", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

test("harus render loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector('span')).toBeInTheDocument()
});

test("harus render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})

test("harus render <Link> component", () => {
    const {container} = render(<Router><Button href="" type="link" isExternal></Button></Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
})
