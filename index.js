import React from 'react'

/**
 * Home is a component
 */

function Home(){
    const listItems = [1,2,3,4,5]

    const addItem = ()=> {
        const variableA = 1;
        const variableB = 3;
        const variableC = 2;

        return variableA*3 + variableC*variableB
    }
    return (
        <><div>Home</div>
        <p>hello world</p>
        <buton onclick={addItem}/>    
        </>
    )
}

export default Home