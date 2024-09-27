import { CCard, CCardBody, CModal } from "@coreui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const editProfile = lazy(() => import("../editProfile/EditProfile"));
const social = lazy(() => import("../social/Social"));

function Profile() {
	const nav = useNavigate();
	const menuList = [
    ["프로필 변경", "간편 로그인 등록"],
		[editProfile, social]
	];
  const [showModals, setShowModals] = useState(menuList.map(() => false));

  useEffect(() => {
    // 소셜(카카오) 로그인 동의 후 리다이렉트 된 것인지 확인
    const url_params = new URL(window.location.href)?.searchParams;
    const code = url_params?.get("code");
    const error = url_params?.get("state");

    if (code != null && code.length || error != null && error.length) {
      setShowModals(showModals.map((val, i) => (i === 1 ? true : false)));
    }
  }, []);

	return (
    <Suspense>
      {menuList[1].map((Menu, i) => {
        return (<>
          <CCard className="mb-4">
            <CCardBody onClick={() => setShowModals(showModals.map((val, idx) => (idx === i ? true : val)))}>
              {menuList[0][i]}
            </CCardBody>
          </CCard>
          <CModal visible={showModals[i]} size="lg" backdrop={"static"} onClose={() => setShowModals(showModals.map((val, idx) => (idx === i ? false : val)))}>  
            {<Menu/>}
          </CModal>
        </>);
      })}
    </Suspense>
  );
}

export default Profile;