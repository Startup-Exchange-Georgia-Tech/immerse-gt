import './TrackCard.css'

export default function TrackCard(props) {
    return (
        <div className='TrackCard'>
            <div className='trackcard_title'>{props.name}</div>
            <div className='trackcard_description'>{props.children}</div>
        </div>
    )
}