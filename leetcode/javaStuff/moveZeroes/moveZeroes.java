import java.util.Arrays;

class moveZeroes {
  public static void main(String args[]) {
    int fart[] = {0,1,0,3,1,12,0,0,4,2,1,0};
    moveZeroes(fart);
    // swap(fart, 0, 1);

    System.out.println(Arrays.toString(fart));
  }


  public static void moveZeroes(int[] nums) {
    int slowPointer = 0;
    int fastPointer = 1;

    while(fastPointer < nums.length) {
      if(nums[slowPointer] == 0 && nums[fastPointer] != 0) {
        swap(nums, slowPointer, fastPointer);
        slowPointer++;
      } else if(nums[slowPointer] != 0) {
        slowPointer++;
      }

      fastPointer++;
    }
  }

  public static void swap(int[] nums, int sPoint, int fPoint) {
    int temp = nums[sPoint];
    nums[sPoint] = nums[fPoint];
    nums[fPoint] = temp;
  }
}
