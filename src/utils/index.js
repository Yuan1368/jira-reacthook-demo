import {useEffect, useState} from "react";

export const isFalsy = (value) => value===0?true:!!value;

export const cleanObject = (obj)=>{
	console.log(obj)
	const result = {...obj}
	Object.keys(result).forEach(key=>{
		if(!isFalsy(result[key]))
			delete result[key]
	})

	return result
}

export const useMount = (callback)=>{
	useEffect(()=>{
		callback()
	},[callback])
}

export const useDebounce = (value, delay)=>{

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(()=>{
		const timeout = setTimeout(()=>setDebouncedValue(value), delay);

		return ()=>clearTimeout(timeout);

	},[value,delay])

	return debouncedValue;
}