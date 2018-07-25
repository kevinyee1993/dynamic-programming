import java.util.*;

public class NextGreaterElement {
  public static void main(String[] args) {
    int[] test = {1,2,3,4,5};
    HashMap<Integer, Integer> butts = turnToHash(test);


    for(int i = 1; i <= butts.size(); i++) {
      System.out.println(butts.get(i));
    }

  }

  public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
    HashMap<Integer, Integer> nums2Hash = turnToHash(nums2);
    int[] answer = new int[nums1.length];

    for(int i = 0; i < nums1.length; i++) {
      answer[i] = nums2Hash.get(i);
    }

    return answer;
  }


  public static HashMap<Integer, Integer> turnToHash(int[] nums) {
    HashMap<Integer, Integer> numHash = new HashMap<Integer, Integer>();

    for(int i = 0; i < nums.length; i++) {
      if(i == nums.length - 1) {
        numHash.put(nums[i], -1);
      } else if (nums[i] > nums[i + 1]) {
        numHash.put(nums[i], -1);
      } else {
        numHash.put(nums[i], nums[i + 1]);
      }
    }

    return numHash;
  }


}
