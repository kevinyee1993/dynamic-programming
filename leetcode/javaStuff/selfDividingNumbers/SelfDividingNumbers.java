import java.util.*;

public class SelfDividingNumbers {
  public static void main(String[] args) {
    System.out.println(selfDividingNumbers(1, 22));
  }


  // Look up later List vs ArrayList
  // List can't instantiate new?!? look up List api and stuff
  // looks like List is the superclass for ArrayList and LinkedList
  // it's like polymorphism where you can set the return type as List and
  // if you return an ArrayList, you'll be alright
  // probably abstract superclass because can't instantiate it
  public static List<Integer> selfDividingNumbers(int left, int right) {
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
