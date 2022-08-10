import React,{lazy,Suspense} from 'react'
const Lazy=lazy(()=>import('./lazydemofile'));
const lazyloading = () => {
  return (
    <>
    <div><h1>Lazyloading</h1></div>
    <Suspense fallback={<div>Please Wait...</div>}>
        <Lazy />
    </Suspense>
    </>
  )
}

export default lazyloading