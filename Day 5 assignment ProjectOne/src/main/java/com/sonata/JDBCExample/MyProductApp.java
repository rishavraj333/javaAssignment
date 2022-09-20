package com.sonata.JDBCExample;



import com.sonata.DAOImpl.ProductImpl;
import com.sonata.Model.Product;



public class MyProductApp {



   public static void main(String[] args) {
        Product p1 = new Product();
        p1.setProductID(333);
        p1.setProductName("Adidas");
        p1.setProductPrice(555.55);
        
        ProductImpl pp1 = new ProductImpl();
        System.out.println(pp1.add(p1));
    }
}