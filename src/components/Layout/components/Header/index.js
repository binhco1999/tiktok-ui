import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlus,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'Fr',
                    title: 'French',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('btn-action')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('btn-action')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('btn-action')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                text
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                fallback="data:image/png;base64,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"
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/120073963_3005327479694357_7457786720289630508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I4oPWKhlhP8AX_2__DH&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_nPmkJ8lLQx_YUCqrXetOJSulrawIr_OTyoVBvCZ1hDw&oe=62B59416"
                                alt="User Name"
                            />
                        ) : (
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
