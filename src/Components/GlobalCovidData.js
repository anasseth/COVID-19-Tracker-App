import React, { useEffect, useState, Fragment } from 'react'

function GlobalCovidData() {

    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            setGlobalData(data.results[0]);
            console.log(data)
        }
        getData();
    }, [])


    return (
        <Fragment>
            <div className='GlobalCovidData'>
                <div className='GlobalCovidDataCard'>Total Cases<br /><b className='GlobalCovidDataTextStyling'>{globalData.total_cases}</b></div>
                <div className='GlobalCovidDataCard'>Total Recovered<br /><b className='GlobalCovidDataTextStyling'>{globalData.total_recovered}</b></div>
                <div className='GlobalCovidDataCard'>Total Deaths<br /><b className='GlobalCovidDataTextStyling'>{globalData.total_deaths}</b></div>
                <div className='GlobalCovidDataCard'>New Cases Reported<br /><b className='GlobalCovidDataTextStyling'>{globalData.total_new_cases_today}</b></div>
            </div>
        </Fragment>
    );
}

export default GlobalCovidData;