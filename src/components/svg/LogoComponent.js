import * as React from "react";
import { forwardRef } from "react";

const SvgComponent = (props, ref) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g opacity={0.7}>
      <g filter="url(#a)">
        <path
          d="M467.419 164.013c3.783-14.117 23.815-14.117 27.598 0l1.785 6.663C522.39 266.161 597.057 340.69 692.589 366.1l6.969 1.853c14.152 3.764 14.152 23.848 0 27.612l-6.969 1.854c-95.532 25.409-170.199 99.939-195.787 195.423l-1.785 6.663c-3.783 14.118-23.815 14.118-27.598 0l-1.785-6.662c-25.588-95.485-100.255-170.015-195.787-195.424l-6.969-1.854c-14.152-3.764-14.152-23.848 0-27.612l6.969-1.853c95.532-25.41 170.199-99.939 195.787-195.424l1.785-6.663Z"
          fill="#C89850"
        />
        <path
          d="M468.569 164.321c3.468-12.941 21.83-12.941 25.298 0l1.786 6.663c25.697 95.897 100.686 170.747 196.63 196.266l6.969 1.854c12.972 3.45 12.972 21.86 0 25.311l-6.969 1.853c-95.943 25.519-170.933 100.37-196.63 196.266l-1.786 6.663c-3.468 12.941-21.83 12.941-25.298 0l-1.786-6.663c-25.697-95.896-100.686-170.746-196.63-196.266l-6.969-1.853c-12.972-3.451-12.972-21.861 0-25.311l6.969-1.854c95.944-25.519 170.933-100.369 196.63-196.266l1.786-6.663Z"
          stroke="#B6B7B9"
          strokeWidth={2.381}
        />
      </g>
      <g filter="url(#b)">
        <path
          d="M305.673 51.494c3.783-14.118 23.815-14.118 27.598 0l1.573 5.87C360.432 152.85 435.1 227.379 530.632 252.789l6.175 1.642c14.152 3.764 14.152 23.848 0 27.612l-6.175 1.642c-95.532 25.41-170.2 99.939-195.788 195.424l-1.573 5.87c-3.783 14.118-23.815 14.118-27.598 0l-1.573-5.87c-25.587-95.485-100.255-170.014-195.788-195.424l-6.175-1.642c-14.151-3.764-14.151-23.848.001-27.612l6.174-1.642c95.533-25.41 170.201-99.938 195.788-195.423l1.573-5.871Z"
          fill="#271C0C"
        />
        <path
          d="M306.823 51.802c3.468-12.941 21.83-12.941 25.298 0l1.573 5.87c25.698 95.897 100.688 170.747 196.632 196.266l6.175 1.643c12.972 3.45 12.972 21.86 0 25.311l-6.175 1.642c-95.944 25.519-170.934 100.369-196.631 196.265l-1.574 5.871c-3.468 12.941-21.83 12.941-25.298 0l-1.573-5.871c-25.698-95.896-100.688-170.746-196.632-196.265l-6.175-1.643c-12.972-3.45-12.972-21.86.001-25.31l6.174-1.643c95.944-25.519 170.934-100.369 196.632-196.265l1.573-5.87Z"
          stroke="#271C0C"
          strokeWidth={2.381}
        />
      </g>
      <path
        d="M529.208 43.355c.4-3.903 6.092-3.903 6.492 0 1.885 18.39 16.45 32.948 34.847 34.788 3.9.39 3.9 6.074 0 6.464-18.397 1.84-32.962 16.398-34.847 34.789-.4 3.902-6.092 3.902-6.492 0-1.885-18.391-16.45-32.95-34.847-34.789-3.9-.39-3.9-6.074 0-6.464 18.397-1.84 32.962-16.398 34.847-34.788Z"
        fill="#271C0C"
        stroke="#000"
        strokeWidth={2.381}
      />
      <path
        d="M48.721 160.827c.187-1.811 2.834-1.811 3.02 0 1.176 11.379 10.197 20.395 21.585 21.524 1.806.179 1.806 2.813 0 2.992-11.388 1.13-20.409 10.145-21.584 21.524-.187 1.811-2.834 1.811-3.02 0-1.176-11.379-10.197-20.394-21.585-21.524-1.806-.179-1.806-2.813 0-2.992 11.388-1.129 20.409-10.145 21.584-21.524Z"
        fill="#C89850"
        stroke="#000"
        strokeWidth={2.381}
      />
      <g filter="url(#c)">
        <path
          d="M467.419 164.013c3.783-14.117 23.815-14.117 27.598 0l1.785 6.663C522.39 266.161 597.057 340.69 692.589 366.1l6.969 1.853c14.152 3.764 14.152 23.848 0 27.612l-6.969 1.854c-95.532 25.409-170.199 99.939-195.787 195.423l-1.785 6.663c-3.783 14.118-23.815 14.118-27.598 0l-1.785-6.662c-25.588-95.485-100.255-170.015-195.787-195.424l-6.969-1.854c-14.152-3.764-14.152-23.848 0-27.612l6.969-1.853c95.532-25.41 170.199-99.939 195.787-195.424l1.785-6.663Z"
          fill="#C89850"
        />
        <path
          d="M468.569 164.321c3.468-12.941 21.83-12.941 25.298 0l1.786 6.663c25.697 95.897 100.686 170.747 196.63 196.266l6.969 1.854c12.972 3.45 12.972 21.86 0 25.311l-6.969 1.853c-95.943 25.519-170.933 100.37-196.63 196.266l-1.786 6.663c-3.468 12.941-21.83 12.941-25.298 0l-1.786-6.663c-25.697-95.896-100.686-170.746-196.63-196.266l-6.969-1.853c-12.972-3.451-12.972-21.861 0-25.311l6.969-1.854c95.944-25.519 170.933-100.369 196.63-196.266l1.786-6.663Z"
          stroke="#B6B7B9"
          strokeWidth={2.381}
        />
      </g>
      <path
        d="M529.208 43.355c.4-3.903 6.092-3.903 6.492 0 1.885 18.39 16.45 32.948 34.847 34.788 3.9.39 3.9 6.074 0 6.464-18.397 1.84-32.962 16.398-34.847 34.789-.4 3.902-6.092 3.902-6.492 0-1.885-18.391-16.45-32.95-34.847-34.789-3.9-.39-3.9-6.074 0-6.464 18.397-1.84 32.962-16.398 34.847-34.788Z"
        fill="#271C0C"
        stroke="#000"
        strokeWidth={2.381}
      />
      <path
        d="M48.721 160.827c.187-1.811 2.834-1.811 3.02 0 1.176 11.379 10.197 20.395 21.585 21.524 1.806.179 1.806 2.813 0 2.992-11.388 1.13-20.409 10.145-21.584 21.524-.187 1.811-2.834 1.811-3.02 0-1.176-11.379-10.197-20.394-21.585-21.524-1.806-.179-1.806-2.813 0-2.992 11.388-1.129 20.409-10.145 21.584-21.524Z"
        fill="#C89850"
        stroke="#000"
        strokeWidth={2.381}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={121.311}
        y={34.376}
        width={707.91}
        height={718.576}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={59.524} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_855_11399"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={47.62} dy={47.62} />
        <feGaussianBlur stdDeviation={4.762} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.956863 0 0 0 0 0.898823 0 0 0 0 0.811765 0 0 0 1 0" />
        <feBlend
          in2="effect1_backgroundBlur_855_11399"
          result="effect2_dropShadow_855_11399"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-35.715} dy={47.62} />
        <feGaussianBlur stdDeviation={47.62} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="effect2_dropShadow_855_11399"
          result="effect3_dropShadow_855_11399"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_855_11399"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={20.094}
        y={-30.524}
        width={598.756}
        height={597.519}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={35.715} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_855_11399"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_855_11399"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={121.311}
        y={34.376}
        width={707.91}
        height={718.576}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={59.524} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_855_11399"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={47.62} dy={47.62} />
        <feGaussianBlur stdDeviation={4.762} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.956863 0 0 0 0 0.898823 0 0 0 0 0.811765 0 0 0 1 0" />
        <feBlend
          in2="effect1_backgroundBlur_855_11399"
          result="effect2_dropShadow_855_11399"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-35.715} dy={47.62} />
        <feGaussianBlur stdDeviation={47.62} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="effect2_dropShadow_855_11399"
          result="effect3_dropShadow_855_11399"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_855_11399"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const LogoComponent = forwardRef(SvgComponent);
export default LogoComponent;
