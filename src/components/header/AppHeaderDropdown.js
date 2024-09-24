import React, { useState } from 'react';
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import {
  cilBell,
  cilLockLocked,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import avatar8 from './../../assets/images/avatars/8.jpg';
import AlertPopup from 'src/views/alarm/alarm/AlertPopup';

const AppHeaderDropdown = () => {
  const nav = useNavigate();
  const user = useSelector(state => state.user);

  // 알림 모달을 위한 상태 관리
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = (e) => {
    e.preventDefault(); // 기본 동작 차단
    console.log('Bell clicked!'); // 클릭 이벤트 확인용 로그
    setShowNotifications(true); // 모달 열기
  };

  return user ? (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* 아바타 드롭다운 */}
        <CDropdown variant="nav-item">
          <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
            <CAvatar src={avatar8} size="md" />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>

            <CDropdownDivider />
            <CDropdownItem href="#">
              <CIcon icon={cilLockLocked} className="me-2" />
              Lock Account
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>

        {/* 알림 버튼 */}
        <CButton color="link" onClick={handleBellClick} style={{ textAlign: 'left', padding: 0, marginLeft: '18px' }}>
          <CIcon icon={cilBell} className="me-2" style={{ fontSize: '1.5rem' }} />
          <CBadge color="info" className="ms-2">
          </CBadge>
        </CButton>
      </div>

      {/* 알림 모달 */}
      <AlertPopup
        visible={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  ) : ( // 로그인 안된 경우
    <>
      <CButton color='secondary' onClick={() => nav("/login")}>Login</CButton>
    </>
  );
};

export default AppHeaderDropdown;
