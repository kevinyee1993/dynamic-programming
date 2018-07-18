public class ReverseWords {
  public static void main(String[] args) {
    String butt = "butt";
    // String[] words = {"fart", "part", "bart"};
    String words = "fart part bart";
    String[] wordsArr = new String[words.length()];
    wordsArr = words.split(" ");

    reverseWords(wordsArr);

    System.out.println(String.join(" ", wordsArr));
  }

  public static String[] reverseWords(String[] words) {
    for(int i = 0; i < words.length; i++) {
      words[i] = reverseSingleWord(words[i]);
    }

    return words;
  }

  public static String reverseSingleWord(String word) {
    String reversedString = "";

    for(int i = 0; i < word.length(); i++ ) {
      reversedString += word.charAt(word.length() - 1 - i);
    }

    return reversedString;
  }



  // public static String[] flipString(String[] words) {
  //   for(int i = 0; i < words.length / 2; i++) {
  //     String temp = words[i];
  //     words[i] = words[words.length - 1 - i];
  //     words[words.length - 1 - i] = temp;
  //   }
  //
  //   return words;
  // }
}
