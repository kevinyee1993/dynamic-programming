// O(n log(n)) time and memory depends 

public class MergeSort {
  public static void main(String[] args) {
    // int[] test = {5,3,12,5,2};
    int[] test = {6,8,342,7,34,9,70,35,1,4,2,3,3};
    mergeSort(test);

    for(int x : test) {
      System.out.println(x);
    }

  }

  // overloaded with just array for user to call
  public static void mergeSort(int[] array) {
    int[] helper = new int[array.length];
    mergeSort(array, helper, 0, array.length - 1);
  }

  public static void mergeSort(int[] array, int[] helper, int low, int high) {

    // don't do anything if low is less than or equal to high
    // e.g. if low is equal to high, that means there is just one element
    // in the array references so you're done there
    if(low < high) {
      int middle = (low + high) / 2;
      mergeSort(array, helper, low, middle);  // split up left side
      mergeSort(array, helper, middle + 1, high); // split up right side

      // the top mergeSort calls recurse until they get to a point where
      // low == high and then this gets called
      // ref to low and high used to split up the array rather than using
      // brand new arrays
      merge(array, helper, low, middle, high); // merge them
    }
  }

  public static void merge(int[] array, int[] helper, int low, int middle, int high) {
    // copy the relevant elements from array to helper, including high
    for(int i = low; i <= high; i++) {
      helper[i] = array[i];
    }

    // want to use the helper to compare the first values of each half
    // need to use the midpoint to know where to separate this array

    int current = low;
    int leftHelper = low;
    int rightHelper = middle + 1;

    // as long as the halves are within their bounds, do this
    while(leftHelper <= middle && rightHelper <= high) {
      if(helper[leftHelper] <= helper[rightHelper]) {
        array[current] = helper[leftHelper];
        leftHelper++;
      } else {
        array[current] = helper[rightHelper];
        rightHelper++;
      }

      current++;
    }

    int remaining = middle - leftHelper;
    for(int i = 0; i <= remaining; i++) {
      array[current + i] = helper[leftHelper + i];
    }
  }

}
