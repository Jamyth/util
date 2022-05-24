/**
 * @jest-environment jsdom
 */
describe('In Browser Environment', () => {
    test('BrowserUtil is correctly exported', () => {
        const { BrowserUtil } = require('../../src');
        expect(BrowserUtil).not.toBe(null);
    });

    test('ClipboardUtil is correctly exported', () => {
        const { ClipboardUtil } = require('../../src');
        expect(ClipboardUtil).not.toBe(null);
    });

    test('LocalStorageUtil is correctly exported', () => {
        const { LocalStorageUtil } = require('../../src');
        expect(LocalStorageUtil).not.toBe(null);
    });

    test('SessionStorageUtil is correctly exported', () => {
        const { SessionStorageUtil } = require('../../src');
        expect(SessionStorageUtil).not.toBe(null);
    });
});

describe('When not installed React', () => {
    jest.mock(
        'react',
        () => {
            throw new Error('Module not found');
        },
        { virtual: true },
    );

    test('React is not found', () => {
        expect(() => require('react')).toThrow();
    });

    test('ReactUtil is null', () => {
        const { ReactUtil } = require('../../src');
        expect(ReactUtil).toBe(null);
    });

    test('useAPI is null', () => {
        const { useAPI } = require('../../src');
        expect(useAPI).toBe(null);
    });

    test('useBool is null', () => {
        const { useBool } = require('../../src');
        expect(useBool).toBe(null);
    });

    test('useDidMountEffect is null', () => {
        const { useDidMountEffect } = require('../../src');
        expect(useDidMountEffect).toBe(null);
    });

    test('useForceUpdate is null', () => {
        const { useForceUpdate } = require('../../src');
        expect(useForceUpdate).toBe(null);
    });

    test('usePrevious is null', () => {
        const { usePrevious } = require('../../src');
        expect(usePrevious).toBe(null);
    });

    test('useWhyDidYouUpdate is null', () => {
        const { useWhyDidYouUpdate } = require('../../src');
        expect(useWhyDidYouUpdate).toBe(null);
    });

    test('useWillUnmountEffect is null', () => {
        const { useWillUnmountEffect } = require('../../src');
        expect(useWillUnmountEffect).toBe(null);
    });
});
