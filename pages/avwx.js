import axios from 'axios'

class avwx extends React.Component {
    
    static async getInitialProps({query}) {
        const results = await axios.get(`https://avwx.herokuapp.com/metar/${query.id}`);
        const flight_category = results.data.reports[0].flight_category;
        return { id: query.id, avwx: flight_category };
    }

    render() {
        return (<div>Current Aviation weather for {this.props.id} is {this.props.avwx}.</div>)
    }
}

export default avwx;