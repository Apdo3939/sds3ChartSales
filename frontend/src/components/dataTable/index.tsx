import axios from "axios";
import Pagination from "components/pagination";
import { formatLocalDate, SalePage } from "model/Model";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalPages: 0,
        totalElements: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
            .catch()

    }, [activePage]);

    const onPageChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <Pagination
                page={page}
                onPageChange={onPageChange}
            />
            <div className="table-responsive mb-5">
                <table className="table table-striped table-sm border border-success">
                    <thead>
                        <tr className="text-primary">
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody className="text-primary">
                        {page.content?.map(sale => (
                            <tr key={sale.id}>
                                <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
                                <td>{sale.seller.name}</td>
                                <td>{sale.visited}</td>
                                <td>{sale.deals}</td>
                                <td>{sale.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;