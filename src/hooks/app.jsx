import { useState } from "react";

export function useOpenSidebar() {
    const [openSidebar, setOpenSidebar] = useState(true);
    const handleOpenSidebar = () => {
        const isOpen = !openSidebar;
        setOpenSidebar(isOpen);
        return isOpen;
    };
    return { openSidebar, handleOpenSidebar, cssClass: !openSidebar ? " close-sidebar" : "" };
}
