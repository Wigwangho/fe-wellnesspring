import React, { useEffect } from 'react';
import { CButton } from '@coreui/react';

const Alarm = () => {

  const sportAlert = {
    body: '운동시간입니다.',
    icon: '/logo192.png', // 알림에 표시할 아이콘
    dir: 'ltr', // 텍스트 방향 (ltr: 왼쪽에서 오른쪽)
    tag: 'unique-tag', // 알림 태그 (같은 태그의 알림은 중복되지 않음)
    data: { url: 'http://localhost:3000/dashboard' }, // 알림과 관련된 데이터 (예: 클릭 시 이동할 URL)
  };

  useEffect(() => {
    // 알림 권한 요청 및 알림 기능
    const subscribe = () => {

      if (!("Notification" in window)) {
        alert("알림을 지원하지 않는 브라우저입니다.");
        return;
      }

      if (Notification.permission === "granted") {
        new Notification("운동알림!",sportAlert);
        return;
      }

      if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification("알림이 구독되었습니다");
          }
        });
      }
    };

    // 컴포넌트가 마운트될 때 알림 권한을 요청합니다.
    subscribe();
  }, []);

  const handleNotificationClick = () => {
    if (Notification.permission === "granted") {
      new Notification("사용자가 버튼을 클릭했습니다!");
    } else {
      alert("알림 권한이 허용되지 않았습니다.");
    }
  };

  return (
    <div>
      <h1>Notification 테스트</h1>
      <CButton color="primary" onClick={handleNotificationClick}>알림 테스트</CButton>
    </div>
  );
};

export default Alarm;
