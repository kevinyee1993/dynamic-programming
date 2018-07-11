import java.util.*;

public class JewelsAndStones {
  public static void main(String args[]) {
    // HashMap<Integer, Boolean> jewelCount = new HashMap<Integer, Boolean>();
    // jewelCount.put(1, true);
    // System.out.println(jewelCount.get(1));
    //
    // String fart = "farts";
    // System.out.println(fart.charAt(0));;

    System.out.println(jewelCount("aA", "fartsa"));
  }

  public static int jewelCount(String J, String S) {
    HashMap<Character, Boolean> jewelHash = createJewelHash(J);
    int jewelCount = 0;

    for(int i = 0; i < S.length(); i++) {
      char currentChar = S.charAt(i);

      if(jewelHash.get(currentChar) != null) {
        jewelCount++;
      }
    }

    return jewelCount;

  }

  public static HashMap<Character, Boolean> createJewelHash(String J) {
  // public static void createJewelHash(String J) {
    HashMap<Character, Boolean> jewelHash = new HashMap<Character, Boolean>();
    System.out.println(J);


    for(int i = 0; i < J.length(); i++) {
      jewelHash.put(J.charAt(i), true);
    }

    return jewelHash;
  }
}
