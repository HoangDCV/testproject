import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"
function Expenses(props) {
    return (
        <Card className="expenses">
            {
                props.items.map(item => {
                    return (
                        <ExpenseItem key={item.id} date={item.date} name={item.name} price={item.price}></ExpenseItem>
                    )
                })
            }
        </Card>
    )
}
export default Expenses;