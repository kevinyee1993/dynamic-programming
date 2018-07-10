import java.util.*;

public class validAnagram {
  public static void main(String args[]) {
    String fart = "fart";

    System.out.println(countChars(fart));
  }

  public static boolean validAnagram(String s1, String s2) {

    if(s1.length() != s2.length()) {
      return false;
    }

    // Set<Integer> counter1 = new HashSet<Integer>(s1.length());
    // Set<Integer> counter2 = new HashSet<Integer>(s2.length());

    return true;

  }

  //   HashMap<Integer,String> hm=new HashMap<Integer,String>();
  public static HashMap<Char, Integer> countChars(String str) {
    // Set<Integer> counter = new HashSet<Integer>(str.length());
      HashMap<Char,Integer> counter=new HashMap<Char,Integer>();

    for(int i = 0; i < str.length(); i++) {
      char currChar = str[i];

      if(counter[currChar]) {
        counter[currChar]++;
      } else {
        counter[currChar] = 1;
      }
    }

    return counter;
  }
 }
