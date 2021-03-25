import React from 'react';

const EmailAlertsIcon: React.FC<{ height?: string; width?: string }> = ({
  height = 32,
  width = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2, 0)">
        <path
          d="M4.32046 6.87302C2.92646 6.87302 1.78546 8.01502 1.78546 9.40802V28.676C1.78546 30.071 2.92646 31.211 4.32046 31.211H29.6725C31.0665 31.211 32.2075 30.07 32.2075 28.676V6.87302H4.32046Z"
          fill="white"
        />
        <path
          d="M29.6725 32H4.32046C2.48746 32 0.99646 30.51 0.99646 28.676V9.40801C0.99646 7.57501 2.48746 6.08401 4.32046 6.08401H32.2075C32.6425 6.08401 32.9965 6.43801 32.9965 6.87301V28.676C32.9965 30.51 31.5055 32 29.6725 32ZM4.32046 7.66201C3.35746 7.66201 2.57446 8.44501 2.57446 9.40801V28.676C2.57446 29.639 3.35746 30.422 4.32046 30.422H29.6725C30.6355 30.422 31.4185 29.639 31.4185 28.676V7.66201H4.32046Z"
          fill="black"
        />
        <path
          d="M2.52946 7.61801L15.2035 20.293C16.1895 21.277 17.8035 21.277 18.7885 20.293L31.4625 7.61801"
          fill="white"
        />
        <path
          d="M16.9965 21.822C16.1445 21.822 15.2935 21.498 14.6455 20.849L1.97246 8.176C1.66446 7.868 1.66446 7.368 1.97246 7.061C2.28046 6.752 2.78046 6.752 3.08846 7.061L15.7625 19.735C16.4435 20.417 17.5515 20.417 18.2315 19.735L30.9045 7.061C31.2125 6.752 31.7125 6.752 32.0205 7.061C32.3285 7.369 32.3285 7.869 32.0205 8.176L19.3475 20.85C18.6985 21.498 17.8475 21.822 16.9965 21.822Z"
          fill="black"
        />
        <path
          d="M2.52946 31.256C2.32746 31.256 2.12546 31.18 1.97146 31.026C1.66346 30.717 1.66346 30.217 1.97146 29.909L13.3965 18.484C13.7045 18.177 14.2045 18.177 14.5125 18.484C14.8205 18.793 14.8205 19.293 14.5125 19.601L3.08746 31.025C2.93446 31.18 2.73146 31.256 2.52946 31.256Z"
          fill="black"
        />
        <path
          d="M31.4625 31.256C31.2615 31.256 31.0595 31.18 30.9045 31.026L19.4805 19.602C19.1715 19.293 19.1715 18.793 19.4805 18.485C19.7885 18.178 20.2885 18.178 20.5965 18.485L32.0205 29.909C32.3285 30.218 32.3285 30.718 32.0205 31.026C31.8665 31.18 31.6645 31.256 31.4625 31.256Z"
          fill="black"
        />
      </g>
      <g transform="translate(7, 0)">
        <path
          d="M26.1225 12.957C29.4826 12.957 32.2065 10.2331 32.2065 6.873C32.2065 3.5129 29.4826 0.789001 26.1225 0.789001C22.7624 0.789001 20.0385 3.5129 20.0385 6.873C20.0385 10.2331 22.7624 12.957 26.1225 12.957Z"
          fill="#D9002C"
        />
        <path
          d="M26.1225 13.747C22.3335 13.747 19.2495 10.663 19.2495 6.873C19.2495 3.083 22.3335 0 26.1225 0C29.9135 0 32.9965 3.083 32.9965 6.873C32.9965 10.663 29.9135 13.747 26.1225 13.747ZM26.1225 1.578C23.2025 1.578 20.8275 3.953 20.8275 6.873C20.8275 9.793 23.2025 12.169 26.1225 12.169C29.0425 12.169 31.4185 9.793 31.4185 6.873C31.4185 3.953 29.0425 1.578 26.1225 1.578Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="40"
            height="32"
            fill="white"
            transform="translate(0.99646)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmailAlertsIcon;
