import React from 'react'

const Rewards = () => {
  return (
    <>
        <div className='flex items-center justify-between h-96'>
            <Card value="80+" title="Satisfied clients" />
            <Card value="200+" title="Projects completed" />
            <Card value="10+" title="Pending Project" />
            <Card value="99+" title="Reviews given" />
        </div>
    </>
  )
}

const Card = ({value, title}) => {
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-4xl text-[#0DB760] font-bold'>{value}</p>
        <p className='text-lg font-medium'>{title}</p>
    </div>
  )
}


export default Rewards