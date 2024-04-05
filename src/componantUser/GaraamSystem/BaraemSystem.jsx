import React from 'react'
import RegimeMassacres from '../SectionsUser/RegimeMassacres/RegimeMassacresUser'
import Martyrs from '../SectionsUser/Martyrs/MartyrsUser'
import Missing from '../SectionsUser/Missing/MissingUser'
import Detainees from '../SectionsUser/Detainees/DetaineesUser'
import SliderGaraemSystem from './SliderGaraemSystem'
export default function BaraemSystem() {
  return (
    <>
    <div className='container'>
           <div className="header position-relative py-5">
            <h3 className=" text-danger"> مجاز النظام</h3>
          </div>
         </div>
    <RegimeMassacres/>
    <SliderGaraemSystem/>
    <Martyrs/>
    <SliderGaraemSystem/>
    <Missing/>
    <Detainees/>
    <SliderGaraemSystem/>
    
    </>
  )
}
