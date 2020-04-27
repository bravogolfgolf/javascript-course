class Person {

  constructor(name, city, country) {
    this.name = name;
    this.city = city;
    this.country = country;
  }

  introduction() {
    console.log("Hi, my name is", this.name, "and I am from", 
                this.city, ",", this.country);
  }
}


var artistMixin = {

  paintBeautifully: function() {
    console.log(this.name, "can paint beautifully");
  },

  danceGracefully: function() {
    console.log(this.name, "can dance gracefully");
  },

  singMelodiously: function() {
    console.log(this.name, "can sing melodiously");
  }

};

_.extend(Person.prototype, artistMixin);

var artistPerson = new Person("Harry", "New York", "USA");

console.log(artistPerson);

// TODO: Run code and show on browser, expand the object in the console logs

artistPerson.introduction()

artistPerson.paintBeautifully()

artistPerson.danceGracefully()

artistPerson.singMelodiously()

// TODO: Run code and show on browser

var scientistMixin = {

  doMath: function() {
    console.log(this.name, "is great at math!");
  },

  doStatistics: function() {
    console.log(this.name, "loves statistics");
  },

  doScientificResearch: function() {
    console.log(this.name, "wants to do scientific research for a living");
  }

};

_.extend(Person.prototype, scientistMixin);

var artistScientistPerson = new Person("Lily", "London", "England");

console.log(artistScientistPerson);

// TODO: Run code and show on browser, expand the object in the console logs

artistScientistPerson.introduction()

artistScientistPerson.paintBeautifully()

artistScientistPerson.doMath()

artistScientistPerson.doStatistics()

artistScientistPerson.doScientificResearch()




