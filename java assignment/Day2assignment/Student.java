package Day2assignment;

public class Student {
	int stdID;
	String stdName;
	int stdClass;
	
	public void Display() {
		System.out.println(this.stdName);
		System.out.println(this.stdClass);
	}

	public static void main(String[] args) {
		
		Student s1 = new Student();
		s1.stdName = "Rishav";
		s1.stdClass = 12;
		s1.Display();
		
		Student s2 = new Student();
		s2.stdName = "Raj";
		s2.stdClass = 2;
		s2.Display();

	}

}
