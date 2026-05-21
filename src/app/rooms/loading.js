import { SyncLoader } from 'react-spinners';

const LoadingData = () => {
    return (
        <div className='flex justify-center items-center min-h-screen mx-auto'>
            <SyncLoader />
        </div>
    );
};

export default LoadingData;