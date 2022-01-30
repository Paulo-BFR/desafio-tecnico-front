//import { Table, Cell } from 'rsuite';
import Table from 'react-bootstrap/Table'
import React from 'react';


const Home = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Skill</th>
                    <th>Level</th>
                    <th>Opções</th>
                </tr>
            </thead>


            <tbody>
                {Array.from({ length: 3 }).map((_, index) => (
                    <tr>
                        <td>1</td>
                        <td key={index}>Table cell {index}</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Home;