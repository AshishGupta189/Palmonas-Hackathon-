import FuzzyText from '../external/FuzzyText';

const PageNotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      
  
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
      >
        404
        Not Found !
      </FuzzyText>
    </div>
  )
}

export default PageNotFound
