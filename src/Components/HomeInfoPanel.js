import React, { useEffect, useState, Fragment } from 'react'
import GD from './GD.js'
import './HomeInfoPanel.css'

function HomeInfoPanel() {

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://covid19.mathdro.id/api");
            console.log(response)
            const { confirmed, recovered, deaths, lastUpdate } = await response.json();
            console.log(confirmed.value)
            setGlobalData(
                {
                    confirmed: confirmed.value,
                    recovered: recovered.value,
                    deaths: deaths.value,
                    lastUpdate:lastUpdate,
                }
            )

        }
        getData();
    }, [])
    return (

        <Fragment>

            <div className='DisplayText'>
                <b className='DisplayTextLarge'>
                    Let's Help
                    <br />
                    Recover The Earth ,
                    <br />
                    <b className='DisplayTextLargeColor'>Start From Us !</b>
                    <br />
                </b>
                <b className='DisplayTextSmall'>
                    The outbreak of coronavirus isssue
                    <br />
                    or called Covid-19 makes the Earth grieve
                    </b>
                <br />
                <button className='LearnMore'> Learn More</button><button className='WatchVideo'>Watch Video</button>
            </div>

            <br />

            <div className='GlobalData'>
                <div className='GlobalCard'>Total Cases<br /><b className='GlobalDataTextStyling'>{globalData.confirmed}</b></div>
                <div className='GlobalCard'>Total Recovered<br /><b className='GlobalDataTextStyling'>{globalData.recovered}</b></div>
                <div className='GlobalCard'>Total Deaths<br /><b className='GlobalDataTextStyling'>{globalData.deaths}</b></div>
                <div className='GlobalCard'>New Cases Reported<br /><b className='GlobalDataTextStyling'>{new Date(globalData.lastUpdate).toDateString()}</b></div>
            </div>

        </Fragment>
    )

}

export default HomeInfoPanel;