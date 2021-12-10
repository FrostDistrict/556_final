import "./ClientTable.css"

const ClientTable = (props) => {
    const clients = props.clients

    const dateFormatter = (date) => {
        const dateObj = new Date(date)
        return dateObj.getFullYear() + "-" + dateObj.getMonth() + "-" + dateObj.getDay();
    }

    if (clients.length < 1)
        return <>
            <h2>Aucun Clients Trouvés</h2>
        </>

    return <>
        <table className={"table"}>
            <thead>
                <tr>
                    <th>Identifiant</th>
                    <th>Prenom</th>
                    <th>Nom</th>
                    <th>Sexe</th>
                    <th>Date de Naissance</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(value => {
                    return <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.firstName}</td>
                        <td>{value.lastName}</td>
                        <td>{value.gender}</td>
                        <td>{dateFormatter(value.birthDate)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
export default ClientTable;