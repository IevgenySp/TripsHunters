/**
 * Created by isp on 12/9/17.
 */

export default {
    dataSet1: {
        type: 'Boston marathon data',
        data: [
            {
                id: 1,
                musk: ['boston', 'marathon', '2017'],
                answerType: 'time',
                answer: '2:09:37',
                details: 'Geoffrey Kirui'
            },
            {
                id: 2,
                musk: ['boston', 'marathon', '2016'],
                answerType: 'time',
                answer: '2:12:45',
                details: 'Lemi Berhanu Hayle'
            },
            {
                id: 3,
                musk: ['boston', 'marathon', '2015'],
                answerType: 'time',
                answer: '2:09:17',
                details: 'Lelisa Desisa'
            },
            {
                id: 4,
                musk: ['boston', 'marathon', '2014'],
                answerType: 'time',
                answer: '2:08:37',
                details: 'Meb Keflezighi'
            },
            {
                id: 5,
                musk: ['boston', 'marathon', '2013'],
                answerType: 'time',
                answer: '2:08:37',
                details: 'Meb Keflezighi'
            },
            {
                id: 6,
                musk: ['boston', 'marathon', 'route'],
                answerType: 'map',
                answer: [
                    {lat: 42.2250997, lng: -71.6016007},
                    {lat: 42.2597355, lng: -71.5055434},
                    {lat: 42.3049056, lng: -71.5069519},
                    {lat: 42.3049056, lng: -71.5069519},
                    {lat: 42.2845782, lng: -71.3498332},
                    {lat: 42.2935733, lng: -71.3081164},
                    {lat: 42.2935729, lng: -71.3146825},
                    {lat: 42.3127278, lng: -71.2425293},
                    {lat: 42.3312854, lng: -71.2674545},
                    {lat: 42.3253676, lng: -71.2486973},
                    {lat: 42.3323137, lng: -71.1801523},
                    {lat: 42.3231986, lng: -71.1773658},
                    {lat: 42.3489705, lng: -71.0997378},
                    {lat: 42.3497313, lng: -71.0808711}
                ],
                details: ['Hopkinton', 'Ashland', 'Framingham', 'South Framingham',
                    'Natick Center', 'Wellesley College', 'Wellesley Center',
                    'Wellesley Highlands', 'Newton Lower Falls', 'Newton',
                    'Newton - Chestnut Hill', 'Brookline', 'Kenmore Square',
                    'Copley Square - Finish Line!'],
                mapConfig: {
                    zoomLevel: 9,
                    initialCenter: {
                        lat: 42.28965921575409,
                        lng: -71.29931699999997
                    }
                }
            },
            {
                id: 7,
                musk: ['boston', 'marathon', 'finish', 'line'],
                answerType: 'map',
                answer: [
                    {lat: 42.3497313, lng: -71.0808711}
                ],
                details: [
                    'Copley Square - Finish Line!'
                ],
                mapConfig: {
                    zoomLevel: 17,
                    initialCenter: {
                        lat: 42.3497313,
                        lng: -71.0808711
                    }
                }
            }
        ]
    }
}