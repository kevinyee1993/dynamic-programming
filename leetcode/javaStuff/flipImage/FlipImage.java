import java.util.*;

public class FlipImage {

  //O(n^2) time and O(1) space
  public static void main(String[] args) {
    int[][] arr = {{0,0,1}, {1,2,3}};

    for(int i = 0; i < arr.length; i++) {
      flipImage(arr[i]);
      invertImage(arr[i]);

      System.out.println(arr[i][0]);
      System.out.println(arr[i][1]);
      System.out.println(arr[i][2]);
    }
  }

  // O(n) time and O(1) space
  public static void flipImage(int[] arr) {
    for(int i = 0; i < arr.length / 2; i++) {
      int temp  = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }


  // O(n) time and O(1) space
  public static void invertImage(int[] arr) {
    for(int i = 0; i < arr.length; i++) {
      if(arr[i] == 0) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }
  }
}
