import Button from "./Button";

const Header = ({showAdd, onAdd}) => {
    return (
        <header className="header">
            <h1>Header</h1>
            <Button
                onClick={onAdd}
            />
        </header>
    )
}

export default Header;