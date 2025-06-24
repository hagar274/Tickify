import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import googleLogo from '../images/google.png';
import facebookLogo from '../images/facebook.png';
import xLogo from '../images/X.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LoginCard = styled.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin-top: -15rem;
  margin-right: 7rem;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`;

const LoginTitle = styled.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: end;
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`;

const LoginSubtitle = styled.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  text-align: end;
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
    text-align: end;
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    margin-right: 20px;
    padding-right: 5rem;

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;
  }
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;
  }
`;

const ForgotPassword = styled.a`
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #001a33;
  }
`;

const SocialLoginSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`;

const DividerText = styled.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.facebook {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}
    .facebook img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
        facebook:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
    .google {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}
    .google img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    .google:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
 .twitter {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}   
    .twitter img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    .twitter:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px 24px 24px;
  min-width: 320px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  text-align: center;
`;

const Login = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { setIsSidebarOpen } = useSidebar();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [forgotMsg, setForgotMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;
    if (!email) {
      setEmailError(language === 'ar' ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email');
      hasError = true;
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError(language === 'ar' ? 'يرجى إدخال كلمة المرور' : 'Please enter your password');
      hasError = true;
    } else {
      setPasswordError('');
    }
    if (hasError) return;
    localStorage.setItem('isLoggedIn', 'true');
    setIsSidebarOpen(false);
    navigate('/');
  };

  return (
    <Container>
      <LoginCard>
        <LoginTitle>
          {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
        </LoginTitle>
        <LoginSubtitle>
          {language === 'ar' ? 'مرحباً بعودتك! قم بتسجيل الدخول للوصول إلى حسابك' : 'Welcome back! Sign in to access your account'}
        </LoginSubtitle>
        <form onSubmit={handleLogin}>
          {emailError || passwordError && (
            <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{emailError || passwordError}</div>
          )}
          <FormGroup>
            <label>{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              style={emailError ? { borderColor: 'red' } : {}}
            />
            {emailError && (
              <div style={{ color: 'red', fontSize: '13px', marginTop: '4px', textAlign: 'end' }}>{emailError}</div>
            )}
          </FormGroup>
          <FormGroup>
            <label>{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
              style={passwordError ? { borderColor: 'red' } : {}}
            />
            {passwordError && (
              <div style={{ color: 'red', fontSize: '13px', marginTop: '4px', textAlign: 'end' }}>{passwordError}</div>
            )}
          </FormGroup>
          <FormOptions>
            <RememberMe>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">{language === 'ar' ? 'تذكرني' : 'Remember me'}</label>
            </RememberMe>
            <ForgotPassword href="#" onClick={e => { e.preventDefault(); setShowForgotModal(true); }}>
              {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </ForgotPassword>
          </FormOptions>
          <LoginButton type="submit">
            {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
          </LoginButton>
        </form>
        <SocialLoginSection>
          <Divider>
            <Line />
            <DividerText>{language === 'ar' ? 'أو سجل الدخول باستخدام' : 'Or login with'}</DividerText>
            <Line />
          </Divider>
          <SocialButtonsContainer>
            <SocialButton className="google">
              <img src={googleLogo} alt="Google" />
            </SocialButton>
            <SocialButton className="facebook">
              <img src={facebookLogo} alt="Facebook" />
            </SocialButton>
            <SocialButton className="twitter">
              <img src={xLogo} alt="X" />
            </SocialButton>
          </SocialButtonsContainer>
        </SocialLoginSection>
        <SignupLink>
          {language === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}
          <a href="/signup">{language === 'ar' ? 'إنشاء حساب' : 'Sign up'}</a>
        </SignupLink>
        {showForgotModal && (
          <ModalOverlay>
            <ModalBox>
              <h3 style={{marginBottom: 16}}>{language === 'ar' ? 'استعادة كلمة المرور' : 'Password Recovery'}</h3>
              <form onSubmit={e => {
                e.preventDefault();
                if (!forgotEmail) {
                  setForgotError(language === 'ar' ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email');
                  setForgotMsg('');
                  return;
                }
                setForgotError('');
                setForgotMsg(language === 'ar' ? 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني' : 'A password reset link has been sent to your email');
                setForgotEmail('');
              }}>
                <input
                  type="email"
                  placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  value={forgotEmail}
                  onChange={e => setForgotEmail(e.target.value)}
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: forgotError ? '1px solid red' : '1px solid #ccc', marginBottom: 8 }}
                />
                {forgotError && <div style={{ color: 'red', fontSize: '13px', marginBottom: '8px', textAlign: 'end' }}>{forgotError}</div>}
                {forgotMsg && <div style={{ color: 'green', fontSize: '13px', marginBottom: '8px', textAlign: 'end' }}>{forgotMsg}</div>}
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
                  <button type="submit" style={{ background: '#00233d', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', fontSize: '1rem', cursor: 'pointer' }}>{language === 'ar' ? 'إرسال' : 'Send'}</button>
                  <button type="button" style={{ background: '#eee', color: '#222', border: 'none', borderRadius: 6, padding: '8px 20px', fontSize: '1rem', cursor: 'pointer' }} onClick={() => { setShowForgotModal(false); setForgotError(''); setForgotMsg(''); setForgotEmail(''); }}>{language === 'ar' ? 'إلغاء' : 'Cancel'}</button>
                </div>
              </form>
            </ModalBox>
          </ModalOverlay>
        )}
      </LoginCard>
    </Container>
  );
};

export default Login;
