package com.sonata.DAOImpl;



import java.sql.PreparedStatement;
import java.sql.SQLException;
import com.sonata.DAO.ProductIntf;
import com.sonata.Model.Product;



public class ProductImpl implements ProductIntf {
    DBConnection db = new DBConnection();
    PreparedStatement s1 = null;
    int row = 0;
    @Override
    public int add(Object object) {
        Product p1 = (Product) object;
        try {
            s1 = db.getConnection().prepareStatement("insert into product values(?,?,?)");
            s1.setInt(1, p1.getProductID());
            s1.setString(2, p1.getProductName());
            s1.setDouble(3, p1.getProductPrice());
            row = s1.executeUpdate();
            db.closeConnection();
        } catch (SQLException e) {e.printStackTrace();}
        return row;
    }
	@Override
	public int delete(Object object) {
	     Product p1 = (Product) object;
	        try {
	            s1 = db.getConnection().prepareStatement("delete from product where productID(?)");
	            s1.setInt(1, p1.getProductID());
	           
	            row = s1.executeUpdate();
	            db.closeConnection();
	        } catch (SQLException e) {e.printStackTrace();}
		
		return row;
	}
	@Override
	public int update(Object object) {
		  Product p1 = (Product) object;
	        try {
	            s1 = db.getConnection().prepareStatement("update ProductID = ?,ProductName = ?,ProductPrice =?");
	            s1.setInt(1, p1.getProductID());
	            s1.setString(2, p1.getProductName());
	            s1.setDouble(3, p1.getProductPrice());
	            row = s1.executeUpdate();
	            db.closeConnection();
	        } catch (SQLException e) {e.printStackTrace();}
		
		return row;
	}
	@Override
	public int display(Object object) {
		
		return row;
	}
}