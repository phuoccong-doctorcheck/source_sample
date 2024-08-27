import { useState } from 'react'
import "./index.scss"
import mapModifiers from '../../utils/functions'
import logoActive from "../../assets/images/short_logo.svg"
import Input from '../common/Input'
import Icon from '../common/Icon'
import Typography from '../common/Typography'
import UserDropdown from '../common/UserDropdown'
import style from './../../../node_modules/dom-helpers/esm/css';
const OptionUser = [
  { id: 1, label: 'Trang cá nhân', value: '/profile', handleClick: () => { } },
  { id: 2, label: 'Kết nối Facebook', value: '/facebook', handleClick: () => {  } },
  { id: 3, label: 'đăng xuât', value: '/logout', handleClick: () => { } },
];
const HeaderNav = () => {
  const currentWidth = 1200
  const isSortHeader = true
  const [name, setName] = useState("Nguyễn Phước Công");
  return (
    <div className={mapModifiers('t-header')}>
    <div className={mapModifiers('t-header_wrapper')} style={{paddingLeft:"7%"}}>
      {/* <div
        className={mapModifiers('t-header_wrapper_logo', 'active')}
        // onClick={handleClickLogo}
      >
        <img src={logoActive} alt="logo" />
      </div> */}
      <div className={mapModifiers('t-header_wrapper_nav', Number(currentWidth) < 600 && 'scale')}>
        {/* <div className="t-header_wrapper_nav_left">
          <Input
            variant="borderRadius"
            type="text"
            id=""
            isSearch
           // value={keySearch}
            placeholder='Nhập tên, địa chỉ, số điện thoại,.. để tìm kiếm khách hàng'
           // onChange={(e) => { setKeySearch(e.target.value); }}
            // handleEnter={async () => {
            //   if (keySearch.trim()) {
            //     await getSearchByKey(keySearch);
            //     setIsLoading(true);
            //   }
            //   else {
            //     toast.error('Không thể tìm kiếm với một giá trị rỗng');
            //   }
            // }}
            iconName='search'
            isLoading={false}
          />
        </div> */}
        <div className={mapModifiers("t-header_wrapper_nav_right", isSortHeader && 'short')} >
        
           <div className="t-header_wrapper_nav_right_insurance"  
           style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}
          //  onClick={() => {
          //             setIsOpenPopup(true);
                  
          // }}
          >

           <div style={{marginBottom:"3px", marginRight:"5px"}}><Icon iconName="calendar" size="28x28" /></div> 
            {Number(currentWidth) > 900 &&
              <Typography content={"Đặt lịch ngay"} />
            }
          </div>
          {/* Button Báo cáo kênh */}
          <div className="t-header_wrapper_nav_right_insurance" 
              style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}
          // onClick={() => {
          //   navigator('/report-channel')
          // }}
          >
               <div style={{marginBottom:"3px", marginRight:"5px"}}><Icon iconName="list_text" size="28x28" /></div> 
         
            {Number(currentWidth) > 900 &&
              <Typography content={"Báo cáo Kênh"} />
            }
          </div>
          {/* Button Gộp KH */}
          <div className="t-header_wrapper_nav_right_insurance" 
              style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}
          // onClick={() => {
          //   setIsMerge(true);
          //   setDataMerge({
          //     ...dataMerge,
          //     isSearch: true,
          //   })
          // }}
          >
               <div style={{marginBottom:"3px", marginRight:"5px"}}><Icon iconName="merge" size="28x28" /></div> 
            {Number(currentWidth) > 900 &&
              <Typography content={"Gộp KH"} />
            }
          </div>
          {/* Button BHYT */}
          <div className="t-header_wrapper_nav_right_insurance" 
              style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}
//          onClick={() => { setIsOpenInsurance(true); }}
          >
               <div style={{marginBottom:"3px", marginRight:"5px", color:"white"}}><Icon iconName="health-insurance" size="28x28" style={{color:"white"}}/></div> 
            
            {Number(currentWidth) > 900 &&
              <Typography content={isSortHeader ? 'BHYT' : "BHYT"} />
            }
          </div>
        
        
         
         
          {/* ===> Responsive chiều ngang càng nhỏ thì các button sẽ biến mất theo thứ tự đã code ở trên */}
        </div>
      </div> 
      <div style={{width:"15%"}}><UserDropdown optionsChild={OptionUser} name={name} iconLogo={logoActive} /></div> 
    </div>
  
    
         
  </div>
  )
}

export default HeaderNav
