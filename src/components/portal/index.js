import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './index.module.scss';

function Portal({ children }) {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        el.current.className = style.portal;
        document.body.appendChild(el.current);
        return () => {
            document.body.removeChild(el.current);
        };
    }, []);


    return createPortal(
        <>{children}</>,
        el.current
    )
}

export default Portal;