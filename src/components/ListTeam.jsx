import React, { useContext } from "react"
import { Row, Col, ListGroup } from "react-bootstrap"
import { Context } from "../store"

export default function ListTeam() {

    const [state] = useContext(Context)

    return (
        <Row>
          {state.groups.length > 0 ? state.groups.map((item, index) => (
            <Col key={index} sm='6' md='4' className='mb-4'>
              <ListGroup>
                <ListGroup.Item className='fw-bold'>Tim { index + 1 }</ListGroup.Item>
                {item.map((name, i) => (
                  <ListGroup.Item key={i}>{ i + 1 }. { name }</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          )) : <Col className='text-center'>Belum ada data</Col>}
        </Row>
    )
}