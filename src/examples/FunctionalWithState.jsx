import React from 'react';

export const FunctionalWithState = () => {
    let count = 0;

    return (
        <div class="container">
            Counter: {count}
        <div>
            <button type="button" className="btn btn-primary m-3" onClick={() => {count++}} >Increase</button>
            <button type="button" className="btn btn-primary m-3" onClick={() => {count--}}>Decrease</button>
        </div>
        </div>
    )
}