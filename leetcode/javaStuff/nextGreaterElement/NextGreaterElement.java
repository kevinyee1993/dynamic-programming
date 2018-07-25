// O(n) time and O(n) space

import java.util.*;

public class NextGreaterElement {
  public static void main(String[] args) {
    // int[] nums1 = {2,4};
    // int[] nums2 = {1,2,3,4};

    // int[] answer = nextGreaterElement(nums1, nums2);

    // can create arrays inline like this!!!!
    int[] answer = nextGreaterElement(new int[]{2,4}, new int[]{1,2,3,4});

    for(int i = 0; i < answer.length; i++) {
      System.out.println(answer[i]);
    }

  }

  public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
    HashMap<Integer, Integer> nums2Hash = turnToHash(nums2);
    int[] answer = new int[nums1.length];

    for(int i = 0; i < nums1.length; i++) {
      answer[i] = nums2Hash.get(nums1[i]);
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
