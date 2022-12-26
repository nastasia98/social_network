import s from './FriendItem.module.css'

const FriendItem = (props) => {

    return (
        <div className={s.friends}>
            {props.name}
        </div>
    )
}
export default FriendItem;