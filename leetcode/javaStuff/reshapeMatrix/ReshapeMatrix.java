public class ReshapeMatrix {
  public static void main(String[] args) {
    int[][] test = {{1,2,3}, {4,5,6}, {1,2,3}};

    // int[] answer = extractElements(test);

    // for(int x : answer) {
    //   System.out.println(x);
    // }

    int[][] answer2 = reshapeMatrix(test, 9, 2);
    System.out.println(answer2.length);
    System.out.println(answer2[0].length);

  }


  // O(n) time and space
  // extract out all the elements of the original 2d array into single array

  // O(n) time
  // Go through that new array and allocate it accordingly to new 2d array
  // based on the new rows and cols from the input

  // make sure that input rows * cols is equal to ogArray's length * ogArray[0].length
  // or else return the original array


  public static int[][] reshapeMatrix(int[][] ogArray, int rows, int cols) {
    // base case if new array is impossible
    if(ogArray.length * ogArray[0].length != rows * cols) {
      return ogArray;
    }

    int[] allElements = extractElements(ogArray);
    int[][] answer = new int[rows][cols];
    int counter = 0;

    for(int i = 0; i < rows; i++) {
      for(int j = 0; j < cols; j++) {
        answer[i][j] = allElements[counter];
        counter++;
      }
    }

    return answer;
  }

  public static int[] extractElements(int[][] array) {
    int[] extractedElements = new int[array.length * array[0].length];
    int counter = 0;

    for(int i = 0; i < array.length; i++) {
      for(int j = 0; j < array[i].length; j++) {
        extractedElements[counter] = array[i][j];
        counter++;
      }
    }

    return extractedElements;
  }
}
