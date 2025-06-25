import './Projects.css'
import RecentWorks from './RecentWork'

const projects = () => {
    const proList = [
        {
            name: "Project 1",
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
                    <h1>{pro.name}</h1>
                    <div className="Pro-img">
                        <p>{pro.discription}</p>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default projects