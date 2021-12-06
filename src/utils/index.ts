import {useEffect, useState} from "react";

export const isFalsy = (value:any) => value===0?true:!!value;

export const cleanObject = (obj:any):object=>{
	console.log(obj)
	const result = {...obj}
	Object.keys(result).forEach(key=>{
		if(!isFalsy(result[key]))
			delete result[key]
	})

	return result
}

export const useMount = (callback:()=>void):void=>{
	useEffect(()=>{
		callback()
	},[callback])
}

export const useDebounce = (value:any, delay?:number):any=>{

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(()=>{
		const timeout = setTimeout(()=>setDebouncedValue(value), delay);

		return ()=>clearTimeout(timeout);

	},[value,delay])

	return debouncedValue;
}