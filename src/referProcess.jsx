import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
export default function ReferProcess({show,setshowform}) {
  return (
    <div className="refer_process_main">
      <div className="process_p">
        <p>
          How Do I <span>Refer?</span>
        </p>
      </div>
      <div className="process">
        <div className="one">
          <PersonAddAlt1Icon className="process_icon"></PersonAddAlt1Icon>
          <p>Submit referrals easily via our website's referral section</p>
        </div>
        <div className="two">
          <DescriptionIcon className="process_icon"></DescriptionIcon>
          <p>Earn reward once your referral joins Acceredian program.</p>
        </div>
        <div className="three">
          <AccountBalanceWalletIcon className="process_icon"></AccountBalanceWalletIcon>
          <p>Both parties recieve a bonus 30 days after program enrollment .</p>
        </div>
          </div>
          <button onClick={()=>{setshowform(true)}} className="btn_nav btn_process"> Refer now</button>
    </div>
  )
}
