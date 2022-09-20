package Day2assignment;

public class MyOwnAutoShop {

	public static void main(String[] args) {
		Sedan s=new Sedan(1500,5000,"white");
		Ford f = new Ford(123,900,"black",5000);
		Ford f1 = new Ford(333,1000,"black",4000);
		System.out.println("Price of sedan Car\t"+s.getSalePrice(100));
		System.out.println("Price of first ford car\t"+f.getSalePrice());
		System.out.println("Price of second ford car\t"+f1.getSalePrice());
	}

}


	


