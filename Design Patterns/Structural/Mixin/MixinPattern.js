class PlainPerson {

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

artistMixinFn = function() {}

artistMixinFn.prototype = {

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

scientistMixinFn = function() {}

scientistMixinFn.prototype = {

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

function extend(destinationClass, sourceClass, methodList) {

    if (methodList && methodList.length != 0) {

        for (var i = 0; i < methodList.length; i++ ) {
            destinationClass.prototype[methodList[i]] = sourceClass.prototype[methodList[i]];
        }
    }
    else {
        for (var methodName in sourceClass.prototype) {
 
            if (!destinationClass.prototype[methodName]) {
                destinationClass.prototype[methodName] = sourceClass.prototype[methodName];
            }
        }
    }
}

extend(PlainPerson, artistMixinFn, ["paintBeautifully"]);

var paintingPerson = new PlainPerson("Jill", "Bangalore", "India");

console.log(paintingPerson);

// TODO: Run code and show on browser, expand object in the console

paintingPerson.introduction()

paintingPerson.paintBeautifully()

// paintingPerson.danceGracefully()

// TODO: Run code and show on browser
// TODO: Comment out the previous line which is in error before you move on

extend(PlainPerson, scientistMixinFn);

var scientistPerson = new PlainPerson("Ron", "San Diego", "USA");

console.log(scientistPerson);

scientistPerson.introduction()

scientistPerson.paintBeautifully()

scientistPerson.doMath()

scientistPerson.doStatistics()

scientistPerson.doScientificResearch()

// TODO: Run code and show on browser




