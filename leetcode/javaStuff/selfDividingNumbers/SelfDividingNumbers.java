import java.util.*;

public class SelfDividingNumbers {
  public static void main(String[] args) {
    System.out.println(selfDividingNumbers(1, 22));
  }


  // Look up later List vs ArrayList
  public static ArrayList<Integer> selfDividingNumbers(int left, int right) {
    ArrayList<Integer> answer = new ArrayList<Integer>();

    for(int i = left; i <= right; i++) {
      if(isSelfDividing(i)) {
        answer.add(i);
      }
    }

    return answer;
  }

  // O(n) time and O(1) space
  public static boolean isSelfDividing(int num) {

    // optimize a little for single digit numbers
    if(num < 10) {
      return true;
    }

    int currentCheck = num;

    while(currentCheck > 0) {
      int lastDigit = currentCheck % 10;

      // need to prevent divide by 0
      if(lastDigit == 0 || num % lastDigit != 0) {
        return false;
      }

      currentCheck /= 10;
    }

    return true;
  }


}
