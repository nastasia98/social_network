import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
           {/* <div className={s.fon}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="first-photo"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photo"/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <div>Обо мне: {props.profile.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;