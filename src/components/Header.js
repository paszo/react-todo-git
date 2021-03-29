import Button from "./Button";

const Header = ({title, showAdd, onAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                onClick={onAdd}
            />
        </header>
    )
}

export default Header;