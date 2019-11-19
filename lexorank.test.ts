import {RankUtils} from '../../src/utilities/rank.utilities';
import {expect} from '@loopback/testlab';

describe('Rank', () => {
  let _rank = new RankUtils();
  it('Test success empty prev empty next', async () => {
    let [rank, ok] = _rank.insert('', '');
    expect(rank).equal('U');
    expect(ok).equal(true);
  });

  it('Test success empty prev', async () => {
    let [rank, ok] = _rank.insert('', '2');
    expect(rank).equal('1');
    expect(ok).equal(true);
  });

  it('Test success empty next', async () => {
    let [rank, ok] = _rank.insert('x', '');
    expect(rank).equal('y');
    expect(ok).equal(true);
  });

  it('Test success new digit', async () => {
    let [rank, ok] = _rank.insert('aaaa', 'aaab');
    expect(rank).equal('aaaaU');
    expect(ok).equal(true);
  });

  it('Test success mid value', async () => {
    let [rank, ok] = _rank.insert('aaaa', 'aaac');
    expect(rank).equal('aaab');
    expect(ok).equal(true);
  });

  it('Test success new digit mid value', async () => {
    let [rank, ok] = _rank.insert('az', 'b');
    expect(rank).equal('azU');
    expect(ok).equal(true);
  });

  it('Test fail same prev next', async () => {
    let [rank, ok] = _rank.insert('aaaa', 'aaaa');
    expect(rank).equal('aaaa');
    expect(ok).equal(false);
  });

  it('Test fail adjacent', async () => {
    let [rank, ok] = _rank.insert('a', 'a0');
    expect(rank).equal('a');
    expect(ok).equal(false);
  });
});
