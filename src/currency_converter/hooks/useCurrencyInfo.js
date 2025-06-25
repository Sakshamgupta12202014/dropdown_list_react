// you can use the builtIn hooks in your custom hooks

import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {

        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["rates"]))

    }, [currency])  // when currency changes then this function should be called

    return data    // this data will be used to provide options to the user 
}

// to use this hook in other files export it 
export default useCurrencyInfo