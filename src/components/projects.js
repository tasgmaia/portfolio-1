import React from 'react'

const Projects = () => (
    <div>
        <Project title="Lorem ipsum"/>
        <Project title="Lorem ipsum"/>
        <Project title="Lorem ipsum"/>
        <Project title="Lorem ipsum"/>
        
    </div>
)

class Project extends React.Component {
    render() {
        const {title} = this.props;
        
        return (
            <a href="#" className="link bg-light-gray h5 mv4 w-100 dim db pa2 shadow-4">
                <h3>{title}</h3>
            </a> 
        )
    }
}

export default Projects