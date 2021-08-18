import React from 'react';
import '../css/home.css'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                "https://media.npr.org/assets/img/2021/02/05/indian-10_custom-0189c6b8f1cedb4a699a572d479ca916af6a70de-s2500-c85.jpg",
                "https://media.npr.org/assets/img/2021/02/05/indian-13_custom-f1546ccd8a7225f5abf64dad527aa60732cc1a73-s2500-c85.jpg",
                "https://media.npr.org/assets/img/2021/02/05/indian-6_custom-2a3ddbfbd63a4c262e50f69c70341ac143f31ca0-s2500-c85.jpg",
                "https://images.unsplash.com/photo-1611287158961-84f21a9a9fb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29yb25hdmlydXMlMjB2YWNjaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
                "https://media.npr.org/assets/img/2021/02/05/indian-21_custom-64abda82e1ee782f9a1ad7b204d353087ec2f7a9-s2500-c85.jpg" ,
                "https://media.npr.org/assets/img/2021/02/05/indian-9_custom-e1c5ff5210417de06184f54ac3d226292e4fb5f9-s2500-c85.jpg"
            ]
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 3000);
    }
    render() {
        return ( 
            <div style = {{width : "inherit" , height : "fit-content"}}>
                <img src = {this.state.images[this.state.currentImage]} alt = "cleaning images" height = "300px" width = "700px" className = "img1"/>
                <div className = "IBody">
                    Coronavirus India Live Updates: India’s total tally of Covid-19 cases rose to 1,10,16,434 on Tuesday, with 10,584 new infections being reported in a day, while the recoveries have surpassed 1.07 crore, according to data from the Union Health Ministry.                
                    With 78 new fatalities in a day, the overall death toll increased to 1,56,463, the data updated at 8 am showed.
                    The number of people who have recuperated from the disease reached 1,07,12,665, translating to a national recovery rate of 97.24 per cent while the case fatality rate stands at 1.42 per cent.<br></br>
                    The active coronavirus infections in the country have reduced to 1,47,306, which comprises 1.34 per cent of the total caseload, the data stated.
                </div>
            </div>
        )
    }
}
export default Home;