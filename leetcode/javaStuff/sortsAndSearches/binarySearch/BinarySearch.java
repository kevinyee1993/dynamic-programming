public class BinarySearch {
  public static void main(String[] args) {
    int[] test = {0,1};
    int answer = binarySearch(test, 1);

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
