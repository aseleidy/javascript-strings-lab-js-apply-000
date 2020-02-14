/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})
var greeting = "Hello, everybody!"

var specialGuest = "Frosty"
it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})
var greetSpecialGuest = "Hello, " + specialGuest + "!"

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
