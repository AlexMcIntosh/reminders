import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Edit } from './Edit/Edit';
import { Overview } from './Overview/Overview';
import { MyLists } from './MyLists/MyLists';

export const Home = () => {
    return (
        <Container>
            <Edit />
            <Overview />
            <MyLists />
        </Container>
    )
}