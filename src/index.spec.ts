import { Fixture, TestBed, flushMicroTasks, getByTestId, getByText, waitFor } from '@plumejs/testing';
import { vi } from 'vitest';
import { AppComponent } from './index';

describe('@plumejs/core Component', () => {
  let appRoot: Fixture<AppComponent>;

  it('translation should return "Welcome to PlumeJS"', async () => {
    vi.useFakeTimers();
    appRoot = await TestBed.MockComponent(AppComponent);
    const { componentInstance, element } = appRoot;
    expect(getByTestId(element, 'container')).toBeInTheDocument();
    const h1 = element.querySelector('h1');
    expect(h1.innerHTML).toBe('Welcome to PlumeJS');
    // testing component internals
    // expect(componentInstance.title).toBe('');
    // vi.advanceTimersByTime(2000);
    // expect(componentInstance.title).toBe('Hello world');
    // console.log('title', componentInstance.title);
    // console.log(element.innerHTML);

    // testing dom changes
    expect(getByText(element, 'Loading')).toBeInTheDocument();
    expect(getByTestId(element, 'loader')).toBeInTheDocument();
    vi.advanceTimersByTime(2000);
    expect(componentInstance.title).toBe('Hello world');
    await waitFor(flushMicroTasks());
    expect(getByText(element, componentInstance.title)).toBeInTheDocument();
    expect(getByTestId(element, 'content')).toBeInTheDocument();
  });

  afterEach(() => {
    TestBed.RemoveComponent(appRoot);
  });
});
