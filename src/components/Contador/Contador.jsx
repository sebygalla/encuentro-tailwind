import React, { useState } from 'react';

function Container(){

    const [contar, setContar] = useState(0)
    const incrementar = () => {
       setContar( contar + 1 )
    }


    return(     

        <div className='bg-yellow-400 p-10 flex flex-col mx-auto items-center'>
            <p className='bg-blue-900 text-white p-4 m-5 rounded-lg'>
                {contar}
            </p>
            <button className='bg-red-900 text-white p-3 rounded-lg hover:bg-red-200 hover:text-black ' onClick={incrementar}>incrementar</button>
        </div>

    );
};

export default Container;