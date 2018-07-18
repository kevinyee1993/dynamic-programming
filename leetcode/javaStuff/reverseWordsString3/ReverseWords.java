public class ReverseWords {
  public static void main(String[] args) {
    String butt = "butt";
    // String[] words = {"fart", "part", "bart"};
    String words = "fart part bart";
    String[] wordsArr = new String[words.length()];
    wordsArr = words.split(" ");

    // System.out.println(reverseSingleWord(butt));
    // System.out.println(reverseWords(words));

    // words = reverseWords(wordsArr);
    reverseWords(wordsArr);

    for(int i = 0; i < wordsArr.length; i++) {
      System.out.println(wordsArr[i]);
    }
  }

  public static String[] reverseWords(String[] words) {
  // public static void reverseWords(String[] words) {
    for(int i = 0; i < words.length; i++) {
      words[i] = reverseSingleWord(words[i]);
      // System.out.println(words[i]);
    }

    return words;
  }

  public static String reverseSingleWord(String word) {
    String reversedString = "";

    for(int i = 0; i < word.length(); i++ ) {
      // reversedString += word[word.length() - 1 - i];
      reversedString += word.charAt(word.length() - 1 - i);
    }

    return reversedString;
  }
}
