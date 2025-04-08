import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

interface DemoButtonProps {
  text: string;
  onClick: () => void;
}

function DemoButton({ text, onClick }: DemoButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

describe('DemoButton component', () => {
  it('renders with the correct label', async () => {
    render(<DemoButton text="Click me" onClick={() => {}} />);

    await screen.findByRole('button');

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('calls the onClick handler when clicked', async () => {
    const spyHandleClick = vi.fn();
    render(<DemoButton text="Click me" onClick={spyHandleClick} />);

    await userEvent.click(screen.getByText('Click me'));

    expect(spyHandleClick).toHaveBeenCalledTimes(1);
  });
});
