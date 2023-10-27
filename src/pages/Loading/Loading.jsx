import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
    return (
        <div className='bg-gray-300 bg-opacity-80 flex flex-col items-center justify-center h-[100vh] w-full'>
            <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
            <p>Chờ xíu nhie...</p>
        </div>
    )
}
