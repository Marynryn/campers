const Details = ({ props }) => {
    console.log(props)
    // const { form, length, width, height, tank, consumption } = props;
    return (
        <div>
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