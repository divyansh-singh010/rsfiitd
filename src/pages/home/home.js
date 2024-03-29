import React from "react";
import "./home.css";
import homeImg from "../../images/home.png";
import Carousel from "../../components/carousel/carousel";
import firstevent from "../../images/firstevent.png";
import secondevent from "../../images/secondevent.png";
import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    {
      image: firstevent,
      text: "Discover the brilliance of Ph.D. students at IIT Delhi as they masterfully demonstrated their research prowess at the 'Research Blitz' event. Without the aid of slides, these students showcased concise and engaging pitches, refining complex ideas for diverse audiences. The event, organized by the Research Scholar Forum and Academic Outreach, celebrated the art of effective verbal communication in research presentation.",
    },
    {
      image: secondevent,
      text: "Join us on a journey of exploration as Dr. Mayra Castro shares profound insights into the world of publishing as a viable career path for Ph.D. graduates. In a captivating talk, Dr. Castro delves into various opportunities and challenges within the publishing industry, offering valuable perspectives on roles, skills, and the evolving landscape. This session empowers Ph.D. graduates to consider the enriching possibilities of contributing to scholarly publications and shaping the future of academic discourse.",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="home-bg">
          <svg
            width="1128"
            height="1112"
            viewBox="0 0 1065 1112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M319.662 37.6942C199.558 138.217 180.945 328.298 99.603 468.527C71.2869 517.322 34.6987 560.992 15.6092 615.123C-28.2171 739.026 32.1004 879.572 112.833 977.981C151.33 1024.93 196.297 1067.94 250.702 1087.72C292.539 1102.94 337.4 1103.57 381.438 1103.97L1152.97 1111.9C1239.11 1112.77 1334.83 1109.62 1396.76 1043.21C1439.45 997.478 1456.79 930.692 1471.5 866.944C1489.58 788.613 1505.97 703.546 1477.84 628.94C1445.7 543.582 1364.44 495.21 1313.96 421.555C1232.03 302.223 1233.92 121.731 1129.59 26.4664C1080.88 -17.9959 1016.61 -35.4321 953.99 -44.1502C835.927 -60.6089 724.095 -29.5408 608.152 -33.8734C509.046 -37.572 401.88 -31.1259 319.662 37.6942Z"
              fill="#E7ECFF"
            />
            <path
              opacity="0.24"
              d="M561.44 933.613C514.927 938.283 466.986 943.419 426.056 966.264C420.578 969.328 415.015 972.942 411.993 978.458C405.927 989.553 412.811 1004.18 423.495 1010.86C434.179 1017.53 447.361 1018.29 459.934 1018.84C683.811 1028.59 908.024 1024.76 1132.09 1020.96C1197.16 1019.86 1263.26 1018.59 1325.62 999.718C1336.83 996.337 1349.15 991.265 1353.37 980.212C1358.89 965.757 1346.29 949.737 1331.6 945.236C1316.91 940.735 1301.23 944.095 1286.03 946.06C1233.26 952.886 1180.03 942.446 1127.49 934.099C1024.64 917.784 917.932 904.512 813.759 902.039C778.244 901.215 747.914 913.515 713.155 918.376C662.968 925.434 611.9 928.541 561.44 933.613Z"
              fill="#505F98"
            />
            <path
              d="M378.478 500.326L494.468 264.408L563.55 298.19L447.56 534.108L378.478 500.326Z"
              fill="white"
            />
            <path
              d="M405.36 493.055L419.493 464.22L466.022 486.903L451.889 515.738L405.36 493.055Z"
              fill="#505F98"
            />
            <path
              d="M405.36 493.055L419.493 464.22L466.022 486.903L451.889 515.738L405.36 493.055Z"
              fill="url(#paint0_linear_1_29)"
            />
            <path
              d="M419.495 464.445L433.628 435.61L480.157 458.293L466.024 487.128L419.495 464.445Z"
              fill="#505F98"
            />
            <path
              d="M419.495 464.445L433.628 435.61L480.157 458.293L466.024 487.128L419.495 464.445Z"
              fill="url(#paint1_linear_1_29)"
            />
            <path
              d="M433.611 435.826L447.744 406.991L494.273 429.674L480.14 458.509L433.611 435.826Z"
              fill="#505F98"
            />
            <path
              d="M433.611 435.826L447.744 406.991L494.273 429.674L480.14 458.509L433.611 435.826Z"
              fill="url(#paint2_linear_1_29)"
            />
            <path
              d="M447.767 407.237L461.901 378.402L508.429 401.085L494.296 429.92L447.767 407.237Z"
              fill="#505F98"
            />
            <path
              d="M447.767 407.237L461.901 378.402L508.429 401.085L494.296 429.92L447.767 407.237Z"
              fill="url(#paint3_linear_1_29)"
            />
            <path
              d="M461.893 378.599L476.026 349.764L522.555 372.447L508.422 401.282L461.893 378.599Z"
              fill="#505F98"
            />
            <path
              d="M476.028 350.01L490.161 321.175L536.69 343.858L522.557 372.693L476.028 350.01Z"
              fill="#505F98"
            />
            <path
              d="M490.144 321.391L504.277 292.556L550.806 315.239L536.673 344.074L490.144 321.391Z"
              fill="#505F98"
            />
            <path
              d="M474.438 353.598L488.571 324.763L535.1 347.446L520.967 376.281L474.438 353.598Z"
              fill="url(#paint4_linear_1_29)"
            />
            <path
              d="M488.582 324.97L502.715 296.135L549.244 318.817L535.111 347.652L488.582 324.97Z"
              fill="url(#paint5_linear_1_29)"
            />
            <rect
              x="789.516"
              y="818"
              width="98.2041"
              height="82"
              fill="#505F98"
            />
            <rect
              x="789.516"
              y="818"
              width="98.2041"
              height="82"
              fill="url(#paint6_linear_1_29)"
            />
            <rect
              x="581.083"
              y="476"
              width="519.079"
              height="355"
              rx="9.37"
              fill="#505F98"
            />
            <path
              opacity="0.65"
              d="M1083.13 505.438V799.562C1083.14 804.443 1081.22 809.129 1077.77 812.588C1074.33 816.047 1069.65 817.994 1064.76 818H612.473C607.591 817.989 602.915 816.04 599.471 812.582C596.027 809.125 594.099 804.441 594.11 799.562V505.438C594.099 500.559 596.027 495.875 599.471 492.418C602.915 488.96 607.591 487.011 612.473 487H1064.76C1069.65 487.006 1074.33 488.953 1077.77 492.412C1081.22 495.871 1083.14 500.557 1083.13 505.438Z"
              fill="url(#paint7_linear_1_29)"
            />
            <rect
              x="744.422"
              y="890"
              width="206.429"
              height="21"
              fill="#505F98"
            />
            <rect
              x="789.516"
              y="878"
              width="98.2041"
              height="12"
              fill="url(#paint8_linear_1_29)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M944.839 304.241V324.715L932.112 324.819C930.874 334.346 927.245 343.41 921.559 351.181L932.429 362.351L917.528 376.6L906.827 365.578C900.23 370.062 892.784 373.17 884.941 374.714V388H864.342V375.029C855.545 373.76 847.161 370.497 839.838 365.494L830.889 374.316L816.305 359.647L825.19 350.993C819.596 343.219 816.029 334.191 814.806 324.715H800.539V304.241H815.313C817.145 296.093 820.746 288.441 825.866 281.819L817.614 273.332L832.514 259.082L840.956 267.82C847.936 263.214 855.871 260.228 864.173 259.082V245H884.772V259.396C893.152 261.055 901.072 264.493 907.988 269.476L918.541 259.166L933.041 273.709L922.488 284.187C926.625 290.267 929.562 297.073 931.141 304.241H944.839ZM838.55 317.15C838.527 336.211 854.071 351.682 873.269 351.705C882.494 351.733 891.35 348.113 897.88 341.644C904.411 335.176 908.078 326.392 908.073 317.233C908.096 298.172 892.552 282.701 873.354 282.678C854.156 282.655 838.574 298.088 838.55 317.15Z"
              fill="#505F98"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1021 338.354L1020.08 350.396L1012.55 349.938C1011.43 355.475 1008.92 360.641 1005.26 364.958L1011.13 372.021L1001.77 379.729L996.004 372.792C991.944 375.13 987.452 376.625 982.797 377.188L982.191 385L970.133 384.104L970.719 376.479C965.626 375.344 960.864 373.056 956.801 369.792L951.159 374.583L943.28 365.396L948.86 360.688C945.927 355.876 944.24 350.414 943.949 344.792L935.82 344.167L936.719 332.146L945.349 332.792C946.775 328.085 949.206 323.743 952.475 320.063L948.024 314.708L957.386 307L961.921 312.5C966.198 310.095 970.96 308.672 975.859 308.333L976.486 300L988.544 300.896L987.896 309.375C992.71 310.714 997.174 313.081 1000.98 316.313L1007.6 310.708L1015.46 319.896L1008.77 325.583C1010.94 329.339 1012.36 333.477 1012.95 337.771L1021 338.354ZM958.213 341.243C957.357 352.436 965.761 362.203 976.988 363.062C982.389 363.487 987.738 361.747 991.849 358.228C995.96 354.708 998.493 349.7 998.888 344.312C999.732 333.119 991.317 323.361 980.089 322.514C968.861 321.666 959.069 330.05 958.213 341.243Z"
              fill="#505F98"
            />
            <path
              d="M1083.13 505.513V512H594.11V505.513C594.099 500.614 596.027 495.912 599.471 492.44C602.915 488.968 607.593 487.011 612.474 487H1064.76C1069.65 487.006 1074.33 488.961 1077.77 492.434C1081.22 495.907 1083.14 500.613 1083.13 505.513Z"
              fill="url(#paint9_linear_1_29)"
            />
            <rect
              x="604.131"
              y="544"
              width="47.0979"
              height="227"
              fill="url(#paint10_linear_1_29)"
            />
            <rect
              x="722.376"
              y="560"
              width="221.46"
              height="209"
              fill="url(#paint11_linear_1_29)"
            />
            <rect
              x="773.483"
              y="658"
              width="7.01458"
              height="9"
              fill="url(#paint12_linear_1_29)"
            />
            <rect
              x="773.483"
              y="616"
              width="7.01458"
              height="9"
              fill="url(#paint13_linear_1_29)"
            />
            <rect
              x="678.285"
              y="658"
              width="7.01458"
              height="9"
              fill="url(#paint14_linear_1_29)"
            />
            <rect
              x="678.285"
              y="616"
              width="7.01458"
              height="9"
              fill="url(#paint15_linear_1_29)"
            />
            <rect
              x="773.483"
              y="571"
              width="7.01458"
              height="9"
              fill="url(#paint16_linear_1_29)"
            />
            <rect
              x="679.287"
              y="571"
              width="7.01458"
              height="9"
              fill="url(#paint17_linear_1_29)"
            />
            <rect
              x="727.387"
              y="571"
              width="7.01458"
              height="9"
              fill="url(#paint18_linear_1_29)"
            />
            <rect
              x="727.387"
              y="658"
              width="7.01458"
              height="9"
              fill="url(#paint19_linear_1_29)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M691.312 656H769.474V583H691.312V656ZM761.601 648.282H699.185V590.656H761.601V648.282Z"
              fill="#505F98"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M691.312 656H769.474V583H691.312V656ZM761.601 648.282H699.185V590.656H761.601V648.282Z"
              fill="url(#paint20_linear_1_29)"
            />
            <rect
              x="975.903"
              y="524"
              width="100.208"
              height="100"
              fill="url(#paint21_linear_1_29)"
            />
            <rect
              x="975.903"
              y="634"
              width="100.208"
              height="100"
              fill="url(#paint22_linear_1_29)"
            />
            <rect
              opacity="0.65"
              x="604.131"
              y="543"
              width="47.0979"
              height="13"
              fill="url(#paint23_linear_1_29)"
            />
            <path
              d="M400.813 474.827L606.226 310.293L654.405 370.118L448.992 534.652L400.813 474.827Z"
              fill="white"
            />
            <path
              d="M429.576 479.455L454.678 459.235L487.306 499.522L462.204 519.742L429.576 479.455Z"
              fill="#505F98"
            />
            <path
              d="M429.576 479.455L454.678 459.235L487.306 499.522L462.204 519.742L429.576 479.455Z"
              fill="url(#paint24_linear_1_29)"
            />
            <path
              d="M453.227 459.689L478.294 439.56L510.774 479.79L485.707 499.919L453.227 459.689Z"
              fill="#505F98"
            />
            <path
              d="M453.227 459.689L478.294 439.56L510.774 479.79L485.707 499.919L453.227 459.689Z"
              fill="url(#paint25_linear_1_29)"
            />
            <path
              d="M478.205 439.761L503.272 419.633L535.752 459.863L510.685 479.991L478.205 439.761Z"
              fill="#505F98"
            />
            <path
              d="M478.205 439.761L503.272 419.633L535.752 459.863L510.685 479.991L478.205 439.761Z"
              fill="url(#paint26_linear_1_29)"
            />
            <path
              d="M503.168 419.847L528.235 399.718L560.714 439.948L535.648 460.077L503.168 419.847Z"
              fill="#505F98"
            />
            <path
              d="M503.168 419.847L528.235 399.718L560.714 439.948L535.648 460.077L503.168 419.847Z"
              fill="url(#paint27_linear_1_29)"
            />
            <path
              d="M529.324 399.389L554.426 379.169L587.054 419.456L561.952 439.676L529.324 399.389Z"
              fill="#505F98"
            />
            <path
              d="M554.439 378.99L579.541 358.77L612.169 399.057L587.067 419.277L554.439 378.99Z"
              fill="#505F98"
            />
            <path
              d="M578.079 360.051L603.146 339.923L635.626 380.153L610.559 400.282L578.079 360.051Z"
              fill="#505F98"
            />
            <path
              d="M608.139 403.218L587.011 420L555.029 379.782L576.157 363L608.139 403.218Z"
              fill="url(#paint28_linear_1_29)"
            />
            <path
              d="M575.118 362.648L600.185 342.519L632.665 382.749L607.598 402.878L575.118 362.648Z"
              fill="url(#paint29_linear_1_29)"
            />
            <path
              d="M523.964 484.15V607H502.92V484.15C502.92 479.61 505.743 475.57 509.949 474.089V461.825C509.949 459.712 511.627 458 513.697 458C515.767 458 517.445 459.712 517.445 461.825V474.297C521.37 475.935 523.942 479.823 523.964 484.15Z"
              fill="#505F98"
            />
            <path
              d="M523.964 484.15V607H502.92V484.15C502.92 479.61 505.743 475.57 509.949 474.089V461.825C509.949 459.712 511.627 458 513.697 458C515.767 458 517.445 459.712 517.445 461.825V474.297C521.37 475.935 523.942 479.823 523.964 484.15Z"
              fill="url(#paint30_linear_1_29)"
            />
            <rect
              x="489.893"
              y="562"
              width="50.1041"
              height="9"
              rx="2.245"
              fill="#505F98"
            />
            <path
              d="M514.633 644C506.048 644 498.912 631.185 498.912 622.634V566H529.977V622.634C529.977 631.185 523.197 644 514.633 644Z"
              fill="#505F98"
            />
            <rect
              x="489.893"
              y="562"
              width="50.1041"
              height="9"
              rx="2.245"
              fill="url(#paint31_linear_1_29)"
            />
            <path
              d="M514.633 644C506.048 644 498.912 631.366 498.912 622.937V571H529.977V622.937C529.977 631.366 523.197 644 514.633 644Z"
              fill="url(#paint32_linear_1_29)"
            />
            <path
              d="M715.003 704C714.329 700.436 713.903 695.39 715.198 695.043C717.93 694.275 715.003 704 715.003 704Z"
              fill="#28353D"
            />
            <path
              d="M858.461 899.507C857.975 912.102 848.199 958.388 847.881 971.004C847.881 975.202 849.003 981.647 847.649 985.698C844.855 994.284 834.953 993.108 833.662 988.049L833.175 985.53C828.583 961.012 835.968 933.198 833.175 901.186C831.504 881.643 823.717 843.963 818.617 843.711C815.93 843.711 754.587 972.851 749.255 980.807C746.631 984.817 739.246 984.187 735.67 987.42C732.094 990.652 765.463 889.515 779.45 836.07C782.712 825.039 784.839 813.709 785.798 802.252C786.179 795.64 784.042 793.415 790.157 791.463C794.389 790.119 800.25 790.497 804.778 790.182C809.709 789.804 855.562 789.72 855.562 792.953C855.118 810.502 859.646 870.412 858.461 899.507Z"
              fill="#606161"
            />
            <path
              d="M858.461 899.507C857.975 912.102 848.199 958.388 847.881 971.004C847.881 975.202 849.003 981.647 847.649 985.698C844.855 994.284 834.953 993.108 833.662 988.049L833.175 985.53C828.583 961.012 835.968 933.198 833.175 901.186C831.504 881.643 823.717 843.963 818.617 843.711C815.93 843.711 754.587 972.851 749.255 980.807C746.631 984.817 739.246 984.187 735.67 987.42C732.094 990.652 765.463 889.515 779.45 836.07C782.712 825.039 784.839 813.709 785.798 802.252C786.179 795.64 784.042 793.415 790.157 791.463C794.389 790.119 800.25 790.497 804.778 790.182C809.709 789.804 855.562 789.72 855.562 792.953C855.118 810.502 859.646 870.412 858.461 899.507Z"
              fill="url(#paint33_linear_1_29)"
            />
            <path
              d="M804.313 631.148C803.928 627.163 802.042 625 800.2 625C798.358 625 797.222 627.12 797.608 631.148C797.695 634.122 799.943 636.597 802.921 637C804.785 637 804.72 635.134 804.313 631.148Z"
              fill="#FFCD9C"
            />
            <path
              d="M836.752 631.159C837.003 627.166 838.842 625 840.744 625C842.645 625 843.878 627.124 843.586 631.159C843.559 634.173 841.311 636.687 838.361 637C836.48 637 836.459 635.152 836.752 631.159Z"
              fill="#FFCD9C"
            />
            <path
              d="M840.482 648.672C840.222 650.777 831.295 660 821.136 660C810.976 660 802.589 651.577 800.817 648.208C799.044 644.839 806.177 601.505 810.306 597.884C814.435 594.262 831.165 596.641 832.57 598.558C835.942 603.085 841.584 640.27 840.482 648.672Z"
              fill="#F4AD7D"
            />
            <path
              d="M836.282 615.977C834.901 616.639 829.478 602.842 828.34 600.525C827.203 598.208 827.386 595.829 828.767 595.167C830.148 594.505 832.179 595.871 833.316 598.167C834.454 600.463 837.643 615.336 836.282 615.977Z"
              fill="#FFCD9C"
            />
            <path
              d="M805.869 614.987C804.437 614.501 808.23 600.179 809.057 597.703C809.884 595.228 811.741 593.599 813.092 594.086C814.444 594.573 815.009 596.984 814.182 599.481C813.355 601.977 807.221 615.474 805.869 614.987Z"
              fill="#FFCD9C"
            />
            <path
              d="M811.555 647H833.348L836.614 667.622C824.742 674.005 817.819 673.301 808.556 666.214L811.555 647Z"
              fill="#F4AD7D"
            />
            <path
              d="M820.581 651.13C820.581 650.75 821.487 650.43 822.585 650.43C823.682 650.43 824.589 650.75 824.589 651.13C824.589 651.51 823.706 651.57 822.585 651.57C821.463 651.57 820.581 651.53 820.581 651.13Z"
              fill="#F4AD7D"
            />
            <path
              d="M841.643 641.808C842.468 636.894 843.814 601.708 840.514 597.051C837.214 592.394 817.459 589.381 814.463 590.108C807.754 591.731 808.927 596.517 808.927 596.517C806.933 596.547 804.981 597.084 803.261 598.076C800.959 599.615 796.118 621.79 799.982 638.56C801.719 646.102 808.558 652.66 820.368 652.981C834.913 653.365 840.644 647.896 841.643 641.808Z"
              fill="#606161"
            />
            <path
              d="M814.544 591.762C816.106 590.448 818.128 589.828 820.151 590.041C826.292 590.008 832.385 591.14 838.111 593.376C841.286 594.488 844.169 596.311 846.543 598.708C848.933 601.173 850.034 604.627 849.515 608.034C848.461 613.047 843.191 616.148 841.463 620.97C840.071 624.837 841.062 628.575 841.104 632.463C841.132 635.606 840.907 638.746 840.43 641.852C839.46 647.906 833.916 653.344 819.688 652.983C808.221 652.664 801.581 646.143 799.894 638.644C797.611 626.198 798.21 613.389 801.644 601.215C807.824 602.648 814.147 603.361 820.489 603.339C827.213 603.395 833.918 602.611 840.451 601.002C841.568 607.503 841.547 620.524 841.189 630.253"
              fill="#606161"
            />
            <path
              d="M779.367 663.954C775.928 664.241 772.615 665.384 769.728 667.28C764.784 671.171 764.408 678.43 764.492 684.748C764.322 693.501 764.93 702.252 766.307 710.897C767.788 718.826 770.479 726.441 772.691 734.202C776.177 746.831 778.007 759.862 778.136 772.966C778.136 780.162 778.011 788.07 782.496 793.697C787.399 799.806 796.078 800.998 803.881 801.438C814.959 802.086 826.079 802.17 837.157 801.709C844.584 801.375 852.491 800.643 858.374 796.082C863.068 792.442 874.063 669.288 865.53 666.171C856.997 663.054 847.818 662.259 838.763 661.506C818.464 659.791 799.353 658.431 779.367 663.954Z"
              fill="#505F98"
            />
            <path
              d="M843.275 919.291C842.187 933.255 839.591 984 839.591 984L832.977 983.77C828.435 959.39 835.74 931.732 832.977 899.899C831.323 880.465 823.621 842.996 818.576 842.746C820.083 830.221 828.561 832.1 828.561 832.1C834.726 841.294 840.043 851.026 844.447 861.178C849.491 874.37 844.384 905.263 843.275 919.291Z"
              fill="url(#paint34_linear_1_29)"
            />
            <path
              d="M718.745 985.024C717.712 985.786 716.928 986.83 716.49 988.025C716.255 989.009 716.35 990.04 716.761 990.965C717.93 993.326 720.143 995.019 722.754 995.55C725.334 996.04 727.976 996.131 730.584 995.818L738.937 995.262C741.062 995.212 743.17 994.873 745.201 994.255C747.234 993.627 748.912 992.198 749.836 990.308C750.328 988.916 750.52 987.438 750.4 985.969C750.4 979.164 747.978 973.634 740.419 975.299C732.501 976.765 725.064 980.102 718.745 985.024Z"
              fill="#505F98"
            />
            <path
              d="M857.476 988.063C858.425 988.759 859.144 989.709 859.546 990.797C859.76 991.682 859.676 992.611 859.306 993.446C858.242 995.584 856.21 997.114 853.815 997.579C851.455 998.035 849.034 998.121 846.646 997.834L839.063 997.325C837.134 997.284 835.221 996.985 833.376 996.435C831.517 995.864 829.985 994.566 829.149 992.853C828.7 991.595 828.522 990.26 828.626 988.932C828.626 982.785 830.805 977.72 837.756 979.288C844.962 980.619 851.729 983.63 857.476 988.063Z"
              fill="#505F98"
            />
            <path
              d="M866.676 666C866.676 666 899.438 685.163 909.277 709.389C919.116 733.614 877.053 792 877.053 792L868.051 782.814C868.051 782.814 890.007 738.759 886.612 727.74C883.218 716.721 869.92 706.452 869.92 706.452L866.676 666Z"
              fill="#505F98"
            />
            <path
              d="M773.483 703.859C773.483 703.859 727.931 724.24 709.42 714.238C690.91 704.237 709.967 654 709.967 654L722.363 658.202C722.363 658.202 712.005 683.815 723.855 687.618C735.705 691.421 771.214 666.438 771.214 666.438L773.483 703.859Z"
              fill="#505F98"
            />
            <path
              d="M859.242 790.976C857.932 791.826 856.87 792.968 856.153 794.297C855.722 795.425 855.567 796.629 855.699 797.819C855.62 800.709 856.936 803.479 859.285 805.367C860.936 806.25 862.786 806.76 864.686 806.857C865.851 807.048 867.042 807.048 868.207 806.857C869.395 806.646 870.388 805.888 870.843 804.844C870.998 804.183 871.063 803.507 871.037 802.831C871.189 799.51 873.694 796.793 875.768 794.076C876.269 793.551 876.593 792.9 876.697 792.204C876.685 791.434 876.396 790.69 875.876 790.091C874.472 788.199 870.994 784.717 868.207 785.018C865.42 785.32 861.402 789.326 859.242 790.976Z"
              fill="#F4AD7D"
            />
            <path
              d="M730.182 646.435C730.775 645.611 731.18 644.679 731.37 643.698C731.521 642.683 730.984 641.687 730.028 641.211C728.51 640.647 726.706 642.13 725.209 641.504C724.703 641.235 724.279 640.846 723.977 640.375C722.211 637.945 721.197 635.093 721.051 632.143C721.137 630.571 720.989 628.995 720.611 627.463C720.166 625.886 718.581 624.849 716.871 625.018C715.463 625.331 714.67 626.689 713.79 627.776C712.91 628.863 711.15 630.158 710.006 631.516C708.053 634.307 706.935 637.55 706.772 640.898C706.156 645.077 705.76 649.861 708.84 652.87C711.216 655.189 718.455 657.927 721.777 656.694C725.451 655.315 728.334 649.444 730.182 646.435Z"
              fill="#F4AD7D"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_29"
                x1="529.721"
                y1="560.166"
                x2="594.421"
                y2="431.528"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_29"
                x1="584.958"
                y1="556.365"
                x2="677.737"
                y2="374.67"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_29"
                x1="705.107"
                y1="565.092"
                x2="842.332"
                y2="254.807"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_29"
                x1="833.118"
                y1="581.583"
                x2="1037.86"
                y2="133.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.36" stop-color="#010101" stop-opacity="0.36" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_1_29"
                x1="684.259"
                y1="476.564"
                x2="801.318"
                y2="234.841"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_29"
                x1="606.074"
                y1="423.444"
                x2="670.214"
                y2="287.486"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_1_29"
                x1="911.821"
                y1="886.322"
                x2="922.227"
                y2="759.582"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_1_29"
                x1="509.55"
                y1="423.517"
                x2="506.838"
                y2="873.071"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_1_29"
                x1="255.543"
                y1="861.073"
                x2="255.643"
                y2="1003.31"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_1_29"
                x1="1409.56"
                y1="606.966"
                x2="1443.69"
                y2="199.847"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_1_29"
                x1="581.528"
                y1="496.87"
                x2="719.391"
                y2="865.268"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_1_29"
                x1="685.202"
                y1="519.99"
                x2="681.882"
                y2="802.698"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_1_29"
                x1="1001.48"
                y1="711.704"
                x2="1020.64"
                y2="133.783"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_1_29"
                x1="1000.62"
                y1="712.045"
                x2="1019.78"
                y2="134.124"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_1_29"
                x1="906.312"
                y1="709.354"
                x2="925.502"
                y2="131.433"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_1_29"
                x1="905.46"
                y1="709.694"
                x2="924.649"
                y2="131.774"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_1_29"
                x1="999.683"
                y1="713.545"
                x2="1018.87"
                y2="135.625"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_1_29"
                x1="905.522"
                y1="711.236"
                x2="924.683"
                y2="133.315"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_1_29"
                x1="953.579"
                y1="712.396"
                x2="972.768"
                y2="134.497"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_1_29"
                x1="955.397"
                y1="709.843"
                x2="974.587"
                y2="131.923"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint20_linear_1_29"
                x1="609.84"
                y1="724.399"
                x2="842.094"
                y2="941.415"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint21_linear_1_29"
                x1="959.192"
                y1="504.864"
                x2="957.409"
                y2="640.026"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint22_linear_1_29"
                x1="959.192"
                y1="614.864"
                x2="957.409"
                y2="750.026"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint23_linear_1_29"
                x1="594.846"
                y1="540.281"
                x2="594.828"
                y2="558.481"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint24_linear_1_29"
                x1="514.033"
                y1="593.052"
                x2="627.501"
                y2="503.482"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint25_linear_1_29"
                x1="563.942"
                y1="612.988"
                x2="725.274"
                y2="487.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint26_linear_1_29"
                x1="669.031"
                y1="671.751"
                x2="925.245"
                y2="448.676"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint27_linear_1_29"
                x1="777.942"
                y1="740.865"
                x2="1153.71"
                y2="421.936"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.36" stop-color="#010101" stop-opacity="0.36" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint28_linear_1_29"
                x1="625.99"
                y1="503.751"
                x2="809.01"
                y2="372.081"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint29_linear_1_29"
                x1="639.622"
                y1="501.517"
                x2="755.51"
                y2="405.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint30_linear_1_29"
                x1="505.022"
                y1="667.745"
                x2="543.26"
                y2="667.767"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.01" />
                <stop offset="0.07" stop-color="white" stop-opacity="0.22" />
                <stop offset="0.16" stop-color="white" stop-opacity="0.45" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.65" />
                <stop offset="0.33" stop-color="white" stop-opacity="0.8" />
                <stop offset="0.4" stop-color="white" stop-opacity="0.91" />
                <stop offset="0.46" stop-color="white" stop-opacity="0.98" />
                <stop offset="0.51" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint31_linear_1_29"
                x1="431.628"
                y1="570.2"
                x2="443.266"
                y2="608.941"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint32_linear_1_29"
                x1="456.461"
                y1="718.933"
                x2="557.503"
                y2="720.982"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint33_linear_1_29"
                x1="859.792"
                y1="876.512"
                x2="763.764"
                y2="711.616"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
              <linearGradient
                id="paint34_linear_1_29"
                x1="860.815"
                y1="414.892"
                x2="687.69"
                y2="419.775"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010101" stop-opacity="0.01" />
                <stop offset="0.95" stop-color="#010101" />
              </linearGradient>
            </defs>
          </svg>
          <div className="home-head">Research Scholar Forum</div>
        </div>
        <div className="home-content">
          <div className="home-content-container">
            <h1 className="home-content-head">About Us</h1>
            <div className="home-content-text">
              The Research Scholar Forum at the Indian Institute of Technology
              Delhi (IIT Delhi) stands as a dynamic community, serving as a
              vital hub for the vibrant exchange of ideas and experiences among
              the institution's research students. Committed to fostering a
              collaborative and intellectually stimulating environment, the
              forum plays a pivotal role in connecting the diverse and talented
              pool of research scholars within the institute. Through a myriad
              of initiatives, discussions, and knowledge-sharing platforms, the
              Research Scholar Forum at IIT Delhi not only provides a space for
              research students to engage in meaningful academic discourse but
              also serves as an advocate for their collective interests within
              the academic community. As a cornerstone of academic camaraderie,
              the forum reflects the dedication of IIT Delhi's research scholars
              to advancing knowledge, innovation, and academic excellence.
            </div>
          </div>
          <img src={homeImg} alt="home" className="home-content-img" />
        </div>
        <Carousel items={items} timeout={3000} />
        <div className="container-button">
          <Link to="/events">
            <button className="button">Know more!!</button>
          </Link>
        </div>
        <div className="home-contact">
          <svg
            width="1442"
            height="400"
            viewBox="0 0 1442 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M-39.2781 4.34101C624.983 58.8893 1448.34 4.34101 1448.34 4.34101C1448.34 4.34101 1989.66 525.507 1448.34 449.271C907.01 373.035 371.882 471.616 -39.2781 449.271C-450.438 426.926 -703.54 -50.2073 -39.2781 4.34101Z"
              fill="#E7ECFF"
            />
          </svg>
          <div className="home-contact-container">
            <div className="home-contact-head">Want to collaborate?</div>
            <div className="home-contact-text">
              Reach us here
              <br />
              <br /> cyz198125@iitd.ac.in
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
