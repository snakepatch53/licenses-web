import { useState } from "react";

export function useOpen({ toggleSidebar, title: prop_title }) {
    const [title, setTitle] = useState(prop_title);
    const handleTogle = () => {
        const isOpen = toggleSidebar();
        const tmp_title = isOpen
            ? prop_title
            : prop_title
                  .split(" ")
                  .map((word) => word[0])
                  .join("");
        setTitle(tmp_title);
    };
    return { title, handleTogle };
}
