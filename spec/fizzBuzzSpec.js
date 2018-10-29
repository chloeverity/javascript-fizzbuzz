describe('Fizzbuzz', function() {

  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz()
  });

  describe('multiples of 3', function() {
    it("puts Fizz when the number is divisible by 3", function(){
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it("puts Fizz when the number is divisible by 3", function(){
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });
  describe('multiples of 5', function() {
    it("puts Buzz when the number is divisible by 5", function(){
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it("puts Buzz when the number is divisible by 5", function(){
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('multiples of 3 and 5', function() {
    it("puts FizzBuzz when the number is divisible by 3 and 5", function(){
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it("puts FizzBuzz when the number is divisible by 3 and 5", function(){
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });
  describe('numbers not divisible by 3 or 5', function() {
    it("returns the number", function(){
      expect(fizzBuzz.play(1)).toEqual(1)
    });
    it("returns the number", function(){
      expect(fizzBuzz.play(2)).toEqual(2)
    });
  });
});
