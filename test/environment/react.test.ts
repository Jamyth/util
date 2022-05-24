describe('When installed React', () => {
    beforeEach(() => {
        jest.mock('react', () => null, { virtual: true });
    });

    test('React is mocked', () => {
        const React = require('react');
        expect(React).toBe(null);
    });

    test('ReactUtil is correctly exported', () => {
        const { ReactUtil } = require('../../src');
        expect(ReactUtil).not.toBe(null);
    });

    test('useAPI is correctly exported', () => {
        const { useAPI } = require('../../src');
        expect(useAPI).not.toBe(null);
    });

    test('useBool is correctly exported', () => {
        const { useBool } = require('../../src');
        expect(useBool).not.toBe(null);
    });

    test('useDidMountEffect is correctly exported', () => {
        const { useDidMountEffect } = require('../../src');
        expect(useDidMountEffect).not.toBe(null);
    });

    test('useForceUpdate is correctly exported', () => {
        const { useForceUpdate } = require('../../src');
        expect(useForceUpdate).not.toBe(null);
    });

    test('usePrevious is correctly exported', () => {
        const { usePrevious } = require('../../src');
        expect(usePrevious).not.toBe(null);
    });

    test('useWhyDidYouUpdate is correctly exported', () => {
        const { useWhyDidYouUpdate } = require('../../src');
        expect(useWhyDidYouUpdate).not.toBe(null);
    });

    test('useWillUnmountEffect is correctly exported', () => {
        const { useWillUnmountEffect } = require('../../src');
        expect(useWillUnmountEffect).not.toBe(null);
    });
});
