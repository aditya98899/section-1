const brands = ['Apple','Motorola','Gionee','Samsung','Realme', 'Oneplus', 'nothing'];

// acess samsung , realme and oneplus usimg negative index 

console.log(brands.slice(-4, -1));

// replace realme and onplus with 'xiaomi' and 'honor'
brands.splice(-4, 3, 'xiaomi', 'honor');

console.log(brands);

// add vivo at the beggining

brands.unshift('vivo');
console.log(brands);

// add infinix and micromax at the end

brands.splice(brands.length, 0, 'infinix', 'micromax');
console.log(brands);
