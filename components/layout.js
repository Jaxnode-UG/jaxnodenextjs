export default (props) => {
    return (<div>
        {props.children}
        <style jsx>{`
            body {
                margin: 0px;
                font-family: 'Open Sans, Helvetica';
                padding-top: 72px;
            }
            div {
                background: red;
                max-width: 1140px; 
                width: auto; 
                padding-right: 15px; 
                padding-left: 15px; 
                margin-right: auto; 
                margin-left: auto;
            }
            @media (max-width: 600px) {
                div {
                    background: blue;
                }
            }
      `}</style>
    </div>)
}