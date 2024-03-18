import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('should render a button', () => {
        render(<Button label="Click me" />);
        expect(screen.getByText('Click me')).toBeVisible();
    });

    // it('should be defined', () => {
    //     const test = undefined;
    //     expect(test).toBeDefined();
    // });
});

/* eslint-env jest */