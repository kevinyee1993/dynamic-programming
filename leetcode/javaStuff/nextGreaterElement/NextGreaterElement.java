import java.util.*;

public class NextGreaterElement {
  public static void main(String[] args) {

  }

  public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
    HashMap<Integer, Integer> nums2Hash = turnToHash(nums2);
    int[] answer = new int[nums1.length];

    for(int i = 0; i < nums1.length; i++) {
      answer[i] = nums2Hash.get(i);
    }

    return answer;
  }


  public static HashMap<Integer, Integer> turnToHash(nums) {

  }


}
