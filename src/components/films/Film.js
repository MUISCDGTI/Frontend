function Film(props) {
    return(
            <tr>
                <td class="ant-table-cell">{props.film._id}</td>
                <td class="ant-table-cell">{props.film.title}</td>
                <td class="ant-table-cell">{props.film.genre}</td>
                <td class="ant-table-cell">{props.film.released_at}</td>
                <td class="ant-table-cell">{props.film.poster}</td>
                <td class="ant-table-cell">{props.film.director}</td>
                <td class="ant-table-cell">{props.film.original_language}</td>
                <td class="ant-table-cell">{props.film.overview}</td>
                <td class="ant-table-cell">
                <button onClick={() => props.onDelete(props.film)}>Eliminar</button>
                </td>
            </tr>
    )
}
export default Film;