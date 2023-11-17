import { Card, Input, Button, Link, Typography } from 'diego-react-delta-ui';
// import { FaRegQuestionCircle } from 'react-icons/fa';
import spotifyLogo from '../../assets/images/Spotify_Logo_RGB_Green.png'
import styles from './login.module.scss';

export const Login = () => {

  return (
    <div className={styles.loginMainContainer}>
      {/* <img src={spotifyLogo} alt='spotify' width={200} height='auto' /> */}
      <div className={styles.cardContainer}>
        <Card fullWidth headerTitle='Log In'>
          <form className={styles.form}>
            <Input
              type='text'
              label='User'
              placeholder='Email or Username'
              onChange={(val) => console.log(val)}
              fullWidth
            />
            <Input
              type='password'
              label='Password'
              placeholder='Password'
              onChange={(val) => console.log(val)}
              fullWidth
            />
            <Button
              fullWidth
              type='submit'
              className={styles.loginButton}
              variant='filled'
            >
              Log In
            </Button>
          </form>
          <div className={styles.signUpContainer}>
            <Typography>Don't you have an account?</Typography>
            <Link target='_blank' href='https://www.spotify.com/mx/signup?flow_id=235f4574-0a79-45c1-bfb0-330663eb4823%3A1700221768&forward_url=https%3A%2F%2Faccounts.spotify.com%2Fen%2Fstatus'>
              Sign Up
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
