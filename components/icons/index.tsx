/* In a 'real life' scenario, I would have a separate file for each icon for scalability. 
   In this case though there are only a few so I will export them all from the same file.
   Exporting at the top of the file for better visibility */

export {
  Cart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  Search,
  Star,
  StarFilled,
  StarHalf,
  User,
};

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.5L4.5 9L5.55 7.95L12 14.4L18.45 7.95L19.5 9L12 16.5Z"
        fill="none"
      />
    </svg>
  );
}

function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7.95L19.5 15.45L18.45 16.5L12 10.05L5.55 16.5L4.5 15.45L12 7.95Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.725 12.225L15.225 4.725L16.275 5.775L9.825 12.225L16.275 18.675L15.225 19.725L7.725 12.225Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.275 12.225L8.775 19.725L7.725 18.675L14.175 12.225L7.725 5.775L8.775 4.725L16.275 12.225Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.89L14.07 9.075L14.415 9.825L15.165 9.9375L19.785 10.605L16.5 13.83L15.9375 14.3775L16.0725 15.1275L16.86 19.725L12.7275 17.5575L12 17.25L11.3025 17.6175L7.17 19.755L7.92 15.1575L8.055 14.4075L7.5 13.83L4.185 10.5675L8.805 9.9L9.555 9.7875L9.9 9.0375L12 4.89ZM12 1.5L8.5875 8.415L0.959999 9.5175L6.48 14.9025L5.175 22.5L12 18.915L18.825 22.5L17.52 14.9025L23.04 9.525L15.4125 8.415L12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5L8.5875 8.415L0.959999 9.5175L6.48 14.9025L5.175 22.5L12 18.915L18.825 22.5L17.52 14.9025L23.04 9.525L15.4125 8.415L12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarHalf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5875 8.415L0.959999 9.525L6.48 14.9025L5.175 22.5L12 18.915V1.5L8.5875 8.415Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Cart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z"
        fill="currentColor"
      />
      <path
        d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z"
        fill="currentColor"
      />
      <path
        d="M21 5.25H4.365L3.75 2.1C3.71494 1.92804 3.62068 1.77383 3.48364 1.6642C3.3466 1.55456 3.17546 1.49646 3 1.5H0V3H2.385L5.25 17.4C5.28506 17.572 5.37932 17.7262 5.51636 17.8358C5.6534 17.9454 5.82454 18.0035 6 18H19.5V16.5H6.615L6 13.5H19.5C19.6734 13.5042 19.8429 13.4483 19.9796 13.3416C20.1163 13.2349 20.2119 13.0842 20.25 12.915L21.75 6.165C21.7751 6.05372 21.7745 5.93817 21.7483 5.82715C21.722 5.71613 21.6708 5.61256 21.5985 5.52433C21.5261 5.4361 21.4347 5.36553 21.3309 5.31799C21.2272 5.27045 21.114 5.2472 21 5.25ZM18.9 12H5.715L4.665 6.75H20.0625L18.9 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C12.7417 3 13.4667 3.21993 14.0834 3.63199C14.7001 4.04404 15.1807 4.62971 15.4645 5.31494C15.7484 6.00016 15.8226 6.75416 15.6779 7.48159C15.5333 8.20902 15.1761 8.8772 14.6517 9.40165C14.1272 9.9261 13.459 10.2833 12.7316 10.4279C12.0042 10.5726 11.2502 10.4984 10.5649 10.2145C9.87971 9.93072 9.29404 9.45007 8.88199 8.83339C8.46993 8.2167 8.25 7.49168 8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3ZM12 1.5C10.9616 1.5 9.94661 1.80791 9.08326 2.38478C8.2199 2.96166 7.54699 3.7816 7.14963 4.74091C6.75227 5.70022 6.64831 6.75582 6.85088 7.77422C7.05345 8.79262 7.55346 9.72808 8.28769 10.4623C9.02192 11.1965 9.95738 11.6966 10.9758 11.8991C11.9942 12.1017 13.0498 11.9977 14.0091 11.6004C14.9684 11.203 15.7883 10.5301 16.3652 9.66674C16.9421 8.80339 17.25 7.78835 17.25 6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5ZM19.5 22.5H18V18.75C18 18.2575 17.903 17.7699 17.7145 17.3149C17.5261 16.86 17.2499 16.4466 16.9017 16.0983C16.5534 15.7501 16.14 15.4739 15.6851 15.2855C15.2301 15.097 14.7425 15 14.25 15H9.75C8.75544 15 7.80161 15.3951 7.09835 16.0983C6.39509 16.8016 6 17.7554 6 18.75V22.5H4.5V18.75C4.5 17.3576 5.05312 16.0223 6.03769 15.0377C7.02226 14.0531 8.35761 13.5 9.75 13.5H14.25C15.6424 13.5 16.9777 14.0531 17.9623 15.0377C18.9469 16.0223 19.5 17.3576 19.5 18.75V22.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.75 20.6895L16.086 15.0255C17.4471 13.3915 18.1258 11.2956 17.981 9.17393C17.8362 7.05223 16.8789 5.06804 15.3084 3.63414C13.7379 2.20023 11.6751 1.427 9.54896 1.47531C7.42288 1.52362 5.39726 2.38975 3.8935 3.8935C2.38974 5.39726 1.52362 7.42288 1.47531 9.54897C1.427 11.6751 2.20023 13.7379 3.63413 15.3084C5.06804 16.8789 7.05222 17.8362 9.17392 17.981C11.2956 18.1258 13.3915 17.4471 15.0255 16.086L20.6895 21.75L21.75 20.6895ZM3 9.75C3 8.41498 3.39588 7.10993 4.13758 5.9999C4.87928 4.88987 5.93348 4.0247 7.16688 3.51381C8.40028 3.00292 9.75748 2.86925 11.0669 3.1297C12.3762 3.39015 13.579 4.03302 14.523 4.97703C15.467 5.92103 16.1098 7.12377 16.3703 8.43314C16.6307 9.74251 16.4971 11.0997 15.9862 12.3331C15.4753 13.5665 14.6101 14.6207 13.5001 15.3624C12.3901 16.1041 11.085 16.5 9.75 16.5C7.96039 16.498 6.24466 15.7862 4.97922 14.5208C3.71378 13.2553 3.00198 11.5396 3 9.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5H21V6H3V4.5ZM3 18H21V19.5H3V18ZM3 9H21V10.5H3V9ZM3 13.5H21V15H3V13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
