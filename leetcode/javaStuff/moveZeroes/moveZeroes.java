class moveZeroes {
  public static void main(String args[]) {
    int fart[] = {1,2,3};
    // moveZeroes(new int[] {0,1,0,3,12});
    swap(fart, 0, 1);

    for(int i = 0; i < fart.length; i++) {
      System.out.println(fart[i]);
    }
  }


  public static void moveZeroes(int[] nums) {
    int slowPointer = 0;
    int fastPointer = 1;
  }

  public static void swap(int[] nums, int sPoint, int fPoint) {
    int temp = nums[sPoint];
    nums[sPoint] = nums[fPoint];
    nums[fPoint] = temp;
  }
}
