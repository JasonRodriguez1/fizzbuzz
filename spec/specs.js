	describe('fizzbuzz', function() {
	  it("will return 'FizzBuzz' if the number is divisible by 15", function() {
	    fizzbuzz(30).should.equal("FizzBuzz");
	  });
	  it("will return 'Fizz' if the number is only divisible by 3", function() {
	  	fizzbuzz(9).should.equal("Fizz");
	  });
	  it("will return 'Buzz' if the number is only divisible by 5", function() {
	  	fizzbuzz(10).should.equal("Buzz");
	  });
  });