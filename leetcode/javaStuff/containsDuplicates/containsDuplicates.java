// have to import to get Set 
import java.util.*;

public class containsDuplicates {
  public static void main(String args[]) {
    int[] a = {1,2,3,4,5,1};
    System.out.println(containsDuplicates(a));
  }

  public static boolean containsDuplicates(int[] nums) {
    // hash set similar to just regular hash
    Set<Integer> set = new HashSet<Integer>(nums.length);

    // enhanced for loop -> check bucky
    for(int x: nums) {
      if(set.contains(x)) return true;
      set.add(x);
    }

    return false;
  }
}
