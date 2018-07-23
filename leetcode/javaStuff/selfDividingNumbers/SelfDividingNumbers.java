public class SelfDividingNumbers {
  public static void main(String[] args) {
    System.out.println(isSelfDividing(10));
    System.out.println(isSelfDividing(11));
    System.out.println(isSelfDividing(12));
    System.out.println(isSelfDividing(13));
    System.out.println(isSelfDividing(14));
    System.out.println(isSelfDividing(15));

  }

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
