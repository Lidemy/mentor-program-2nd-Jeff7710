var add = require('./hw5')

describe("hw5", function() {
  it("should return correct answer when a=11 and b=1999", function() {
    expect(add('11', '1999')).toBe('2010')
  })
  it("should return correct answer when a=9008 and b=1908", function() {
    expect(add('9008', '1908')).toBe('10916')
  })
  it("should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111", function() {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222')
  })
})
