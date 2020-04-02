import React, {Suspense} from 'react';
import Loader from "../Loader/Loader";

const withLazy = (Component) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Component/>
        </Suspense>
    )
};

export default withLazy