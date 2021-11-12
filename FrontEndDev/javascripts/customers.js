/**
 * This function takes a json object containing information about a customer and trasforms it into HTML rows
 * @param  customers  , a json object containing information about customers
 * @returns returns HTML rows for the customers Table 
 */
function generateRows(customers) {
    let rows = customers.map((customer) => {
      let row = document.createElement('tr');
      row.insertAdjacentHTML(
        'beforeend',
        `
      <td>${customer.customer_id}</td>
      <td>${customer.first_name}</td>
      <td></td>
      <td>${customer.last_name}</td>
      <td>${customer.phone}</td>
      <td>${customer.email}</td>
      <td>${customer.customer_notes}</td>
      <td>${customer.address}</td>
      `
      );
      return row;
    });
    return rows;
  }

function getNewCustomerData() {
    
}

  // Using axios make a call to the API and get the customers information and render it in the table 
  // NOTE: after first deployement of the backEnd server URI can be changed to the public one 
  axios.get("http://localhost:3000/api/customers").then(({data}) => {
   let customerRows = generateRows(data.customers);
   document.getElementById("tableBody").replaceChildren(...customerRows);
});