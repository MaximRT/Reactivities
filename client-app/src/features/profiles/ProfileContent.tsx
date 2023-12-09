import React from 'react'
import { Tab } from 'semantic-ui-react'
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import ProfileAbout from './ProfileAbout';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent ({profile}: Props) {
    const panes = [
        {menuItem: 'Инфо', render: () => <ProfileAbout />},
        {menuItem: 'Фотографии', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: 'События', render: () => <Tab.Pane>События</Tab.Pane>},
        {menuItem: 'Подписчики', render: () => <Tab.Pane>Подписчики</Tab.Pane>},
        {menuItem: 'Подписки', render: () => <Tab.Pane>Подписки</Tab.Pane>}
    ];
    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    )
})