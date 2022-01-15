function Film(props) {
    return(
            <tr>
                <td>{props.film.title}</td>
                <td>{props.film.genre}</td>
                <td>{props.film.released_at}</td>
                <td>{props.film.original_language}</td>
                <td>{props.film.poster}</td>
                <td>{props.film.director}</td>
                <td>{props.film.overview}</td>
                <td>{props.film.rating}</td>
                <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.film)}>Editar</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.film)}>Eliminar</button>
            </td>
            </tr>
    )
}
export default Film;