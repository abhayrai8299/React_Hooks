import React,{memo} from 'react'

const memo1 = ({data}) => {
    console.log("Inner memo1");
  return (
    <div>memo:{data}</div>
  )
}

export default memo(memo1)