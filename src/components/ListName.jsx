import React, { useContext } from 'react'
import { Col, Badge } from 'react-bootstrap'
import { Context } from '../store'

export default function ListName() {

    const [state] = useContext(Context)

    return (
        <Col sm='12' md='6' className='p-5'>
            <h5>Daftar Anggota :</h5>
            {state.arrNames.length > 0 ? state.arrNames.map((item, index) => (
                <Badge key={index} bg='secondary' className='me-2'>{item}</Badge>
            )) : '-'}
        </Col>
    )
}