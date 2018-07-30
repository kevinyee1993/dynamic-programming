public class BinarySearch {
  public static void main(String[] args) {
    int[] test = {0,2,3,4,5,6,7,8,9};

    System.out.println(binarySearch(test, 2));
  }

  public static int binarySearch(int[] arr, int target) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }

  public static int binarySearch(int[] arr, int target, int left, int right) {
    if(right - left <= 1 && arr[0] != target ) {
      return -1;
    } else if(arr.length <= 1 && arr[0] == target) {
      return left;
    }

    int midPoint = (left + right) / 2;

    if(arr[midPoint] == target) {
      return midPoint;
    } else if(arr[midPoint] >= target) {
      return binarySearch(arr, target, left, midPoint - 1);
    } else if(arr[midPoint] < target) {
      return binarySearch(arr, target, midPoint + 1, right);
    }

    return -1;
  }


}
