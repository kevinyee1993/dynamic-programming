public class ReverseWords {
  public static void main(String[] args) {
    String butt = "butt";

    System.out.println(reverseSingleWord(butt));
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
