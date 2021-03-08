import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Batch 101 - Hello user!</h1>
            <p>Ullamco elit consequat qui officia in non ex nisi incididunt occaecat voluptate ex aute est enim incididunt ut dolor ea aute ut ut..</p>
            <Button variant="primary">Go to blogs</Button>
        </Jumbotron>
    )
}