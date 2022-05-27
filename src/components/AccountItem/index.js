import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/120073963_3005327479694357_7457786720289630508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I4oPWKhlhP8AX_2__DH&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_nPmkJ8lLQx_YUCqrXetOJSulrawIr_OTyoVBvCZ1hDw&oe=62B59416"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Binh Co</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>tranbinhco99</span>
            </div>
        </div>
    );
}

export default AccountItem;
