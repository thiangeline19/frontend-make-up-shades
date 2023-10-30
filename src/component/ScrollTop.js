import React, { useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Fragment>{children}</Fragment>
}