import React from 'react'
import { Button, Divider, Grid, GridColumn, Header, Item, Reveal, Segment, Statistic } from 'semantic-ui-react'
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';

interface Props {
    profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props) {
    return (
        <Segment>
            <Grid>
                <GridColumn width={12}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size='small' src={profile.image || '/assets/user.png'}/>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName}/>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </GridColumn>
                <Grid.Column width={4}>
                    <Statistic.Group widths={2}>
                        <Statistic label='Подписчики' value='20'/>
                        <Statistic label='Подписки' value='8'/>
                    </Statistic.Group>
                    <Divider />
                    <Reveal animated='move'>
                        <Reveal.Content visible style={{width: '100%'}}>
                            <Button 
                            fluid
                            color='teal'
                            content='Подписаться'/>
                        </Reveal.Content>
                        <Reveal.Content hidden style={{width: '100%'}}>
                            <Button 
                            fluid
                            color={true ? 'red' : 'green'} 
                            content={true ? 'Отписаться' : 'Подписаться'}/>
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
    )
})