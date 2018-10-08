// O(n) space and time where n is the total amount of elements in the image

var floodFill = function(image, sr, sc, newColor) {
    if(image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] === newColor) {
        return image;
    }

    let OGColor = image[sr][sc];
    image[sr][sc] = newColor;

    if(image[sr] !== undefined && image[sr][sc+1] === OGColor) {
        floodFill(image, sr, sc+1, newColor);
    }

    if(image[sr] !== undefined && image[sr][sc-1] === OGColor) {
        floodFill(image, sr, sc-1, newColor);
    }

    if(image[sr + 1] !== undefined && image[sr+1][sc] === OGColor) {
        floodFill(image, sr+1, sc, newColor);
    }

    if(image[sr - 1] !== undefined&& image[sr-1][sc] === OGColor) {
        floodFill(image, sr - 1, sc, newColor);
    }

    return image;
};
const image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
];

floodFill(image, 1,1,2);
