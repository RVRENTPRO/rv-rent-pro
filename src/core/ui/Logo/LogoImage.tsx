import classNames from 'classnames';

const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60.00024" height="42.999863" version="1.0">
    <defs>
      <linearGradient  id="c" x1="213.52136" x2="213.52136" y1="24.852869" y2="90.837257" gradientTransform="translate(-153.33859 4.89624) scale(1.03547)" gradientUnits="userSpaceOnUse"/>
      <linearGradient id="b" x1="221.72475" x2="221.72475" y1="49.701954" y2="107.19199" gradientTransform="translate(-145.60847 7.4497354)" gradientUnits="userSpaceOnUse"/>
      <linearGradient id="a">
        <stop offset="0" stop-color="#fff"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <g transform="matrix(.61222 0 0 .6184 -15.8158417 -30.431792)">
      <rect width="95.492065" height="67.047623" x="27.089945" y="50.455025" fill="#fff" stroke="#005ec1" stroke-linecap="round" stroke-linejoin="bevel" stroke-opacity=".98431373" stroke-width="2.5" ry="7.7883596"/>
      <path fill="#3288ff" d="M34.370369 57.904762h80.931213v52.148148H34.370369z"/>
      <path fill="url(#b)" d="M37.574791 61.422165h74.15873v45.375664h-74.15873z"/>
      <path fill="url(#c)" fill-rule="evenodd" d="M115.84035 57.850381v14.901958s-.17532-1.402538 0 .175317c-12.93903 6.367327-40.926146 6.656577-41.024206 6.486735-.04948.184646-29.2827-.235743-41.02422-7.713954V57.850381h82.048426z"/>
    </g>
  </svg>
  );
};

export default LogoImage;
