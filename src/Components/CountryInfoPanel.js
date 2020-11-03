import React, { useEffect, useState, Fragment } from 'react'
import styles from './CountryInfoPanel.module.css'
import './HomeInfoPanel.css'
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function CountryInfoPanel(props) {
    const [globalData, setGlobalData] = useState({});
    const [countryName, setCountryFromProps] = useState('');

    useEffect(() => {
        setCountryFromProps(props.CountryName)
        async function getData() {
            const response = await fetch(`https://covid19.mathdro.id/api/countries/${props.CountryName}`);
            console.log(response)

            const { confirmed, recovered, deaths, lastUpdate } = await response.json();
            console.log(confirmed.value)
            setGlobalData(
                {
                    confirmed: confirmed.value,
                    recovered: recovered.value,
                    deaths: deaths.value,
                    lastUpdate: lastUpdate,
                }
            )
        }
        getData();
    }, [props.CountryName])
    return (
        <Fragment>
            <div className={styles.CountryData}>
                <div className={styles.CountryCard}>Total Cases<br /><b className={styles.CountryDataTextStyling}>{globalData.confirmed}</b></div>
                <div className={styles.CountryCard}>Total Recovered<br /><b className={styles.CountryDataTextStyling}>{globalData.recovered}</b></div>
                <div className={styles.CountryCard}>Total Deaths<br /><b className={styles.CountryDataTextStyling}>{globalData.deaths}</b></div>
                {/* <div className='GlobalCard'>New Cases Reported<br /><b className='GlobalDataTextStyling'>{new Date(globalData.lastUpdate).toDateString()}</b></div> */}
            </div>
            <div className={styles.container}>
                <b>{props.CountryName}</b>
                <div className={styles.containerBar}>
                    <Bar
                        data={{
                            labels: ['Infected', 'Recovered', 'Deaths'],
                            datasets: [
                                {
                                    label: 'People',
                                    backgroundColor: ['rgba(121, 75, 143,0.8)', 'rgba(150, 184, 212, 0.8)', 'rgba(255, 0, 0, 0.5)'],
                                    borderColor: [
                                        'rgba(255, 255, 255, 1)',
                                        'rgba(255, 255, 255, 1)',
                                        'rgba(255, 255, 255, 1)',]
                                    ,
                                    borderWidth: 3,
                                    fontColor: 'purple',
                                    data: [globalData.confirmed, globalData.recovered, globalData.deaths],
                                },
                            ],
                        }}
                        options={{
                            legend: {
                                display: false,
                                fontColor: 'purple'
                            },
                            title: {
                                display: true,
                                text: `Current state in ${props.CountryName}`,
                                fontColor: 'purple'
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: 'purple'
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'purple'
                                    },
                                }]
                            }
                        }}
                    />
                </div>
                <div className={styles.containerDoughnut}>
                    <Doughnut data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                label: 'People',
                                backgroundColor: ['rgba(121, 75, 143,0.8)', 'rgba(150, 184, 212, 0.8)', 'rgba(255, 0, 0, 0.5)'],
                                borderColor: [
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)',]
                                ,
                                borderWidth: 2,
                                fontColor: 'purple',
                                data: [globalData.confirmed, globalData.recovered, globalData.deaths],
                            },
                        ],
                    }} />
                </div>
            </div>
        </Fragment>
    )
}

