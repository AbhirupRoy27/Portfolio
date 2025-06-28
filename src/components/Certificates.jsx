import './Certificates.css'
import RecentWorks from './RecentWork'

const projects = () => {
    const proList = [
        {
            name: "",
            link: "#",
            discription: "Image Loading",
            
        },
    ]

    return (
        <div className="Project-box">
            <h1>Work in progress<span>....</span></h1>
            <h1>check Recent Work</h1>
            {proList.map((pro) => (
                <div className="Project-display">
                    <div className="Pro-img">
                        <p>{pro.discription}</p>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default projects