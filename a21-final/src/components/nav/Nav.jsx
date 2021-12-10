import "./Nav.css"

const Nav = (props) => {
    const fetch1 = props.fetch1
    const fetch2 = props.fetch2
    const fetch3 = props.fetch3

    return <>
        <ul>
            <li><button type="button" onClick={event => fetch1(event)}>Fetch tous les clients</button></li>
            <li><button type="button" onClick={event => fetch2(event)}>Fetch Homme</button></li>
            <li><button type="button" onClick={event => fetch3(event)}>Fetch Ontariens</button></li>
        </ul>
    </>
}
export default Nav;