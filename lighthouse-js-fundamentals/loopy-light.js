
var i = 100;
while (i < 201) {

  if (i % 3 === 0 && i % 4 === 0) {
  console.log("LoopyLightHouse");
} else if (i % 3 === 0) {
  console.log("Loopy");
} else if (i % 4 === 0) {
  console.log("Lighthouse");
} else {
    console.log(i);
  }
    i++;
}

