import Footer from "./Footer";
import Header from "./Header";

function CustORecords() {
    return ( <>
    <Header />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>

            <div className="container">
                <h2>Order Records</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tr>
                            <th>Order Id</th>
                            <th>Items</th>
                            <th>Total Amount</th>
                            <th>Category</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Order Id 1</td>
                            <td>Items</td>
                            <td>Total Amount 1</td>
                            <td>Category 1</td>
                            <td>Payment Method 1</td>
                            <td>Date 1</td>
                            <td>Status 1</td>
                        </tr>
                        <tr>
                            <td>Order Id 1</td>
                            <td>Items</td>
                            <td>Total Amount 1</td>
                            <td>Category 1</td>
                            <td>Payment Method 1</td>
                            <td>Date 1</td>
                            <td>Status 1</td>
                        </tr>
                        <tr>
                            <td>Order Id 1</td>
                            <td>Items</td>
                            <td>Total Amount 1</td>
                            <td>Category 1</td>
                            <td>Payment Method 1</td>
                            <td>Date 1</td>
                            <td>Status 1</td>
                        </tr>
                    </table>
                </div>
            </div>
        </center>
        <Footer />
    </> );
}

export default CustORecords;