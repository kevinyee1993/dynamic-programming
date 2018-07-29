// O(log(n)) average case scenario and O(1) space because doing it in place

public class BinarySearch {
  public static void main(String[] args) {
    int[] test = {0,1,6,9,12,354};
    int answer = binarySearch(test, 354);

    System.out.println(answer);
  }

  public static int binarySearch(int[] arr, int target) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }

  public static int binarySearch(int[] arr, int target, int start, int end) {

    // base case for if the array just has one element
    if(arr.length == 1 && arr[0] != target) {
      return -1;
    } else if(arr.length == 1 && arr[0] == target) {
      return 0;
    }

    // because you are using references to start and end which keep track
    // of the original positions of the elements regardless of how you break
    // it down, you don't have to add anything for the case wehre
    // arr[midPoint] < target
    // where before you were passing in new arrays instead of references
    // to the indices and each array started off again at 0
    int midPoint = (start + end) / 2;

    if(arr[midPoint] == target) {
      return midPoint;
    } else if(arr[midPoint] > target) {
      return binarySearch(arr, target, start, midPoint - 1);
    } else if(arr[midPoint] < target) {
      return binarySearch(arr, target, midPoint + 1, end);
      // return midPoint + store;
    }

    return 0;
  }
}
