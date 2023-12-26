import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import RegsiterForm from "../users/RegsiterForm";

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    ActivityLife
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Добро пожаловать!' />
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Перейти к событиям
                        </Button>
                    </>
                ) : (
                    <>
                    <Button onClick={() => modalStore.openModal(<LoginForm/>) } size='huge' inverted>
                        Войти
                    </Button>
                    <Button onClick={() => modalStore.openModal(<RegsiterForm/>) } size='huge' inverted>
                        Зарегистирироваться
                    </Button>

                    </>
                )}
            </Container>
        </Segment>
    )
})