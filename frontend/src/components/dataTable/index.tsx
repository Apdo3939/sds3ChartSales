
const DataTable = () => {
    return (
        <div className="table-responsive container">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Anakin</td>
                        <td>50</td>
                        <td>50</td>
                        <td>35000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Julio Verne</td>
                        <td>10</td>
                        <td>5</td>
                        <td>1000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Elon Musk</td>
                        <td>100</td>
                        <td>99</td>
                        <td>68000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Master chief</td>
                        <td>20</td>
                        <td>18</td>
                        <td>12360.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;