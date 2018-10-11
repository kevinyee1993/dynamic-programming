// O(n) time
// O(1) space

var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        let currBed = flowerbed[i];
        let prevBed = flowerbed[i - 1];
        let nextBed = flowerbed[i + 1];

        if(!currBed && !prevBed && !nextBed) {
            n--;
            flowerbed[i] = 1;
        }
    }

    if(n <= 0) {
        return true;
    } else {
        return false;
    }
};
