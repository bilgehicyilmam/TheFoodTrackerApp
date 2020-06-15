import { LowercasePipe } from './lowercase.pipe';

describe('LowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new LowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
