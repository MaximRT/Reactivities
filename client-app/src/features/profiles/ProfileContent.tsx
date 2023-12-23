import React from 'react'
import { Tab } from 'semantic-ui-react'
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';
import ProfileActivities from './ProfileActivities';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent ({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        {menuItem: 'Инфо', render: () => <ProfileAbout />},
        {menuItem: 'Фотографии', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: 'События', render: () => <ProfileActivities />},
        {menuItem: 'Подписчики', render: () => <ProfileFollowings />},
        {menuItem: 'Подписки', render: () => <ProfileFollowings />}
    ];
    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
        />
    )
})