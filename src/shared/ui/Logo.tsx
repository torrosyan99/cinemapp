export const Logo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 208 48"
        width="208"
        height="48"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="h-12 w-auto shrink-0  text-brand"
    >
        <rect x="1" y="5" width="38" height="38" rx="11" fill="currentColor" />
        <path
            d="M16 17L27 24L16 31Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <text
          className={'max-md:hidden'}
            x="51"
            y="34"
            fill="white"
            fontSize="30"
            fontWeight="700"
            letterSpacing="-1.2"
            textLength="90"
            lengthAdjust="spacingAndGlyphs"
        >
            Cinem
        </text>
        <text
          className={'max-md:hidden'}
            x="141"
            y="34"
            fill="currentColor"
            fontSize="30"
            fontWeight="700"
            letterSpacing="-1.2"
            textLength="61"
            lengthAdjust="spacingAndGlyphs"
        >
            App
        </text>
    </svg>
);
