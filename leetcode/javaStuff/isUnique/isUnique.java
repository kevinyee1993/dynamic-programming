class isUnique {
  public static void main(String args[]) {
    System.out.println(isUnique("farts"));
  }

  public static boolean isUnique(String str) {
    boolean[] charset = new boolean[128];

    for(int i = 0; i < str.length(); i++) {

      int value = str.charAt(i);

      if(charset[value]) {
        return false;
      } else {
        charset[str.charAt(i)] = true;
      }
    }

    return true;
  }
}
