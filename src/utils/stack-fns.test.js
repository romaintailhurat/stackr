import { findItemById } from './stack-fns'

test('find an item by its id and check its text', () => {
  const stack = [{ id: 1234, text: 'find-me'}];
  const found = stack.find(el => findItemById(el, 1234))
  expect(found.text).toBe('find-me');
});
