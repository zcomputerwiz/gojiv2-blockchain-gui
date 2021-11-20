const goji = require('../../util/goji');

describe('goji', () => {
  it('converts number moji to goji', () => {
    const result = goji.moji_to_goji(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string moji to goji', () => {
    const result = goji.moji_to_goji('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number moji to goji string', () => {
    const result = goji.moji_to_goji_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string moji to goji string', () => {
    const result = goji.moji_to_goji_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number goji to moji', () => {
    const result = goji.goji_to_moji(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string goji to moji', () => {
    const result = goji.goji_to_moji('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number moji to colouredcoin', () => {
    const result = goji.moji_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string moji to colouredcoin', () => {
    const result = goji.moji_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number moji to colouredcoin string', () => {
    const result = goji.moji_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string moji to colouredcoin string', () => {
    const result = goji.moji_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to moji', () => {
    const result = goji.colouredcoin_to_moji(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to moji', () => {
    const result = goji.colouredcoin_to_moji('1000');

    expect(result).toBe(1000000);
  });
});
