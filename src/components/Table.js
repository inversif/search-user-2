import React from 'react';

const RenderTable = (props) => {
    // console.log('props: ', props.content[0]);
    return (
        <table className="mt-5 table table-hover table-primary">
            <thead>
                <tr>
                    <th 
                        onClick={() => props.sortTable('username') }
                    >Username</th>
                    <th
                        onClick={() => props.sortTable('name') }
                    >Name</th>
                    <th
                        onClick={() => props.sortTable('email') }
                    >Email</th>
                    <th
                        onClick={() => props.sortTable('gender') }
                    >Gender</th>
                    <th
                        onClick={() => props.sortTable('registed_date') }
                    >Registered Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.content.map((object, index) => {
                        return (
                            <tr key={index} className="table-light">
                                <td>{object.login.username}</td>
                                <td>{object.name.first} {object.name.last}</td>
                                <td>{object.email}</td>
                                <td>{object.gender}</td>
                                <td>{object.registered.date}</td>
                            </tr>
                        );
                    })
                }
                {/* <tr>
                    <td>ABC</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>ABC</td>
                    <td>1</td>
                </tr> */}
            </tbody>
        </table>
    );
};

export default RenderTable;