import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/*Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

public class main {

    static char[] uppercaseAlphabet = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
    static List<String> csvNames;
    public static void main(String args[]) throws FileNotFoundException, IOException{
        System.out.println(valueOftxt("Colin"));
        csvNames = new ArrayList<String>();

        loadFile("22/p022_names.txt");
        System.out.println(calc());

    }

    public static int calc(){
        int valueOfFile = 0;
        for (int x=0; x<csvNames.size(); x++){
            valueOfFile += valueOftxt(csvNames.get(x)) * (x+1);
        }

        return valueOfFile;
    }

    public static void loadFile(String filepath){
        try (BufferedReader br = new BufferedReader(new FileReader(filepath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                csvNames.addAll(Arrays.asList(values));
            }
        } catch(Exception ex) {
            System.out.print("LOG: ");
            ex.printStackTrace();
        }
        Collections.sort(csvNames);
    }

    public static int valueOftxt(String text){
        char[] ch = text.toCharArray();
        int value = 0;
        
        for (int x=0; x<ch.length; x++){
            for (int y=0; y<uppercaseAlphabet.length; y++){
                if (Character.toLowerCase(ch[x]) == Character.toLowerCase(uppercaseAlphabet[y])){
                    value +=y+1;
                }
            }
        }

        return value;
    }
}