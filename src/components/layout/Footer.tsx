export function Footer() {
  return (
    <footer className="bg-[#FFE2D9] p-16">
      <div className="flex justify-between max-sm:flex-col max-sm:gap-10">
        <div className="flex flex-col gap-5">
          <div className="w-[69px] h-[69px] bg-[#AA3700] rounded-[50%]" />
          <div className="text-[#AA3700] text-[52px] font-bold leading-[52px] tracking-[-2.067px]">
            1000XRewards
          </div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1286 12.5943C16.5222 12.5943 11.9976 17.1189 11.9976 22.7253C11.9976 28.3317 16.5222 32.8563 22.1286 32.8563C27.735 32.8563 32.2596 28.3317 32.2596 22.7253C32.2596 17.1189 27.735 12.5943 22.1286 12.5943ZM22.1286 29.3097C18.503 29.3097 15.5442 26.351 15.5442 22.7253C15.5442 19.0997 18.503 16.1409 22.1286 16.1409C25.7542 16.1409 28.713 19.0997 28.713 22.7253C28.713 26.351 25.7542 29.3097 22.1286 29.3097ZM32.6745 9.81828C31.3656 9.81828 30.3085 10.8753 30.3085 12.1843C30.3085 13.4933 31.3656 14.5504 32.6745 14.5504C33.9835 14.5504 35.0406 13.4982 35.0406 12.1843C35.041 11.8735 34.98 11.5657 34.8613 11.2784C34.7425 10.9912 34.5682 10.7302 34.3484 10.5104C34.1287 10.2906 33.8677 10.1164 33.5804 9.99759C33.2932 9.87882 32.9854 9.81789 32.6745 9.81828ZM41.8769 22.7253C41.8769 19.9987 41.9016 17.2968 41.7485 14.5751C41.5954 11.4138 40.8742 8.60809 38.5625 6.29638C36.2458 3.97973 33.4451 3.26349 30.2838 3.11037C27.5572 2.95724 24.8552 2.98194 22.1335 2.98194C19.4069 2.98194 16.705 2.95724 13.9833 3.11037C10.822 3.26349 8.01629 3.98467 5.70458 6.29638C3.38793 8.61303 2.6717 11.4138 2.51857 14.5751C2.36544 17.3017 2.39014 20.0036 2.39014 22.7253C2.39014 25.447 2.36544 28.1539 2.51857 30.8756C2.6717 34.0369 3.39287 36.8426 5.70458 39.1543C8.02123 41.4709 10.822 42.1871 13.9833 42.3403C16.7099 42.4934 19.4118 42.4687 22.1335 42.4687C24.8602 42.4687 27.5621 42.4934 30.2838 42.3403C33.4451 42.1871 36.2508 41.466 38.5625 39.1543C40.8791 36.8376 41.5954 34.0369 41.7485 30.8756C41.9066 28.1539 41.8769 25.452 41.8769 22.7253ZM37.5301 34.3728C37.1695 35.2718 36.7348 35.9436 36.0384 36.6351C35.3419 37.3316 34.6751 37.7663 33.7761 38.1268C31.1778 39.1592 25.0083 38.927 22.1286 38.927C19.2488 38.927 13.0744 39.1592 10.4762 38.1318C9.57719 37.7712 8.90541 37.3365 8.21387 36.64C7.5174 35.9436 7.08272 35.2767 6.72213 34.3777C5.6947 31.7746 5.92686 25.6051 5.92686 22.7253C5.92686 19.8456 5.6947 13.6711 6.72213 11.0729C7.08272 10.1739 7.5174 9.50214 8.21387 8.81061C8.91035 8.11907 9.57719 7.67945 10.4762 7.31886C13.0744 6.29144 19.2488 6.5236 22.1286 6.5236C25.0083 6.5236 31.1828 6.29144 33.781 7.31886C34.68 7.67945 35.3518 8.11413 36.0433 8.81061C36.7398 9.50708 37.1745 10.1739 37.5351 11.0729C38.5625 13.6711 38.3303 19.8456 38.3303 22.7253C38.3303 25.6051 38.5625 31.7746 37.5301 34.3728Z"
                  fill="#5B4138"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4772 20.2579L37.5617 6.50195H34.6991L24.2017 18.4436L15.8236 6.50195H6.1582L18.8302 24.5616L6.1582 38.9851H9.02083L20.0992 26.3716L28.9489 38.9851H38.6143M10.054 8.61593H14.4518L34.6969 36.975H30.298"
                  fill="#5B4138"
                />
              </svg>
            </a>
          </div>
        </div>

        <nav className="flex gap-6 max-sm:flex-wrap">
          <div className="w-48 max-sm:w-full">
            <h3 className="text-[#271813] text-[22px] font-bold leading-7 mb-2">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/careers"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="w-48 max-sm:w-full">
            <h3 className="text-[#271813] text-[22px] font-bold leading-7 mb-2">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/help"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-48 max-sm:w-full">
            <h3 className="text-[#271813] text-[22px] font-bold leading-7 mb-2">
              Legal
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/terms"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Terms of Condition
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/privacy"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/security"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Security
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/guidelines"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Guidelines
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/community"
                  className="text-[#5B4138] text-sm font-medium leading-5 tracking-[0.1px] cursor-pointer"
                >
                  Community guidelines
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
