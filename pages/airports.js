import Link from 'next/link';

const LocalAirports = [
    { name: 'JAXEX', identifier: 'kcrg'},
    { name: 'Jacksonville International Airport', identifier: 'kjax'},
    { name: 'Cecil Field', identifier: 'kvqq'}
];

const AirportLink = (props) => <p>
    <Link as={`/avwx/${props.identifier}`} href={`/avwx?id=${props.identifier}`}>
        <a>{props.name}</a>
    </Link>
</p>

export default () => <div>
    <h1>Airport Weather</h1>
    {LocalAirports.map(item => (<AirportLink key={item.identifier} name={item.name} identifier={item.identifier} /> ))}
</div>;