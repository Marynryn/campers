import css from "./Datails.module.css"

const Details = ({ props }) => {
    console.log(props)

    return (
        <div>
            <h4 className={css.details_title}>Vehicle equipment</h4>
            <table>

                <tbody>
                    <tr>
                        <td>Form</td>
                        <td>{props.form}</td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>{props.length}</td>
                    </tr>
                    <tr>
                        <td>Width</td>
                        <td>{props.width}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{props.height}</td>
                    </tr>
                    <tr>
                        <td>Tank</td>
                        <td>{props.tank}</td>
                    </tr>
                    <tr>
                        <td>Consumption</td>
                        <td>{props.consumption}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};


export default Details