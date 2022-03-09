import getAboutMe from "../API/getAboutMe";

function AboutTab() {
    const initialData = getAboutMe()

    const [data, setData] = useState(initialData)
}
return (
    <div>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <thead>
                    <tr>
                        <th className="rowStyle">Past</th>
                        <th className="rowStyle">PRESENT</th>
                        <th className="rowStyle">futurE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row) => (
                            <tr key={row.description}>
                                <td className="rowStyle">{row.image}</td>
                                <td className="rowStyle">{row.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </div>
        </nav>

    </div>

)
                


export default AboutTab


