import React from 'react';
import '../css/ivsc.css'

class IvsC extends React.Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                "https://fl.thgim.com/the-nation/3v570y/article33644360.ece/alternates/FREE_810/fl12covidcovaxinJPG",
                "https://media.npr.org/assets/img/2021/02/05/indian-13_custom-f1546ccd8a7225f5abf64dad527aa60732cc1a73-s2500-c85.jpg",
                "https://media.npr.org/assets/img/2021/02/05/indian-6_custom-2a3ddbfbd63a4c262e50f69c70341ac143f31ca0-s2500-c85.jpg",
                "https://fl.thgim.com/the-nation/bucd8d/article33644365.ece/alternates/FREE_810/fl12covidharshjpg" ,
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
            <div style = {{width : "inherit" , height : "100%"}} className = "contt">
                <img src = {this.state.images[this.state.currentImage]} alt = "cleaning images" className = "img2"/>
                <p style = {{marginLeft : "10px"}} className = "co">
                    The number of healthcare and frontline workers vaccinated against Covid-19 reached 77.66 lakh on the 28th day of the countrywide inoculation programme, the Union Health Ministry said on February 13. The cumulative number of healthcare and frontline workers vaccinated against Covid-19 till 6 pm on Friday is 77,66,319 as per the provisional report, the ministry said.<br></br><hr></hr>
                    These include 58,65,813 healthcare workers (58.9 per cent of the target number) and 19,00,506 frontline workers (21.2 per cent of the target beneficiaries) whose vaccination started on February 2, it said. "A total 2,61,309 beneficiaries were vaccinated till 6 pm on Friday across 35 states and UTs. These include 50,837 HCWs and 2,10,472 FLWs as per provisional figures," the ministry said.<br></br><hr></hr>
                    <strong>WHEN WILL OTHERS GET THE VACCINE?</strong><br></br>
The third phase of vaccination - which will cover 27 crore people aged 50 and those with co-morbidities - is likely to commence in March, Health Minister Harsh Vardhan had said in the Lok Sabha on Friday. He added that the vaccination drive for frontline workers had begun this week. "In the coming days, 27 crore people who are of above 50 years of age and those under 50 with co-morbidities will be vaccinated. It is not possible to give an exact date, but we estimate that this process can start in the second, third, or the fourth week of March," he said.
                </p>
            </div>
        )
    }
}
export default IvsC;