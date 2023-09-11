import React, { useEffect, useState } from 'react';
import '../../sass/denyApplication.sass';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { getId } from '../../app/slice';
import { sendDeny } from '../../app/sliceDeny';
import { getApplicationId, getStatusApplicationId } from '../../app/getApplicationId';
import { useNavigate } from 'react-router-dom';

interface IDenyApplication {
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const DenyApplication = (item: IDenyApplication) => {
  const [contentDeny, setContentDeny] = useState<JSX.Element>()
  const [deny, setDeny] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = useSelector(getId);
  const status = useSelector(getStatusApplicationId);
  const clickDeny = () => {
    dispatch(sendDeny(id));
    setDeny(true);
  };
  const close = () => {
    if (status === 'CLIENT_DENIED') {
      navigate('/home');
    } else item.setActive(false);
  };
  useEffect(() => {
    dispatch(getApplicationId(id));
    console.log(status)
    if (deny) {
      setContentDeny(<>
        <p>Your application has been deny!</p>
        <div className='deny-application_button'>
          <button className='deny-application-button__go-home' onClick={() => navigate('/home')}>Go home</button>
        </div>
      </>);
    } else {
      setContentDeny(<>
        <p>You exactly sure, you want to cancel this application?</p>
        <div className='deny-application_button'>
          <button className='deny-application-button__deny' onClick={() => clickDeny()}>Deny</button>
          <button className='deny-application-button__cancel' onClick={() => item.setActive(false)}>Cancel</button>
        </div>
      </>);
    }
  }, [status, deny]);
  return (
    <div className={item.active ? 'deny-application active' : 'deny-application'}>
      <div className='deny-application__content'>
        <div className='deny-application__title'>
          <h3>Deny application</h3>
          <img onClick={() => close()} src={'../../img/сlose-square.png'} alt='сlose square' />
        </div>
        {contentDeny}
      </div>
    </div>
  );
};