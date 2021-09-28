import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useActiveLink = (link: string): boolean => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (router.pathname === link) {
            setActive(true);
        }
    }, [link, router.pathname]);

    return active;
};

export default useActiveLink;
