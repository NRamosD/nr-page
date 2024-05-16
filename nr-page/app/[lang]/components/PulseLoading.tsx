

interface PulseLoadingProps {
    
}
 
const PulseLoading: React.FunctionComponent<PulseLoadingProps> = () => {
    return ( 
        <div className="w-auto h-auto container-pulser">
            <div className="pulser-circle"></div>
            <div className="pulser-circle"></div>
            <div className="pulser-circle"></div>
        </div>
     );
}
 
export default PulseLoading;