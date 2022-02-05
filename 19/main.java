import java.time.LocalDate;

public class main {
    public static void main(String args[]){
        var counter = 0;
        var yearStart = 1901;
        var yearEnd = 2000;

        for (int x=yearStart; x<=yearEnd; x++){
            for (int y=1;y<=12;y++){
                if(LocalDate.of(x, y, 01).getDayOfWeek().toString().equals("SUNDAY")){
                    counter++;
                }
            }
        }
        System.out.println(counter);
    }    
}
