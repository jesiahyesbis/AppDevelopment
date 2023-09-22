import '../assets/css/table.css'
 


 
function Table() {
    return (
<div class="row">
  <div class="column">
    <table>
      <tr>
        <th>User_Id</th>
        <th>User_Name</th>
        <th>Product</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Smith</td>
        <td>AC</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Anto</td>
        <td>TV</td>
      </tr>
      
    </table>
  </div>
  <div class="column1">
    <table>
      <tr>
        <th>Pdt_Id</th>
        <th>Pdt_Name</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>1</td>
        <td>AC</td>
        <td>30,000</td>
      </tr>
      
      <tr>
        <td>2</td>
        <td>TV</td>
        <td>70,000</td>
      </tr>
    </table>
  </div>
</div>

    );
}
 
export default Table;