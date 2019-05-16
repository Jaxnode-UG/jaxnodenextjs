import axios from 'axios'

class weather extends React.Component {
    
    static async getInitialProps() {
        const results = await axios.get('https://avwx.herokuapp.com/metar/kcrg');
        const flight_category = results.data.reports[0].flight_category;
        return { avwx: flight_category };
    }

    render() {
        return (<div>Current Aviation weather for CRG is {this.props.avwx}.</div>)
    }
}

export default weather;