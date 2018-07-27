public class QuickSort {
  public static void main(String[] args) {

  }

  public static void quickSort(int[] arr) {
    quickSort(arr, 0, arr.length - 1);
  }

  public static void quickSort(int[] arr, int left, int right) {
    if(left >= right) {
      return;
    }

    int pivot = arr[(left + right) / 2];
    int index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);


  }

  // Does all the swapping and then returns the point which divides
  // all the elements lower than the pivot and all the elements greater
  // than the pivot
  public static int partition(int[] arr, int left, int right, int pivot) {

  }
}
