import React, { useContext } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { Context } from '../store'

export default function FormTeam() {

    const [state, dispatch] = useContext(Context)

    const changeNumber = e => dispatch({type: 'SET_NUMBER', payload: e.target.value})
    const changeNames = e => dispatch({type: 'SET_NAMES', payload: e.target.value})

    const resetNames = () => {
        dispatch({type: 'SET_NUMBER', payload: 1})
        dispatch({type: 'SET_NAMES', payload: ''})
        dispatch({type: 'SET_ARRNAMES', payload: []})
    }

    const acak = e => {
        e.preventDefault();
        const grp = []
        const names = state.names
        let data = names.split('\n').filter(item => item !== '')
        dispatch({type: 'SET_ARRNAMES', payload: names.split('\n').filter(item => item !== '')})

        let activeGrp = 0
        while (data.length > 0) {
            data = data.sort((a, b) => 0.5 - Math.random())
            const d = data.shift()
            grp[activeGrp] = grp[activeGrp] ?? []
            grp[activeGrp].push(d)

            if (activeGrp < (state.number - 1)) {
                activeGrp++
            } else {
                activeGrp = 0
            }
        }
        dispatch({type: 'SET_GROUPS', payload: grp})
    }

    return (
        <Col sm='12' md='6' className='p-5'>
            <Form onSubmit={acak}>
                <Form.Group className='mb-3'>
                    <Form.Label>Jumlah Tim</Form.Label>
                    <Form.Control type="number" value={state.number} onChange={changeNumber} placeholder="Masukkan jumlah Tim" min='1' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Anggota</Form.Label>
                    <Form.Control as="textarea" value={state.names} onChange={changeNames} placeholder="Masukkan nama anggota" style={{ height: '200px' }} />
                    <Form.Text className="text-muted">
                        Pisahkan nama dengan enter (baris baru)
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className='me-3'>
                    ACAK
                </Button>
                <Button variant="secondary" type="button" onClick={resetNames}>
                    RESET
                </Button>
            </Form>
        </Col>
    )
}