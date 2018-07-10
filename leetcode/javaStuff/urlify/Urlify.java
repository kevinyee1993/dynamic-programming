// STUDY JAVA COLLECTION FRAMEWORKS!!!!!!!!
import java.util.*;

public class Urlify {
  public static void main(String args[]) {
    HashMap<String, String> map = new HashMap<String, String>();
    map.put("one", "uno");
    map.put("two", "dos");

    System.out.println(map.get("one"));
  }

  // public static char[] urlify(str) {
  //   boolean foundLastLetter = false;
  //
  //   for(int i = 0; i < str.length; i++) {
  //     int trackIndex = str.length - 1 - i;
  //
  //     if(str[trackIndex] == ' ' && !foundLastLetter) {
  //       str[trackIndex] = '';
  //     } else {
  //       foundLastLetter = true;
  //     }
  //
  //     if(foundLastLetter && str[trackIndex] == ' ') {
  //       str[trackIndex] = '%20';
  //     }
  //   }
  //
  //   return str;
  // }
}
