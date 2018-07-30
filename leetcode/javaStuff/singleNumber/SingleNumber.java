// naive solution will be O(n) time and O(n) space
// can't get any better than O(n) time but can possibly
// get better space

import java.util.*;

public class SingleNumber {
  public static void main(String[] args) {
    // int[] input = {2,2,1};
    int[] input = {4,1,2,1,2};
    System.out.println(findSingleNumber(input));
    // HashMap<Integer, Integer> numberTracker = new HashMap<Integer, Integer>();

    // System.out.println(numberTracker.get(1));
  }

  public static int findSingleNumber(int[] numbers) {
    // this is where the O(n) space comes in
    HashMap<Integer, Integer> numberTracker = new HashMap<Integer, Integer>();

    for(int i = 0; i < numbers.length; i++) {
      if(numberTracker.get(numbers[i]) == null) {
        numberTracker.put(numbers[i], 1);
      } else {
        int originalNumber = numberTracker.get(numbers[i]);
        numberTracker.put(numbers[i], originalNumber + 1);
      }
    }

    return searchHashMap(numberTracker);
  }

  // O(n) time but essentially a "free" operation because doesn't
  // make the overall big O any slower
  public static int searchHashMap(HashMap<Integer, Integer> map) {
    for(int key : map.keySet()) {
      if(map.get(key) == 1) {
          return key;
      }
    }

    return -1;
  }
}
