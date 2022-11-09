import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - eKitchen`;
    }, [title]);
}

export default useTitle;