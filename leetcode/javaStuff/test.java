class test {

  public static void main(String args[]) {
    System.out.println(isHappy(4));
  }

  public static boolean isHappy(int n) {
    if(n % 10 == 1) {
      return true;
    } else if(Math.pow(n, 2) < 10) {
      return false;
    }

    int newNum = convertNToSquareSum(n);

    return isHappy(newNum);
  }

  public static int convertNToSquareSum(int n) {
    int sum = 0;
    int lastDigit;

    while(n > 0) {
      lastDigit = n % 10;
      n /= 10;

      sum += Math.pow(lastDigit, 2);
    }

    return sum;
  }
}
