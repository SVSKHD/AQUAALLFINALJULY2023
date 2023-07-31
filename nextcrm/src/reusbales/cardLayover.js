import Card from 'react-bootstrap/Card';
const AquaCardLayover = (props) => {
    return (
        <>
            <Card className='shadow-lg'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default AquaCardLayover