import React, {} from "react";

import classes from './Property.module.css';
import Card from "../UI/Card/Card";
import galle from '../Media/galle.jpg';
import MainHeader from "../MainHeader/MainHeader";

const Property = (props) => {
    // const [incomingData, setIncomingData] = useState('');

    // useEffect(() => {
        // console.log('FROM PROPERTY',props.hotelData[0].hotels.h1.name);
        // console.log('FROM PROPERTY',props.hotelData.hotels);
        // setIncomingData(props.hotelData)

    // },[]);
    // const listItems = incomingData.map((d) => <li>{d}}</li>);

    return (
        <div>
            <MainHeader/>
            <h1 className={classes.heading}>Around Galle</h1>
            <div>
                <img className={classes.image} src={galle} alt=" " />
                {
                    // incomingData &&
                <ul>
                    {/*{incomingData.map(d => <li key={d.hotels.name}>{d}}</li>)}*/}
                </ul>}


            </div>

            <Card>
                <div>content</div>
            </Card>
        </div>
    );
};

export default Property;
