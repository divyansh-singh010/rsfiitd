import "./App.css";
import React from "react";
import Home from "./pages/home/home";
import Team from "./pages/team/team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events" exact element={<Team />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
        <div className="footer">
          <div className="footer-container">
            <svg
              width="1442"
              height="108"
              viewBox="0 0 1442 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1442" height="108" fill="#E7ECFF" />
            </svg>
          </div>
          <div className="footer-container2">
            <svg
              width="200"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85315 6.91895H7.87854C7.87854 7.63444 7.67346 8.1722 7.26331 8.53223C6.85771 8.8877 6.304 9.06543 5.60217 9.06543C5.11454 9.06543 4.69299 8.95378 4.33752 8.73047C3.98661 8.50716 3.71318 8.19727 3.51721 7.80078C3.32581 7.4043 3.2301 6.94401 3.2301 6.41992V5.62012C3.2301 5.09603 3.32581 4.63574 3.51721 4.23926C3.71318 3.84277 3.98661 3.53288 4.33752 3.30957C4.69299 3.08626 5.11454 2.97461 5.60217 2.97461C6.304 2.97461 6.85999 3.15462 7.27014 3.51465C7.6803 3.87012 7.88538 4.4056 7.88538 5.12109H6.85999C6.85999 4.67448 6.75289 4.35547 6.5387 4.16406C6.32906 3.9681 6.01689 3.87012 5.60217 3.87012C5.30595 3.87012 5.0553 3.94531 4.85022 4.0957C4.6497 4.24154 4.49703 4.44661 4.39221 4.71094C4.29195 4.97526 4.24182 5.27604 4.24182 5.61328V6.41992C4.24182 6.76172 4.29195 7.06478 4.39221 7.3291C4.49703 7.59342 4.6497 7.80078 4.85022 7.95117C5.0553 8.09701 5.30595 8.16992 5.60217 8.16992C6.01689 8.16992 6.32906 8.07422 6.5387 7.88281C6.74833 7.69141 6.85315 7.37012 6.85315 6.91895ZM1.64417 6.0166C1.64417 6.62272 1.74898 7.18783 1.95862 7.71191C2.16825 8.23145 2.45764 8.68717 2.82678 9.0791C3.20048 9.46647 3.63114 9.76953 4.11877 9.98828C4.61096 10.2025 5.13733 10.3096 5.69788 10.3096C6.25387 10.3096 6.77568 10.2025 7.26331 9.98828C7.75094 9.76953 8.17932 9.46647 8.54846 9.0791C8.92216 8.68717 9.21383 8.23145 9.42346 7.71191C9.6331 7.18783 9.73792 6.62272 9.73792 6.0166C9.73792 5.41048 9.6331 4.84766 9.42346 4.32812C9.21383 3.80859 8.92216 3.35514 8.54846 2.96777C8.17932 2.5804 7.75094 2.27962 7.26331 2.06543C6.77568 1.84668 6.25387 1.7373 5.69788 1.7373C5.13733 1.7373 4.61096 1.84668 4.11877 2.06543C3.63114 2.27962 3.20048 2.5804 2.82678 2.96777C2.45764 3.35514 2.16825 3.80859 1.95862 4.32812C1.74898 4.84766 1.64417 5.41048 1.64417 6.0166ZM0.84436 6.0166C0.84436 5.29199 0.969686 4.61979 1.22034 4C1.47099 3.38021 1.81962 2.84017 2.26624 2.37988C2.71285 1.91504 3.22782 1.55501 3.81116 1.2998C4.39905 1.04004 5.02795 0.910156 5.69788 0.910156C6.3678 0.910156 6.99443 1.04004 7.57776 1.2998C8.16565 1.55501 8.68062 1.91504 9.12268 2.37988C9.5693 2.84017 9.91793 3.38021 10.1686 4C10.4192 4.61979 10.5446 5.29199 10.5446 6.0166C10.5446 6.74121 10.4192 7.41341 10.1686 8.0332C9.91793 8.65299 9.5693 9.19759 9.12268 9.66699C8.68062 10.1318 8.16565 10.4941 7.57776 10.7539C6.99443 11.0137 6.3678 11.1436 5.69788 11.1436C5.02795 11.1436 4.39905 11.0137 3.81116 10.7539C3.22782 10.4941 2.71285 10.1318 2.26624 9.66699C1.81962 9.19759 1.47099 8.65299 1.22034 8.0332C0.969686 7.41341 0.84436 6.74121 0.84436 6.0166ZM18.6588 9.6875V11H11.9869V9.87207L15.2272 6.33789C15.5826 5.93685 15.8629 5.59049 16.068 5.29883C16.2731 5.00716 16.4166 4.74512 16.4987 4.5127C16.5852 4.27572 16.6285 4.04557 16.6285 3.82227C16.6285 3.50781 16.5693 3.2321 16.4508 2.99512C16.3369 2.75358 16.1683 2.56445 15.9449 2.42773C15.7216 2.28646 15.4505 2.21582 15.1315 2.21582C14.7623 2.21582 14.4524 2.29557 14.2018 2.45508C13.9511 2.61458 13.762 2.83561 13.6344 3.11816C13.5068 3.39616 13.443 3.71517 13.443 4.0752H11.7955C11.7955 3.49642 11.9277 2.96777 12.192 2.48926C12.4563 2.00618 12.8392 1.62337 13.3405 1.34082C13.8418 1.05371 14.4456 0.910156 15.152 0.910156C15.8173 0.910156 16.3824 1.02181 16.8473 1.24512C17.3121 1.46842 17.6653 1.78516 17.9069 2.19531C18.153 2.60547 18.276 3.09082 18.276 3.65137C18.276 3.96126 18.2259 4.26888 18.1256 4.57422C18.0253 4.87956 17.8818 5.1849 17.6949 5.49023C17.5127 5.79102 17.2962 6.09408 17.0455 6.39941C16.7949 6.7002 16.5192 7.00553 16.2184 7.31543L14.0651 9.6875H18.6588ZM26.4313 5.18945V6.81641C26.4313 7.5957 26.3538 8.26107 26.1989 8.8125C26.0485 9.35938 25.8297 9.80371 25.5426 10.1455C25.2555 10.4873 24.9114 10.738 24.5104 10.8975C24.1139 11.057 23.6696 11.1367 23.1774 11.1367C22.7854 11.1367 22.4209 11.0866 22.0836 10.9863C21.7509 10.8861 21.4502 10.7288 21.1813 10.5146C20.9124 10.3005 20.6823 10.0247 20.4908 9.6875C20.304 9.3457 20.1582 8.93783 20.0533 8.46387C19.9531 7.98991 19.903 7.44076 19.903 6.81641V5.18945C19.903 4.4056 19.9804 3.74479 20.1354 3.20703C20.2903 2.66471 20.5114 2.22493 20.7985 1.8877C21.0856 1.5459 21.4274 1.29753 21.8239 1.14258C22.2249 0.98763 22.6715 0.910156 23.1637 0.910156C23.5602 0.910156 23.9248 0.960286 24.2574 1.06055C24.5947 1.15625 24.8955 1.30892 25.1598 1.51855C25.4287 1.72819 25.6565 2.00163 25.8434 2.33887C26.0348 2.67155 26.1806 3.07487 26.2809 3.54883C26.3811 4.01823 26.4313 4.5651 26.4313 5.18945ZM24.7838 7.04883V4.94336C24.7838 4.54688 24.761 4.19824 24.7155 3.89746C24.6699 3.59212 24.6015 3.33464 24.5104 3.125C24.4238 2.91081 24.3144 2.73763 24.1823 2.60547C24.0501 2.46875 23.8997 2.37077 23.7311 2.31152C23.5625 2.24772 23.3733 2.21582 23.1637 2.21582C22.9085 2.21582 22.6806 2.26595 22.4801 2.36621C22.2796 2.46191 22.111 2.61686 21.9742 2.83105C21.8375 3.04525 21.7327 3.3278 21.6598 3.67871C21.5914 4.02507 21.5573 4.44661 21.5573 4.94336V7.04883C21.5573 7.44987 21.58 7.80306 21.6256 8.1084C21.6712 8.41374 21.7395 8.67578 21.8307 8.89453C21.9218 9.10872 22.0312 9.28646 22.1588 9.42773C22.291 9.56445 22.4414 9.66471 22.61 9.72852C22.7832 9.79232 22.9723 9.82422 23.1774 9.82422C23.4371 9.82422 23.6673 9.77409 23.8678 9.67383C24.0683 9.57357 24.2369 9.41406 24.3737 9.19531C24.5104 8.97201 24.6129 8.68262 24.6813 8.32715C24.7496 7.97168 24.7838 7.54557 24.7838 7.04883ZM34.5729 9.6875V11H27.901V9.87207L31.1412 6.33789C31.4967 5.93685 31.777 5.59049 31.9821 5.29883C32.1871 5.00716 32.3307 4.74512 32.4127 4.5127C32.4993 4.27572 32.5426 4.04557 32.5426 3.82227C32.5426 3.50781 32.4834 3.2321 32.3649 2.99512C32.2509 2.75358 32.0823 2.56445 31.859 2.42773C31.6357 2.28646 31.3645 2.21582 31.0455 2.21582C30.6764 2.21582 30.3665 2.29557 30.1158 2.45508C29.8652 2.61458 29.6761 2.83561 29.5485 3.11816C29.4209 3.39616 29.3571 3.71517 29.3571 4.0752H27.7096C27.7096 3.49642 27.8418 2.96777 28.1061 2.48926C28.3704 2.00618 28.7532 1.62337 29.2545 1.34082C29.7558 1.05371 30.3597 0.910156 31.066 0.910156C31.7314 0.910156 32.2965 1.02181 32.7614 1.24512C33.2262 1.46842 33.5794 1.78516 33.8209 2.19531C34.067 2.60547 34.1901 3.09082 34.1901 3.65137C34.1901 3.96126 34.1399 4.26888 34.0397 4.57422C33.9394 4.87956 33.7959 5.1849 33.609 5.49023C33.4267 5.79102 33.2102 6.09408 32.9596 6.39941C32.7089 6.7002 32.4332 7.00553 32.1324 7.31543L29.9791 9.6875H34.5729ZM37.7926 5.27832H38.777C39.1598 5.27832 39.4765 5.21224 39.7272 5.08008C39.9824 4.94792 40.1715 4.76562 40.2946 4.5332C40.4176 4.30078 40.4791 4.03418 40.4791 3.7334C40.4791 3.41895 40.4222 3.15007 40.3082 2.92676C40.1989 2.69889 40.0302 2.52344 39.8024 2.40039C39.5791 2.27734 39.2942 2.21582 38.9479 2.21582C38.6562 2.21582 38.3919 2.27507 38.1549 2.39355C37.9225 2.50749 37.7379 2.67155 37.6012 2.88574C37.4645 3.09538 37.3961 3.34603 37.3961 3.6377H35.7418C35.7418 3.10905 35.8808 2.63965 36.1588 2.22949C36.4368 1.81934 36.8151 1.49805 37.2936 1.26562C37.7767 1.02865 38.319 0.910156 38.9205 0.910156C39.5631 0.910156 40.1237 1.01725 40.6022 1.23145C41.0852 1.44108 41.4612 1.75553 41.7301 2.1748C41.999 2.59408 42.1334 3.11361 42.1334 3.7334C42.1334 4.01595 42.0673 4.30306 41.9352 4.59473C41.803 4.88639 41.6071 5.15299 41.3473 5.39453C41.0875 5.63151 40.764 5.8252 40.3766 5.97559C39.9892 6.12142 39.5403 6.19434 39.0299 6.19434H37.7926V5.27832ZM37.7926 6.56348V5.66113H39.0299C39.6132 5.66113 40.11 5.72949 40.5201 5.86621C40.9349 6.00293 41.2721 6.19206 41.5319 6.43359C41.7916 6.67057 41.9808 6.94173 42.0992 7.24707C42.2223 7.55241 42.2838 7.87598 42.2838 8.21777C42.2838 8.68262 42.1995 9.09733 42.0309 9.46191C41.8668 9.82194 41.6321 10.1273 41.3268 10.3779C41.0214 10.6286 40.6637 10.8177 40.2535 10.9453C39.8479 11.0729 39.4059 11.1367 38.9274 11.1367C38.499 11.1367 38.0888 11.0775 37.6969 10.959C37.305 10.8405 36.9541 10.665 36.6442 10.4326C36.3343 10.1956 36.0882 9.90169 35.9059 9.55078C35.7281 9.19531 35.6393 8.78516 35.6393 8.32031H37.2867C37.2867 8.61654 37.3551 8.87858 37.4918 9.10645C37.6331 9.32975 37.8291 9.50521 38.0797 9.63281C38.3349 9.76042 38.6266 9.82422 38.9547 9.82422C39.3011 9.82422 39.5996 9.7627 39.8502 9.63965C40.1009 9.5166 40.2923 9.33431 40.4244 9.09277C40.5612 8.85124 40.6295 8.55957 40.6295 8.21777C40.6295 7.8304 40.5543 7.51595 40.4039 7.27441C40.2535 7.03288 40.0393 6.85514 39.7614 6.74121C39.4834 6.62272 39.1552 6.56348 38.777 6.56348H37.7926ZM47.5612 1.04688H51.0817C51.8382 1.04688 52.483 1.16081 53.0162 1.38867C53.5494 1.61654 53.9573 1.95378 54.2399 2.40039C54.527 2.84245 54.6705 3.38932 54.6705 4.04102C54.6705 4.53776 54.5794 4.97526 54.3971 5.35352C54.2148 5.73177 53.9573 6.05078 53.6246 6.31055C53.292 6.56576 52.8955 6.764 52.4352 6.90527L51.9156 7.1582H48.7506L48.7369 5.79785H51.109C51.5192 5.79785 51.861 5.72493 52.1344 5.5791C52.4078 5.43327 52.6129 5.23503 52.7496 4.98438C52.8909 4.72917 52.9615 4.44206 52.9615 4.12305C52.9615 3.77669 52.8932 3.47591 52.7565 3.2207C52.6243 2.96094 52.4192 2.7627 52.1412 2.62598C51.8632 2.4847 51.5101 2.41406 51.0817 2.41406H49.277V11H47.5612V1.04688ZM53.2418 11L50.9039 6.5293L52.7018 6.52246L55.0739 10.9111V11H53.2418ZM59.4762 11.1367C58.9293 11.1367 58.4349 11.0479 57.9928 10.8701C57.5553 10.6878 57.1816 10.4349 56.8717 10.1113C56.5664 9.78776 56.3317 9.40723 56.1676 8.96973C56.0035 8.53223 55.9215 8.06055 55.9215 7.55469V7.28125C55.9215 6.70247 56.0058 6.17839 56.1744 5.70898C56.3431 5.23958 56.5778 4.83854 56.8785 4.50586C57.1793 4.16862 57.5348 3.91113 57.9449 3.7334C58.3551 3.55566 58.7994 3.4668 59.278 3.4668C59.8066 3.4668 60.2692 3.55566 60.6656 3.7334C61.0621 3.91113 61.3903 4.16178 61.65 4.48535C61.9143 4.80436 62.1103 5.1849 62.2379 5.62695C62.3701 6.06901 62.4362 6.55664 62.4362 7.08984V7.79395H56.7213V6.61133H60.8092V6.48145C60.8001 6.18522 60.7408 5.90723 60.6315 5.64746C60.5267 5.3877 60.3649 5.17806 60.1461 5.01855C59.9274 4.85905 59.6357 4.7793 59.2711 4.7793C58.9977 4.7793 58.7539 4.83854 58.5397 4.95703C58.33 5.07096 58.1546 5.2373 58.0133 5.45605C57.872 5.6748 57.7627 5.93913 57.6852 6.24902C57.6123 6.55436 57.5758 6.89844 57.5758 7.28125V7.55469C57.5758 7.87826 57.6191 8.17904 57.7057 8.45703C57.7968 8.73047 57.929 8.96973 58.1022 9.1748C58.2753 9.37988 58.485 9.54167 58.7311 9.66016C58.9772 9.77409 59.2574 9.83105 59.5719 9.83105C59.9684 9.83105 60.3216 9.7513 60.6315 9.5918C60.9414 9.43229 61.2102 9.20671 61.4381 8.91504L62.3063 9.75586C62.1468 9.98828 61.9394 10.2116 61.6842 10.4258C61.429 10.6354 61.1168 10.8063 60.7477 10.9385C60.3831 11.0706 59.9593 11.1367 59.4762 11.1367ZM67.8707 8.99707C67.8707 8.83301 67.8297 8.6849 67.7477 8.55273C67.6656 8.41602 67.5084 8.29297 67.276 8.18359C67.0481 8.07422 66.7109 7.97396 66.2643 7.88281C65.8724 7.79622 65.5123 7.69368 65.1842 7.5752C64.8606 7.45215 64.5826 7.30404 64.3502 7.13086C64.1178 6.95768 63.9378 6.7526 63.8102 6.51562C63.6826 6.27865 63.6188 6.00521 63.6188 5.69531C63.6188 5.39453 63.6849 5.1097 63.817 4.84082C63.9492 4.57194 64.1383 4.33496 64.3844 4.12988C64.6305 3.9248 64.929 3.76302 65.2799 3.64453C65.6354 3.52604 66.0319 3.4668 66.4694 3.4668C67.0892 3.4668 67.6201 3.57161 68.0621 3.78125C68.5087 3.98633 68.8505 4.2666 69.0875 4.62207C69.3245 4.97298 69.443 5.36947 69.443 5.81152H67.7955C67.7955 5.61556 67.7454 5.43327 67.6451 5.26465C67.5494 5.09147 67.4036 4.95247 67.2076 4.84766C67.0117 4.73828 66.7656 4.68359 66.4694 4.68359C66.1868 4.68359 65.9521 4.72917 65.7653 4.82031C65.583 4.9069 65.4462 5.02083 65.3551 5.16211C65.2685 5.30339 65.2252 5.45833 65.2252 5.62695C65.2252 5.75 65.248 5.86165 65.2936 5.96191C65.3437 6.05762 65.4257 6.14648 65.5397 6.22852C65.6536 6.30599 65.8086 6.37891 66.0045 6.44727C66.205 6.51562 66.4557 6.58171 66.7565 6.64551C67.3216 6.764 67.8069 6.91667 68.2125 7.10352C68.6227 7.28581 68.9371 7.52279 69.1559 7.81445C69.3746 8.10156 69.484 8.46615 69.484 8.9082C69.484 9.23633 69.4134 9.53711 69.2721 9.81055C69.1354 10.0794 68.9349 10.3141 68.6705 10.5146C68.4062 10.7106 68.0895 10.8633 67.7203 10.9727C67.3558 11.082 66.9456 11.1367 66.4899 11.1367C65.8199 11.1367 65.2526 11.0182 64.7877 10.7812C64.3229 10.5397 63.9697 10.2321 63.7281 9.8584C63.4912 9.48014 63.3727 9.08822 63.3727 8.68262H64.9655C64.9837 8.98796 65.068 9.23177 65.2184 9.41406C65.3733 9.5918 65.5647 9.72168 65.7926 9.80371C66.025 9.88118 66.2643 9.91992 66.5104 9.91992C66.8066 9.91992 67.055 9.88118 67.2555 9.80371C67.456 9.72168 67.6087 9.6123 67.7135 9.47559C67.8183 9.33431 67.8707 9.1748 67.8707 8.99707ZM74.1871 11.1367C73.6403 11.1367 73.1458 11.0479 72.7037 10.8701C72.2662 10.6878 71.8925 10.4349 71.5826 10.1113C71.2773 9.78776 71.0426 9.40723 70.8785 8.96973C70.7145 8.53223 70.6324 8.06055 70.6324 7.55469V7.28125C70.6324 6.70247 70.7168 6.17839 70.8854 5.70898C71.054 5.23958 71.2887 4.83854 71.5895 4.50586C71.8903 4.16862 72.2457 3.91113 72.6559 3.7334C73.066 3.55566 73.5104 3.4668 73.9889 3.4668C74.5175 3.4668 74.9801 3.55566 75.3766 3.7334C75.7731 3.91113 76.1012 4.16178 76.361 4.48535C76.6253 4.80436 76.8212 5.1849 76.9489 5.62695C77.081 6.06901 77.1471 6.55664 77.1471 7.08984V7.79395H71.4323V6.61133H75.5201V6.48145C75.511 6.18522 75.4518 5.90723 75.3424 5.64746C75.2376 5.3877 75.0758 5.17806 74.8571 5.01855C74.6383 4.85905 74.3466 4.7793 73.9821 4.7793C73.7086 4.7793 73.4648 4.83854 73.2506 4.95703C73.041 5.07096 72.8655 5.2373 72.7242 5.45605C72.583 5.6748 72.4736 5.93913 72.3961 6.24902C72.3232 6.55436 72.2867 6.89844 72.2867 7.28125V7.55469C72.2867 7.87826 72.33 8.17904 72.4166 8.45703C72.5078 8.73047 72.6399 8.96973 72.8131 9.1748C72.9863 9.37988 73.1959 9.54167 73.442 9.66016C73.6881 9.77409 73.9684 9.83105 74.2828 9.83105C74.6793 9.83105 75.0325 9.7513 75.3424 9.5918C75.6523 9.43229 75.9212 9.20671 76.149 8.91504L77.0172 9.75586C76.8577 9.98828 76.6503 10.2116 76.3951 10.4258C76.1399 10.6354 75.8278 10.8063 75.4586 10.9385C75.094 11.0706 74.6702 11.1367 74.1871 11.1367ZM82.6022 9.5166V5.98926C82.6022 5.72493 82.5543 5.49707 82.4586 5.30566C82.3629 5.11426 82.2171 4.96615 82.0211 4.86133C81.8297 4.75651 81.5882 4.7041 81.2965 4.7041C81.0276 4.7041 80.7952 4.74967 80.5992 4.84082C80.4033 4.93197 80.2506 5.05501 80.1412 5.20996C80.0319 5.36491 79.9772 5.54036 79.9772 5.73633H78.3365C78.3365 5.44466 78.4072 5.16211 78.5485 4.88867C78.6897 4.61523 78.8948 4.37142 79.1637 4.15723C79.4326 3.94303 79.7539 3.77441 80.1276 3.65137C80.5013 3.52832 80.9205 3.4668 81.3854 3.4668C81.9414 3.4668 82.4336 3.56022 82.8619 3.74707C83.2949 3.93392 83.6344 4.21647 83.8805 4.59473C84.1311 4.96842 84.2565 5.43783 84.2565 6.00293V9.29102C84.2565 9.62826 84.2793 9.93132 84.3248 10.2002C84.375 10.4645 84.4456 10.6947 84.5367 10.8906V11H82.8483C82.7708 10.8223 82.7093 10.5967 82.6637 10.3232C82.6227 10.0452 82.6022 9.77637 82.6022 9.5166ZM82.8414 6.50195L82.8551 7.52051H81.6725C81.3671 7.52051 81.0983 7.55013 80.8658 7.60938C80.6334 7.66406 80.4397 7.74609 80.2848 7.85547C80.1298 7.96484 80.0136 8.09701 79.9362 8.25195C79.8587 8.4069 79.8199 8.58236 79.8199 8.77832C79.8199 8.97428 79.8655 9.1543 79.9567 9.31836C80.0478 9.47786 80.18 9.60319 80.3531 9.69434C80.5309 9.78548 80.7451 9.83105 80.9957 9.83105C81.333 9.83105 81.6269 9.7627 81.8776 9.62598C82.1328 9.4847 82.3333 9.3138 82.4791 9.11328C82.625 8.9082 82.7024 8.71452 82.7115 8.53223L83.2448 9.26367C83.1901 9.45052 83.0966 9.65104 82.9645 9.86523C82.8323 10.0794 82.6591 10.2845 82.4449 10.4805C82.2353 10.6719 81.9824 10.8291 81.6862 10.9521C81.3945 11.0752 81.0573 11.1367 80.6744 11.1367C80.1914 11.1367 79.7607 11.041 79.3824 10.8496C79.0042 10.6536 78.708 10.3916 78.4938 10.0635C78.2796 9.73079 78.1725 9.35482 78.1725 8.93555C78.1725 8.54362 78.2454 8.19727 78.3912 7.89648C78.5416 7.59115 78.7604 7.33594 79.0475 7.13086C79.3392 6.92578 79.6946 6.77083 80.1139 6.66602C80.5332 6.55664 81.0117 6.50195 81.5494 6.50195H82.8414ZM87.6334 5.01172V11H85.986V3.60352H87.5582L87.6334 5.01172ZM89.8961 3.55566L89.8824 5.08691C89.7822 5.06868 89.6728 5.05501 89.5543 5.0459C89.4404 5.03678 89.3265 5.03223 89.2125 5.03223C88.93 5.03223 88.6816 5.07324 88.4674 5.15527C88.2532 5.23275 88.0732 5.34668 87.9274 5.49707C87.7861 5.6429 87.6767 5.82064 87.5992 6.03027C87.5218 6.23991 87.4762 6.47461 87.4625 6.73438L87.0865 6.76172C87.0865 6.29688 87.1321 5.86621 87.2233 5.46973C87.3144 5.07324 87.4511 4.72461 87.6334 4.42383C87.8203 4.12305 88.0527 3.88835 88.3307 3.71973C88.6132 3.55111 88.9391 3.4668 89.3082 3.4668C89.4085 3.4668 89.5156 3.47591 89.6295 3.49414C89.748 3.51237 89.8369 3.53288 89.8961 3.55566ZM93.8131 9.82422C94.082 9.82422 94.3235 9.77181 94.5377 9.66699C94.7565 9.55762 94.9319 9.40723 95.0641 9.21582C95.2008 9.02441 95.276 8.80339 95.2897 8.55273H96.8414C96.8323 9.03125 96.691 9.46647 96.4176 9.8584C96.1442 10.2503 95.7819 10.5625 95.3307 10.7949C94.8795 11.0228 94.3805 11.1367 93.8336 11.1367C93.2685 11.1367 92.7763 11.041 92.3571 10.8496C91.9378 10.6536 91.5892 10.3848 91.3112 10.043C91.0332 9.70117 90.8235 9.30697 90.6823 8.86035C90.5455 8.41374 90.4772 7.93522 90.4772 7.4248V7.18555C90.4772 6.67513 90.5455 6.19661 90.6823 5.75C90.8235 5.29883 91.0332 4.90234 91.3112 4.56055C91.5892 4.21875 91.9378 3.95215 92.3571 3.76074C92.7763 3.56478 93.2662 3.4668 93.8268 3.4668C94.4192 3.4668 94.9388 3.58529 95.3854 3.82227C95.832 4.05469 96.1829 4.38053 96.4381 4.7998C96.6979 5.21452 96.8323 5.69759 96.8414 6.24902H95.2897C95.276 5.97559 95.2076 5.72949 95.0846 5.51074C94.9661 5.28743 94.7975 5.1097 94.5787 4.97754C94.3645 4.84538 94.1071 4.7793 93.8063 4.7793C93.4736 4.7793 93.1979 4.84766 92.9791 4.98438C92.7604 5.11654 92.5895 5.29883 92.4664 5.53125C92.3434 5.75911 92.2545 6.0166 92.1998 6.30371C92.1497 6.58626 92.1246 6.88021 92.1246 7.18555V7.4248C92.1246 7.73014 92.1497 8.02637 92.1998 8.31348C92.25 8.60059 92.3365 8.85807 92.4596 9.08594C92.5872 9.30924 92.7604 9.48926 92.9791 9.62598C93.1979 9.75814 93.4759 9.82422 93.8131 9.82422ZM99.733 0.5V11H98.0924V0.5H99.733ZM99.4459 7.02832L98.9127 7.02148C98.9173 6.51107 98.9879 6.03939 99.1246 5.60645C99.2659 5.1735 99.4619 4.79753 99.7125 4.47852C99.9677 4.15495 100.273 3.90658 100.629 3.7334C100.984 3.55566 101.378 3.4668 101.811 3.4668C102.176 3.4668 102.504 3.51693 102.796 3.61719C103.092 3.71745 103.347 3.87923 103.561 4.10254C103.775 4.32129 103.937 4.6084 104.047 4.96387C104.16 5.31478 104.217 5.74316 104.217 6.24902V11H102.563V6.23535C102.563 5.87988 102.511 5.59733 102.406 5.3877C102.306 5.17806 102.158 5.02767 101.962 4.93652C101.766 4.84082 101.526 4.79297 101.244 4.79297C100.948 4.79297 100.686 4.85221 100.458 4.9707C100.234 5.08919 100.047 5.25098 99.8971 5.45605C99.7467 5.66113 99.6328 5.89811 99.5553 6.16699C99.4824 6.43587 99.4459 6.72298 99.4459 7.02832ZM114.772 8.43652C114.772 8.23145 114.74 8.04915 114.676 7.88965C114.617 7.73014 114.51 7.58431 114.355 7.45215C114.2 7.31999 113.981 7.19238 113.699 7.06934C113.421 6.94173 113.065 6.81185 112.632 6.67969C112.158 6.53385 111.721 6.37207 111.32 6.19434C110.923 6.01204 110.577 5.80241 110.281 5.56543C109.985 5.32389 109.755 5.04818 109.59 4.73828C109.426 4.42383 109.344 4.06152 109.344 3.65137C109.344 3.24577 109.429 2.87663 109.597 2.54395C109.77 2.21126 110.014 1.92415 110.329 1.68262C110.648 1.43652 111.024 1.2474 111.457 1.11523C111.89 0.978516 112.368 0.910156 112.892 0.910156C113.63 0.910156 114.266 1.04688 114.799 1.32031C115.337 1.59375 115.75 1.96061 116.037 2.4209C116.328 2.88118 116.474 3.38932 116.474 3.94531H114.772C114.772 3.61719 114.701 3.3278 114.56 3.07715C114.423 2.82194 114.214 2.62142 113.931 2.47559C113.653 2.32975 113.3 2.25684 112.872 2.25684C112.466 2.25684 112.129 2.31836 111.86 2.44141C111.591 2.56445 111.391 2.73079 111.258 2.94043C111.126 3.15007 111.06 3.38704 111.06 3.65137C111.06 3.83822 111.103 4.00911 111.19 4.16406C111.277 4.31445 111.409 4.45573 111.587 4.58789C111.764 4.71549 111.988 4.83626 112.256 4.9502C112.525 5.06413 112.842 5.1735 113.207 5.27832C113.758 5.44238 114.239 5.62467 114.649 5.8252C115.059 6.02116 115.401 6.24447 115.674 6.49512C115.948 6.74577 116.153 7.0306 116.29 7.34961C116.426 7.66406 116.495 8.02181 116.495 8.42285C116.495 8.84212 116.41 9.22038 116.242 9.55762C116.073 9.8903 115.832 10.1751 115.517 10.4121C115.207 10.6445 114.834 10.8245 114.396 10.9521C113.963 11.0752 113.48 11.1367 112.947 11.1367C112.468 11.1367 111.997 11.0729 111.532 10.9453C111.072 10.8177 110.652 10.624 110.274 10.3643C109.896 10.0999 109.595 9.77181 109.372 9.37988C109.148 8.9834 109.037 8.52083 109.037 7.99219H110.753C110.753 8.31576 110.807 8.59147 110.917 8.81934C111.031 9.0472 111.188 9.23405 111.388 9.37988C111.589 9.52116 111.821 9.62598 112.086 9.69434C112.354 9.7627 112.642 9.79688 112.947 9.79688C113.348 9.79688 113.683 9.73991 113.952 9.62598C114.225 9.51204 114.43 9.35254 114.567 9.14746C114.704 8.94238 114.772 8.7054 114.772 8.43652ZM120.87 9.82422C121.139 9.82422 121.38 9.77181 121.594 9.66699C121.813 9.55762 121.989 9.40723 122.121 9.21582C122.257 9.02441 122.333 8.80339 122.346 8.55273H123.898C123.889 9.03125 123.748 9.46647 123.474 9.8584C123.201 10.2503 122.839 10.5625 122.387 10.7949C121.936 11.0228 121.437 11.1367 120.89 11.1367C120.325 11.1367 119.833 11.041 119.414 10.8496C118.994 10.6536 118.646 10.3848 118.368 10.043C118.09 9.70117 117.88 9.30697 117.739 8.86035C117.602 8.41374 117.534 7.93522 117.534 7.4248V7.18555C117.534 6.67513 117.602 6.19661 117.739 5.75C117.88 5.29883 118.09 4.90234 118.368 4.56055C118.646 4.21875 118.994 3.95215 119.414 3.76074C119.833 3.56478 120.323 3.4668 120.883 3.4668C121.476 3.4668 121.995 3.58529 122.442 3.82227C122.889 4.05469 123.24 4.38053 123.495 4.7998C123.755 5.21452 123.889 5.69759 123.898 6.24902H122.346C122.333 5.97559 122.264 5.72949 122.141 5.51074C122.023 5.28743 121.854 5.1097 121.635 4.97754C121.421 4.84538 121.164 4.7793 120.863 4.7793C120.53 4.7793 120.255 4.84766 120.036 4.98438C119.817 5.11654 119.646 5.29883 119.523 5.53125C119.4 5.75911 119.311 6.0166 119.256 6.30371C119.206 6.58626 119.181 6.88021 119.181 7.18555V7.4248C119.181 7.73014 119.206 8.02637 119.256 8.31348C119.307 8.60059 119.393 8.85807 119.516 9.08594C119.644 9.30924 119.817 9.48926 120.036 9.62598C120.255 9.75814 120.533 9.82422 120.87 9.82422ZM126.79 0.5V11H125.149V0.5H126.79ZM126.503 7.02832L125.969 7.02148C125.974 6.51107 126.045 6.03939 126.181 5.60645C126.323 5.1735 126.519 4.79753 126.769 4.47852C127.024 4.15495 127.33 3.90658 127.685 3.7334C128.041 3.55566 128.435 3.4668 128.868 3.4668C129.232 3.4668 129.561 3.51693 129.852 3.61719C130.148 3.71745 130.404 3.87923 130.618 4.10254C130.832 4.32129 130.994 4.6084 131.103 4.96387C131.217 5.31478 131.274 5.74316 131.274 6.24902V11H129.62V6.23535C129.62 5.87988 129.567 5.59733 129.463 5.3877C129.362 5.17806 129.214 5.02767 129.018 4.93652C128.822 4.84082 128.583 4.79297 128.3 4.79297C128.004 4.79297 127.742 4.85221 127.514 4.9707C127.291 5.08919 127.104 5.25098 126.954 5.45605C126.803 5.66113 126.689 5.89811 126.612 6.16699C126.539 6.43587 126.503 6.72298 126.503 7.02832ZM132.628 7.38379V7.22656C132.628 6.69336 132.705 6.19889 132.86 5.74316C133.015 5.28288 133.238 4.88411 133.53 4.54688C133.826 4.20508 134.186 3.94076 134.61 3.75391C135.038 3.5625 135.521 3.4668 136.059 3.4668C136.602 3.4668 137.085 3.5625 137.508 3.75391C137.937 3.94076 138.299 4.20508 138.595 4.54688C138.892 4.88411 139.117 5.28288 139.272 5.74316C139.427 6.19889 139.505 6.69336 139.505 7.22656V7.38379C139.505 7.91699 139.427 8.41146 139.272 8.86719C139.117 9.32292 138.892 9.72168 138.595 10.0635C138.299 10.4007 137.939 10.665 137.515 10.8564C137.091 11.0433 136.611 11.1367 136.073 11.1367C135.531 11.1367 135.045 11.0433 134.617 10.8564C134.193 10.665 133.833 10.4007 133.537 10.0635C133.241 9.72168 133.015 9.32292 132.86 8.86719C132.705 8.41146 132.628 7.91699 132.628 7.38379ZM134.275 7.22656V7.38379C134.275 7.71647 134.309 8.03092 134.378 8.32715C134.446 8.62337 134.553 8.88314 134.699 9.10645C134.845 9.32975 135.032 9.50521 135.259 9.63281C135.487 9.76042 135.758 9.82422 136.073 9.82422C136.378 9.82422 136.643 9.76042 136.866 9.63281C137.094 9.50521 137.281 9.32975 137.426 9.10645C137.572 8.88314 137.679 8.62337 137.748 8.32715C137.821 8.03092 137.857 7.71647 137.857 7.38379V7.22656C137.857 6.89844 137.821 6.58854 137.748 6.29688C137.679 6.00065 137.57 5.73861 137.42 5.51074C137.274 5.28288 137.087 5.10514 136.859 4.97754C136.636 4.84538 136.369 4.7793 136.059 4.7793C135.749 4.7793 135.48 4.84538 135.253 4.97754C135.029 5.10514 134.845 5.28288 134.699 5.51074C134.553 5.73861 134.446 6.00065 134.378 6.29688C134.309 6.58854 134.275 6.89844 134.275 7.22656ZM142.649 0.5V11H140.995V0.5H142.649ZM148.624 9.5166V5.98926C148.624 5.72493 148.576 5.49707 148.48 5.30566C148.384 5.11426 148.239 4.96615 148.043 4.86133C147.851 4.75651 147.61 4.7041 147.318 4.7041C147.049 4.7041 146.817 4.74967 146.621 4.84082C146.425 4.93197 146.272 5.05501 146.163 5.20996C146.053 5.36491 145.999 5.54036 145.999 5.73633H144.358C144.358 5.44466 144.429 5.16211 144.57 4.88867C144.711 4.61523 144.916 4.37142 145.185 4.15723C145.454 3.94303 145.775 3.77441 146.149 3.65137C146.523 3.52832 146.942 3.4668 147.407 3.4668C147.963 3.4668 148.455 3.56022 148.883 3.74707C149.316 3.93392 149.656 4.21647 149.902 4.59473C150.153 4.96842 150.278 5.43783 150.278 6.00293V9.29102C150.278 9.62826 150.301 9.93132 150.346 10.2002C150.396 10.4645 150.467 10.6947 150.558 10.8906V11H148.87C148.792 10.8223 148.731 10.5967 148.685 10.3232C148.644 10.0452 148.624 9.77637 148.624 9.5166ZM148.863 6.50195L148.877 7.52051H147.694C147.389 7.52051 147.12 7.55013 146.887 7.60938C146.655 7.66406 146.461 7.74609 146.306 7.85547C146.151 7.96484 146.035 8.09701 145.958 8.25195C145.88 8.4069 145.841 8.58236 145.841 8.77832C145.841 8.97428 145.887 9.1543 145.978 9.31836C146.069 9.47786 146.201 9.60319 146.375 9.69434C146.552 9.78548 146.767 9.83105 147.017 9.83105C147.354 9.83105 147.648 9.7627 147.899 9.62598C148.154 9.4847 148.355 9.3138 148.501 9.11328C148.646 8.9082 148.724 8.71452 148.733 8.53223L149.266 9.26367C149.212 9.45052 149.118 9.65104 148.986 9.86523C148.854 10.0794 148.681 10.2845 148.466 10.4805C148.257 10.6719 148.004 10.8291 147.708 10.9521C147.416 11.0752 147.079 11.1367 146.696 11.1367C146.213 11.1367 145.782 11.041 145.404 10.8496C145.026 10.6536 144.729 10.3916 144.515 10.0635C144.301 9.73079 144.194 9.35482 144.194 8.93555C144.194 8.54362 144.267 8.19727 144.413 7.89648C144.563 7.59115 144.782 7.33594 145.069 7.13086C145.361 6.92578 145.716 6.77083 146.135 6.66602C146.555 6.55664 147.033 6.50195 147.571 6.50195H148.863ZM153.655 5.01172V11H152.007V3.60352H153.58L153.655 5.01172ZM155.918 3.55566L155.904 5.08691C155.804 5.06868 155.694 5.05501 155.576 5.0459C155.462 5.03678 155.348 5.03223 155.234 5.03223C154.951 5.03223 154.703 5.07324 154.489 5.15527C154.275 5.23275 154.095 5.34668 153.949 5.49707C153.808 5.6429 153.698 5.82064 153.621 6.03027C153.543 6.23991 153.498 6.47461 153.484 6.73438L153.108 6.76172C153.108 6.29688 153.154 5.86621 153.245 5.46973C153.336 5.07324 153.473 4.72461 153.655 4.42383C153.842 4.12305 154.074 3.88835 154.352 3.71973C154.635 3.55111 154.961 3.4668 155.33 3.4668C155.43 3.4668 155.537 3.47591 155.651 3.49414C155.769 3.51237 155.858 3.53288 155.918 3.55566ZM162.316 1.04688V11H160.6V1.04688H162.316ZM166.377 5.40137V6.76172H161.879V5.40137H166.377ZM166.944 1.04688V2.41406H161.879V1.04688H166.944ZM167.682 7.38379V7.22656C167.682 6.69336 167.76 6.19889 167.915 5.74316C168.07 5.28288 168.293 4.88411 168.585 4.54688C168.881 4.20508 169.241 3.94076 169.665 3.75391C170.093 3.5625 170.576 3.4668 171.114 3.4668C171.656 3.4668 172.139 3.5625 172.563 3.75391C172.991 3.94076 173.354 4.20508 173.65 4.54688C173.946 4.88411 174.172 5.28288 174.327 5.74316C174.482 6.19889 174.559 6.69336 174.559 7.22656V7.38379C174.559 7.91699 174.482 8.41146 174.327 8.86719C174.172 9.32292 173.946 9.72168 173.65 10.0635C173.354 10.4007 172.994 10.665 172.57 10.8564C172.146 11.0433 171.665 11.1367 171.128 11.1367C170.585 11.1367 170.1 11.0433 169.672 10.8564C169.248 10.665 168.888 10.4007 168.591 10.0635C168.295 9.72168 168.07 9.32292 167.915 8.86719C167.76 8.41146 167.682 7.91699 167.682 7.38379ZM169.33 7.22656V7.38379C169.33 7.71647 169.364 8.03092 169.432 8.32715C169.501 8.62337 169.608 8.88314 169.754 9.10645C169.899 9.32975 170.086 9.50521 170.314 9.63281C170.542 9.76042 170.813 9.82422 171.128 9.82422C171.433 9.82422 171.697 9.76042 171.921 9.63281C172.148 9.50521 172.335 9.32975 172.481 9.10645C172.627 8.88314 172.734 8.62337 172.802 8.32715C172.875 8.03092 172.912 7.71647 172.912 7.38379V7.22656C172.912 6.89844 172.875 6.58854 172.802 6.29688C172.734 6.00065 172.625 5.73861 172.474 5.51074C172.328 5.28288 172.142 5.10514 171.914 4.97754C171.69 4.84538 171.424 4.7793 171.114 4.7793C170.804 4.7793 170.535 4.84538 170.307 4.97754C170.084 5.10514 169.899 5.28288 169.754 5.51074C169.608 5.73861 169.501 6.00065 169.432 6.29688C169.364 6.58854 169.33 6.89844 169.33 7.22656ZM177.594 5.01172V11H175.947V3.60352H177.519L177.594 5.01172ZM179.857 3.55566L179.843 5.08691C179.743 5.06868 179.634 5.05501 179.515 5.0459C179.401 5.03678 179.287 5.03223 179.173 5.03223C178.891 5.03223 178.643 5.07324 178.428 5.15527C178.214 5.23275 178.034 5.34668 177.888 5.49707C177.747 5.6429 177.638 5.82064 177.56 6.03027C177.483 6.23991 177.437 6.47461 177.423 6.73438L177.047 6.76172C177.047 6.29688 177.093 5.86621 177.184 5.46973C177.275 5.07324 177.412 4.72461 177.594 4.42383C177.781 4.12305 178.014 3.88835 178.292 3.71973C178.574 3.55111 178.9 3.4668 179.269 3.4668C179.369 3.4668 179.477 3.47591 179.59 3.49414C179.709 3.51237 179.798 3.53288 179.857 3.55566ZM185.339 9.25684V3.60352H186.994V11H185.435L185.339 9.25684ZM185.572 7.71875L186.126 7.70508C186.126 8.20182 186.071 8.65983 185.962 9.0791C185.852 9.49382 185.684 9.85612 185.456 10.166C185.228 10.4714 184.936 10.7106 184.581 10.8838C184.225 11.0524 183.799 11.1367 183.302 11.1367C182.942 11.1367 182.612 11.0843 182.311 10.9795C182.01 10.8747 181.751 10.7129 181.532 10.4941C181.318 10.2754 181.151 9.99056 181.033 9.63965C180.914 9.28874 180.855 8.86947 180.855 8.38184V3.60352H182.503V8.39551C182.503 8.66439 182.534 8.88997 182.598 9.07227C182.662 9.25 182.749 9.39355 182.858 9.50293C182.967 9.6123 183.095 9.68978 183.241 9.73535C183.387 9.78092 183.542 9.80371 183.706 9.80371C184.175 9.80371 184.544 9.71257 184.813 9.53027C185.087 9.34342 185.28 9.09277 185.394 8.77832C185.513 8.46387 185.572 8.11068 185.572 7.71875ZM190.33 5.10742V11H188.682V3.60352H190.234L190.33 5.10742ZM190.063 7.02832L189.503 7.02148C189.503 6.51107 189.566 6.03939 189.694 5.60645C189.822 5.1735 190.008 4.79753 190.255 4.47852C190.501 4.15495 190.806 3.90658 191.171 3.7334C191.54 3.55566 191.966 3.4668 192.449 3.4668C192.786 3.4668 193.094 3.51693 193.372 3.61719C193.654 3.71289 193.898 3.86556 194.103 4.0752C194.313 4.28483 194.472 4.55371 194.582 4.88184C194.696 5.20996 194.753 5.60645 194.753 6.07129V11H193.105V6.21484C193.105 5.85482 193.05 5.57227 192.941 5.36719C192.836 5.16211 192.684 5.01628 192.483 4.92969C192.287 4.83854 192.052 4.79297 191.779 4.79297C191.469 4.79297 191.205 4.85221 190.986 4.9707C190.772 5.08919 190.596 5.25098 190.46 5.45605C190.323 5.66113 190.223 5.89811 190.159 6.16699C190.095 6.43587 190.063 6.72298 190.063 7.02832ZM194.65 6.59082L193.878 6.76172C193.878 6.3151 193.939 5.89355 194.062 5.49707C194.19 5.09603 194.374 4.74512 194.616 4.44434C194.862 4.139 195.165 3.89974 195.525 3.72656C195.885 3.55339 196.297 3.4668 196.762 3.4668C197.141 3.4668 197.478 3.51921 197.774 3.62402C198.075 3.72428 198.33 3.88379 198.54 4.10254C198.749 4.32129 198.909 4.60612 199.018 4.95703C199.128 5.30339 199.182 5.72266 199.182 6.21484V11H197.528V6.20801C197.528 5.83431 197.473 5.54492 197.364 5.33984C197.259 5.13477 197.109 4.99349 196.913 4.91602C196.717 4.83398 196.482 4.79297 196.209 4.79297C195.953 4.79297 195.728 4.84082 195.532 4.93652C195.34 5.02767 195.179 5.15755 195.047 5.32617C194.914 5.49023 194.814 5.67936 194.746 5.89355C194.682 6.10775 194.65 6.34017 194.65 6.59082Z"
                fill="#939EA4"
              />
            </svg>
          </div>
          <div className="social-media">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.75548 0H11.7638C14.5286 0 16.7708 2.239 16.7708 5V11C16.7708 13.761 14.5286 16 11.7638 16H5.75548C2.99064 16 0.748535 13.761 0.748535 11V5C0.748535 2.239 2.99064 0 5.75548 0ZM11.7638 14.5C13.6965 14.5 15.2687 12.93 15.2687 11V5C15.2687 3.07 13.6965 1.5 11.7638 1.5H5.75548C3.8228 1.5 2.25062 3.07 2.25062 5V11C2.25062 12.93 3.8228 14.5 5.75548 14.5H11.7638ZM4.75409 8C4.75409 5.791 6.54758 4 8.75965 4C10.9717 4 12.7652 5.791 12.7652 8C12.7652 10.209 10.9717 12 8.75965 12C6.54758 12 4.75409 10.209 4.75409 8ZM6.25617 8C6.25617 9.378 7.37973 10.5 8.75965 10.5C10.1396 10.5 11.2631 9.378 11.2631 8C11.2631 6.621 10.1396 5.5 8.75965 5.5C7.37973 5.5 6.25617 6.621 6.25617 8ZM13.5987 3.7C13.5987 3.99437 13.3599 4.233 13.0653 4.233C12.7707 4.233 12.5319 3.99437 12.5319 3.7C12.5319 3.40564 12.7707 3.167 13.0653 3.167C13.3599 3.167 13.5987 3.40564 13.5987 3.7Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1595 2.75863C15.1198 2.81263 15.5915 2.95463 16.0261 3.72663C16.4787 4.49763 16.707 5.82563 16.707 8.16463V8.16763V8.17263C16.707 10.5006 16.4787 11.8386 16.0271 12.6016C15.5925 13.3736 15.1208 13.5136 14.1605 13.5786C13.2002 13.6336 10.7878 13.6666 8.69793 13.6666C6.60402 13.6666 4.19068 13.6336 3.23135 13.5776C2.27302 13.5126 1.80136 13.3726 1.36275 12.6006C0.915134 11.8376 0.684814 10.4996 0.684814 8.17163V8.16963V8.16663V8.16363C0.684814 5.82563 0.915134 4.49763 1.36275 3.72663C1.80136 2.95363 2.27402 2.81263 3.23235 2.75763C4.19068 2.69363 6.60402 2.66663 8.69793 2.66663C10.7878 2.66663 13.2002 2.69363 14.1595 2.75863ZM11.7001 8.16663L6.69315 5.16663V11.1666L11.7001 8.16663Z"
                fill="#B0B8BC"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.06175 1.75C4.06175 2.7165 3.27716 3.5 2.30932 3.5C1.34147 3.5 0.556885 2.7165 0.556885 1.75C0.556885 0.783502 1.34147 0 2.30932 0C3.27716 0 4.06175 0.783502 4.06175 1.75ZM0.556885 5H4.13985V16H0.556885V5ZM13.8994 5.129C13.8867 5.125 13.8742 5.12089 13.8618 5.11678L13.8618 5.11677C13.8368 5.10855 13.8119 5.10033 13.7852 5.093C13.7372 5.082 13.6891 5.073 13.64 5.065C13.4498 5.027 13.2415 5 12.9971 5C10.9082 5 9.5834 6.517 9.1468 7.103V5H5.56383V16H9.1468V10C9.1468 10 11.8546 6.234 12.9971 9V16H16.5791V8.577C16.5791 6.915 15.4385 5.53 13.8994 5.129Z"
                fill="#B0B8BC"
              />
            </svg>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
