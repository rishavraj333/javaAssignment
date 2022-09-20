package com.sonata.DAOImpl;



import java.sql.PreparedStatement;
import java.sql.SQLException;
import com.sonata.DAO.EmployeeIntf;
import com.sonata.Model.Employee;



public class EmployeeImpl implements EmployeeIntf {
    DBConnection db = new DBConnection();
    PreparedStatement s1;
    int row = 0;
    @Override
    public int save(Object object) {
        Employee e1 = (Employee) object;
        try {
            s1 = db.getConnection().prepareStatement("insert into employee values(?,?,?)");
            s1.setInt(1, e1.getEmpID());
            s1.setString(2, e1.getEmpName());
            s1.setDouble(3, e1.getEmpSal());
            row = s1.executeUpdate();
            db.closeConnection();
        } catch (SQLException e) {e.printStackTrace();}
          
        return row;
    }
}