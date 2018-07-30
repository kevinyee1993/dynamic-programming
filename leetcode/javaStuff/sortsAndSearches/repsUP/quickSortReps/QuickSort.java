public class QuickSort {
  public static void main(String[] args) {
    int[] test = {6,3,1,2,7,54,21,8,3};
    quickSort(test);

    for(int x : test) {
      System.out.println(x);
    }
  }

  public static void quickSort(int[] arr) {
      quickSort(arr, 0, arr.length - 1);
  }

  public static void quickSort(int[] arr, int left, int right) {

    // just something to break out of recursion when base case is reached
    // but this doesn't actually need to return anything because
    // modifying the original array
    if(left >= right) {
      return;
    }

    int pivot = arr[(left + right) / 2];
    int index = partition(arr, left, right, pivot);

    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);


  }

  public static int partition(int[] arr, int left, int right, int pivot) {

    while(left <= right) {
      while(arr[left] < pivot) {
        left++;
      }

      while(arr[right] > pivot) {
        right--;
      }

      if(left <= right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }

    return left;
  }

}
