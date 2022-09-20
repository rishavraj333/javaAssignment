package Day2assignment;

public class Product {
	int ProID;
	String ProName;
	double ProPrice;
	
	public void display() {
		System.out.println(ProID);
		System.out.println(ProName);
		System.out.println(ProPrice);
	}
	
	public double addGst(double b) {
		double a=b*0.18;
		
		
		return a+b;
	}

	public static void main(String[] args) {
		Product p1 = new Product();
		p1.ProID = 234;
		p1.ProName = "Adidas";
		p1.ProPrice = 5000.000;
		p1.display();
		System.out.println(p1.addGst(5000.000));
		
	}

}
