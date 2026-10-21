import ExpensiveRow from "./ExpensiveRow";

const ExpenseTable = ({ expenses, onDelete, onToggle }) => (
    <table>
        <thead>
            <tr>
                <th>Khoản Chi</th>
                <th>Số Tiền</th>
                <th className="col-category">Danh Mục</th>
                <th className="col-date">Ngày</th>
                <th>Trạng Thái</th>
                <th>Thao Tác </th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense) => (
                <ExpenseRow
                    key={expense.id}
                    expense={expense}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </tbody>
    </table>
)

export default ExpenseTable;