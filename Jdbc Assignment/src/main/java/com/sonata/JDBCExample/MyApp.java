package com.sonata.JDBCExample;



import com.sonata.DAOImpl.EmployeeImpl;
import com.sonata.Model.Employee;



public class MyApp {



   public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.setEmpID(333);
        e1.setEmpName("Rishav");
        e1.setEmpSal(555.55);
        
        EmployeeImpl ep1 = new EmployeeImpl();
        System.out.println(ep1.save(e1));
    }
}
