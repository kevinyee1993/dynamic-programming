// O(1) space
// O(nlog(n)) time

public class QuickSort {
  public static void main(String[] args) {
      int[] test = {6,2,12,3,1,36,2};

      quickSort(test);

      for(int i = 0; i < test.length; i++) {
        System.out.println(test[i]);
      }
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

    while(left <= right) {

      // find left which belongs on right side
      while(arr[left] < pivot) {
        left++;
      }

      // find right which belongs on left side
      while(arr[right] > pivot) {
        right--;
      }

      // once both of those values are found, swap them thangs
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
