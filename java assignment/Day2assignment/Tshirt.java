package Day2assignment;

public class Tshirt {
		String Color;
		String Material;
		String Design;
		
	public static void main(String[] args) {
			
			Tshirt small = new Tshirt();
			small.Color="black";
			small.Material ="silk";
			small.Design ="fabric";
			
			Tshirt large = new Tshirt();
			large.Color = "blue";
			large.Material = "cotton";
			large.Design = "fabric";
			
			Tshirt xtralarge = new Tshirt();
			xtralarge.Color = "white";
			xtralarge.Material= "teri-cotton";
            xtralarge.Design ="fabric";	
            
            System.out.println(small.Color+" "+small.Material+" "+small.Design);
            System.out.println(large.Color+" "+large.Material+" "+large.Design);
            System.out.println(xtralarge.Color+" "+xtralarge.Material+" "+xtralarge.Design);
			
			
			
		}
		

	}


