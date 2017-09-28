// JavaScript objects are containers that can store data and functions.

// The data we store in an object is not ordered — we can only access
// it by calling its associated key.

// Object Creation Functions
var hotel = new Object()
var hotel = {}

// Inheritance

// constructor function
// prototype
function Hotel(name, rooms, booked, pool, gym, roomTypes) {
  this.name = name,
  this.rooms = rooms,
  this.booked = booked,
  this.pool = pool,
  this.gym = gym,
  this.roomTypes = roomTypes,
  this.checkAvalability = function() {
    console.log(this.rooms - this.booked);
  }
}

// instaniate new Hotel objects
// Not true inheritance, need to come up with different example.
var hilton = new Hotel('Hilton', 90, 76, true, true, ['twin', 'double', 'suite']);

var aquaCity = new Hotel('Aqua City', 30, 1, true, false, ['twin', 'double']);

//Properties

// Lines 2-8 are properties of hotel
var hotel = {
  name: 'Hilton',
  rooms: 90,
  booked: 76,
  pool: true,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvalability: function() {
    return this.rooms - this.booked;
  }
};

// Methods

// line 8 is a method
// When objects have key-function pairs, we call the function a method. It
// looks like this:
var hotel = {
  name: 'Hilton',
  rooms: 90,
  booked: 76,
  pool: true,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvalability: function() {
    return this.rooms - this.booked;
  }
};
