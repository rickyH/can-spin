
var content = {
  dom: {},
  position: 0,
  init: function () {
    this.dom['dyn-title'] = document.getElementById('dyn-title');
    this.dom['dyn-name'] = document.getElementById('dyn-name');
    this.dom['dyn-desc'] = document.getElementById('dyn-desc');
    this.dom['dyn-style'] = document.getElementById('dyn-style');
    this.dom['dyn-abv'] = document.getElementById('dyn-abv');
    this.dom['dyn-ibu'] = document.getElementById('dyn-ibu');
    this.dom['dyn-malt'] = document.getElementById('dyn-malt');
    this.dom['dyn-hops'] = document.getElementById('dyn-hops');
    this.dom['dyn-brewer-name'] = document.getElementById('dyn-brewer-name');
    this.dom['dyn-brewery-desc'] = document.getElementById('dyn-brewery-desc');

    this.dom['dyn-food-1'] = document.getElementById('dyn-food-1');
    this.dom['dyn-food-2'] = document.getElementById('dyn-food-2');
    this.dom['dyn-food-3'] = document.getElementById('dyn-food-3');
  },
  next: function () {
    this.position++;
    if (this.position > this.items.length - 1) {
      this.position = 0;
    }
    this.update();
  },
  previous: function () {
    this.position--;
    if (this.position < 0) {
      this.position = this.items.length - 1;
    }
    this.update();
  },
  update: function () {
    var item = this.items[this.position];
    this.dom['dyn-title'].innerHTML = item.breweryName + " " + item.name;
    this.dom['dyn-name'].innerHTML = item.name;
    this.dom['dyn-desc'].innerHTML = item.about;
    this.dom['dyn-style'] .innerHTML = item.style;
    this.dom['dyn-abv'] .innerHTML = item.abv;
    this.dom['dyn-ibu'] .innerHTML = item.ibu;
    this.dom['dyn-malt'].innerHTML = item.malt;
    this.dom['dyn-hops'].innerHTML = item.hops;
    this.dom['dyn-brewer-name'].innerHTML = item.breweryName;
    this.dom['dyn-brewery-desc'].innerHTML = item.breweryDesc;

    this.dom['dyn-food-1'].innerHTML = item.foodPairing[0];
    this.dom['dyn-food-2'].innerHTML = item.foodPairing[1];
    this.dom['dyn-food-3'].innerHTML = item.foodPairing[2];
    // scene.material.src = item.imageURL;
    scene.mesh.material.materials[1] = new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture(item.imageURL),
      colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
      colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
      colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
    });

    scene.mesh.material.needsUpdate = true;
    console.log(scene.mesh);
  },
  items: [
    {
      breweryName: "Beavertown",
      breweryDesc: "Beavertown Brewery is an artisan microbrewery based in De Beauvoir Town in Hackney.  We opened our doors in February 2012 as part of the Brewpub, Duke's Brew and Que, brewing both cask and bottle conditioned beers by hand.",
      name: "Gamma Ray",
      about: "The concept was to create a juicy tropical beer. A brew you can sit on and drink all day, rammed with juicy malts and huge tropical aromas of mango and grapefruit. Massive additions of whole leaf American hops are added in ever increasing numbers at the end of the boil giving huge hop flavour. The beer is then dry hopped for days, driving the punchy aromas so you can smell it from miles away!",
      style: "American IPA",
      abv: "5.4%",
      ibu: "55",
      malt: "Best Pale, Caragold, Caramalt",
      hops: "Columbus, Bravo, Amarillo, Citra, Calypso",
      foodPairing: [
        "Pulled Lamb madras with bombay potatoes.",
        "Day smoked beef brisket.",
        "Salted caramel and orange brownies"
      ],
      imageURL: 'js/threejs/models/textures/gamma_ray.png'
    },
    {
      breweryName: "BrewDog",
      breweryDesc: "BrewDog produces about 2.2 million bottles and 400,000 cans per month (Oct 2015). It was founded in Fraserburgh in 2007 by James Watt and Martin Dickie. Their main brewing moved to nearby Ellon in 2012.",
      name: "Punk IPA",
      about: "Our scene-stealing flagship is an India Pale Ale that has become a byword for craft beer rebellion; synonymous with the insurgency against mass-produced, lowest common denominator beer. Punk IPA charges the barricades to fly its colours from the ramparts – full-on, full-flavour; at full-throttle.",
      style: "IPA",
      abv: "5.6%",
      ibu: "35",
      malt: "Extra Pale",
      hops: "Chinook, Ahtanum, Amarillo, Cascade, Simcoe, Nelson Sauvin",
      foodPairing: [
        "Spicy carne asada with a pico de gallo sauce.",
        "Shredded chicken tacos with a mango chilli lime salsa.",
        "Cheesecake with a passion fruit swirl sauce."
      ],
      imageURL: "js/threejs/models/textures/punk2.jpg"
    },
    {
      breweryName: "Duff",
      breweryDesc: "Duff Brewery, Springfield: 'Can't Get Enough of That Wonderful Duff' who's spokesperson is Duffman.",
      name: "Duff Beer",
      about: "Duff Beer is a brand of beer that originally started as a fictional beverage on the animated series The Simpsons. Since then it has become a real brand of beer in a number of countries without permission or consent from its original creator, Matt Groening, and has resulted in legal battles with varying results. An official version of the beer is sold in three variations near The Simpsons Ride at Universal Studios.",
      style: "Pilsner",
      abv: "4.9%",
      ibu: "12",
      malt: "Barley, Rice",
      hops: "Hallertau, Michelob",
      foodPairing: [
        "Bacon Donuts.",
        "Moon Waffles.",
        "Krusty Burger."
      ],
      imageURL: "js/threejs/models/textures/duff.gif"
    }
  ]
};
