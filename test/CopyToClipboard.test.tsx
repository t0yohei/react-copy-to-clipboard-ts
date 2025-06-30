import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { CopyToClipboard } from '../src';
import CopyToClipboardDefault from '../src'; // Default import test

// Mock copy-to-clipboard
vi.mock('copy-to-clipboard', () => ({
  default: vi.fn().mockReturnValue(true),
}));

describe('CopyToClipboard', () => {
  it('renders children correctly', () => {
    render(
      <CopyToClipboard text="test">
        <button type="button">Copy</button>
      </CopyToClipboard>
    );

    expect(screen.getByRole('button').textContent).toBe('Copy');
  });

  it('renders children correctly with default import', () => {
    render(
      <CopyToClipboardDefault text="test">
        <button type="button">Copy Default</button>
      </CopyToClipboardDefault>
    );

    expect(screen.getByRole('button').textContent).toBe('Copy Default');
  });

  it('calls onCopy when clicked', async () => {
    const onCopy = vi.fn();
    render(
      <CopyToClipboard text="test" onCopy={onCopy}>
        <button type="button">Copy</button>
      </CopyToClipboard>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onCopy).toHaveBeenCalledWith('test', true);
  });

  it('calls onCopy when clicked (default import)', async () => {
    const onCopy = vi.fn();
    render(
      <CopyToClipboardDefault text="test" onCopy={onCopy}>
        <button type="button">Copy</button>
      </CopyToClipboardDefault>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onCopy).toHaveBeenCalledWith('test', true);
  });

  it('passes onClick to children if present', async () => {
    const childOnClick = vi.fn();
    render(
      <CopyToClipboard text="test">
        <button type="button" onClick={childOnClick}>
          Copy
        </button>
      </CopyToClipboard>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(childOnClick).toHaveBeenCalled();
  });

  it('handles nested children correctly', async () => {
    const onCopy = vi.fn();
    render(
      <CopyToClipboard text="test" onCopy={onCopy}>
        <div>
          <span>Click me</span>
          <span>Nested content</span>
        </div>
      </CopyToClipboard>
    );

    await userEvent.click(screen.getByText('Click me'));
    expect(onCopy).toHaveBeenCalledWith('test', true);
  });

  it('passes additional props to children', () => {
    render(
      <CopyToClipboard text="test">
        <button type="button" data-testid="test-button">
          Copy
        </button>
      </CopyToClipboard>
    );

    expect(screen.getByTestId('test-button')).toBeDefined();
  });

  it('verifies named and default exports reference the same component', () => {
    expect(CopyToClipboard).toBe(CopyToClipboardDefault);
  });
});
