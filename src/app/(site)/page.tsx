import Image from "next/image";

import {
  BuildingLibraryIcon,
  CubeIcon,
  DocumentIcon,
  PaintBrushIcon,
  UserGroupIcon,
  UserIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import Container from "~/core/ui/Container";
import SubHeading from "~/core/ui/SubHeading";
import Button from "~/core/ui/Button";
import Divider from "~/core/ui/Divider";
import Heading from "~/core/ui/Heading"; 
import PricingTable from "~/components/PricingTable";

import  DemoExample  from '~/components/DemoExample'; 


function Home() {
  return (

    
   
    <div className={"flex flex-col space-y-16"}>
      {/*   <Container> <div className="w-full "><div className="container mx-auto px-5"><div className="flex py-1.5 px-1 items-center border-b border-gray-50 dark:border-dark-800/50 justify-between"><div className="w-4/12"><a aria-label="Home Page" href="/"><svg width="105" className="w-[95px] sm:w-[105px]" viewBox="0 0 733 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119.081 138V73.209C119.081 67.551 117.08 62.79 113.078 58.926C109.214 55.062 104.453 53.13 98.7951 53.13C93.2751 53.13 88.4451 55.062 84.3051 58.926C80.3031 62.652 78.3021 67.344 78.3021 73.002V138H59.4651V73.002C59.4651 67.206 57.5331 62.514 53.6691 58.926C49.5291 55.062 44.6301 53.13 38.9721 53.13C33.4521 53.13 28.7601 55.062 24.8961 58.926C20.7561 63.066 18.6861 67.965 18.6861 73.623V138H0.0560548V36.984H18.6861V44.643C21.0321 41.745 24.0681 39.33 27.7941 37.398C31.6581 35.466 35.3841 34.5 38.9721 34.5C45.0441 34.5 50.5641 35.742 55.5321 38.226C60.6381 40.572 65.0541 43.884 68.7801 48.162C72.5061 43.884 76.9221 40.572 82.0281 38.226C87.1341 35.742 92.7231 34.5 98.7951 34.5C104.177 34.5 109.214 35.466 113.906 37.398C118.598 39.33 122.738 42.09 126.326 45.678C129.914 49.266 132.674 53.475 134.606 58.305C136.676 62.997 137.711 67.965 137.711 73.209V138H119.081ZM242.173 138V122.268C237.757 127.374 232.651 131.445 226.855 134.481C221.059 137.517 214.918 139.035 208.432 139.035C201.256 139.035 194.494 137.724 188.146 135.102C181.936 132.48 176.416 128.754 171.586 123.924C166.756 119.232 162.961 113.712 160.201 107.364C157.579 100.878 156.268 94.116 156.268 87.078C156.268 80.04 157.579 73.347 160.201 66.999C162.961 60.513 166.756 54.855 171.586 50.025C176.416 45.195 181.936 41.469 188.146 38.847C194.494 36.225 201.256 34.914 208.432 34.914C215.056 34.914 221.266 36.294 227.062 39.054C232.996 41.814 238.033 45.678 242.173 50.646V36.984H260.803V138H242.173ZM208.432 53.337C203.878 53.337 199.462 54.234 195.184 56.028C191.044 57.684 187.456 60.03 184.42 63.066C181.384 66.102 178.969 69.759 177.175 74.037C175.519 78.177 174.691 82.524 174.691 87.078C174.691 91.632 175.519 95.979 177.175 100.119C178.969 104.259 181.384 107.847 184.42 110.883C187.456 113.919 191.044 116.334 195.184 118.128C199.462 119.784 203.878 120.612 208.432 120.612C212.986 120.612 217.333 119.784 221.473 118.128C225.613 116.334 229.201 113.919 232.237 110.883C235.273 107.847 237.619 104.259 239.275 100.119C241.069 95.979 241.966 91.632 241.966 87.078C241.966 82.524 241.069 78.177 239.275 74.037C237.619 69.759 235.273 66.102 232.237 63.066C229.201 60.03 225.613 57.684 221.473 56.028C217.333 54.234 212.986 53.337 208.432 53.337ZM331.127 138L299.663 99.705V138H281.447V0.344996H299.663V59.754L327.815 33.258H354.932L305.873 78.798L355.139 138H331.127ZM379.299 94.116C379.299 97.428 380.472 100.878 382.818 104.466C385.302 108.054 388.131 111.09 391.305 113.574C397.101 118.128 403.863 120.405 411.591 120.405C423.873 120.405 433.878 114.471 441.606 102.603L457.338 111.918C451.956 120.612 445.332 127.305 437.466 131.997C429.6 136.689 420.975 139.035 411.591 139.035C404.553 139.035 397.86 137.724 391.512 135.102C385.164 132.342 379.575 128.547 374.745 123.717C369.915 118.887 366.12 113.298 363.36 106.95C360.738 100.602 359.427 93.909 359.427 86.871C359.427 79.833 360.738 73.14 363.36 66.792C366.12 60.306 369.915 54.648 374.745 49.818C379.437 44.988 384.957 41.262 391.305 38.64C397.791 36.018 404.553 34.707 411.591 34.707C418.629 34.707 425.322 36.018 431.67 38.64C438.156 41.262 443.745 44.988 448.437 49.818C458.649 60.306 463.755 72.45 463.755 86.25C463.755 88.734 463.548 91.356 463.134 94.116H379.299ZM411.591 51.681C405.933 51.681 400.62 52.923 395.652 55.407C390.684 57.891 386.682 61.203 383.646 65.343C380.748 69.345 379.299 73.623 379.299 78.177H443.883C443.883 73.623 442.365 69.345 439.329 65.343C436.431 61.203 432.498 57.891 427.53 55.407C422.562 52.923 417.249 51.681 411.591 51.681ZM528.543 54.372C525.231 52.854 522.264 52.095 519.642 52.095C514.122 52.095 509.568 54.027 505.98 57.891C502.116 62.031 500.184 66.792 500.184 72.174V138H482.382V72.174C482.382 64.722 484.245 57.891 487.971 51.681C491.835 45.471 497.079 40.641 503.703 37.191C508.671 34.845 513.984 33.672 519.642 33.672C524.196 33.672 528.543 34.5 532.683 36.156C536.823 37.812 541.17 40.503 545.724 44.229L528.543 54.372ZM610.092 138L578.628 99.705V138H560.412V0.344996H578.628V59.754L606.78 33.258H633.897L584.838 78.798L634.104 138H610.092ZM656.049 19.596C653.427 19.596 651.15 18.699 649.218 16.905C647.424 14.973 646.527 12.696 646.527 10.074C646.527 7.45199 647.424 5.24399 649.218 3.44999C651.15 1.51799 653.427 0.551993 656.049 0.551993C658.671 0.551993 660.879 1.51799 662.673 3.44999C664.605 5.24399 665.571 7.45199 665.571 10.074C665.571 12.696 664.605 14.973 662.673 16.905C660.879 18.699 658.671 19.596 656.049 19.596ZM647.562 138V34.5H664.95V138H647.562ZM717.4 53.13V138H699.805V53.13H684.28V34.5H699.805V0.344996H717.4V34.5H732.925V53.13H717.4Z" fill="url(#paint0_linear_1666_2)"></path><defs><linearGradient id="paint0_linear_1666_2" x1="1.12419" y1="78" x2="724.566" y2="63.6614" gradientUnits="userSpaceOnUse"><stop stop-color="hsl(263.4, 70%, 50.4%)"></stop></linearGradient></defs></svg></a></div><div className="w-4/12 hidden lg:flex justify-center"><div className="hidden items-center lg:flex"><ul className="w-full dark:text-gray-300 items-center flex-wrap flex"><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white flex lg:hidden"><a className="transition-transform duration-500" href="/auth/sign-in">Sign In</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/blog">Blog</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/docs">Docs</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/pricing">Pricing</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/faq">FAQ</a></li></ul></div><div className="ml-4 flex items-center lg:hidden"><button type="button" id="radix-:r5:" aria-haspopup="menu" aria-expanded="false" data-state="closed" aria-label="Open Menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-9"><path stroke-linecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div></div><div className="flex items-center space-x-4 w-4/12 justify-end"><div><button data-cy="dark-mode-toggle" aria-label="Toggle dark mode" className="font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none active:[&amp;>*]:translate-y-0.5 h-10 w-full space-x-2 justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center !rounded-full border-transparent transition-shadow !bg-transparent hover:shadow-xl dark:border-transparent dark:shadow-primary-500/50" type="button" role="combobox" aria-controls="radix-:r7:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" ><span className="flex w-full h-full items-center transition-transform duration-500 ease-out"><span className="flex w-full flex-1 items-center justify-center"><span hidden><span><span className="flex items-center space-x-2.5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4"><path stroke-linecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path></svg><span>Light</span></span></span></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4"><path stroke-linecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path></svg></span></span></button></div><div className="hidden space-x-2 lg:flex"><button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&amp;>*]:translate-y-0.5 hover:bg-accent/50 hover:text-accent-foreground text-sm h-10 [&amp;>*]:py-2 [&amp;>*]:px-4 rounded-full"><a className="flex w-full h-full items-center transition-transform duration-500 ease-out" href="/auth/sign-in"><span className="flex w-full flex-1 items-center justify-center"><span>Sign In</span></span></a></button><button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&amp;>*]:translate-y-0.5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-10 [&amp;>*]:py-2 [&amp;>*]:px-4 rounded-full"><a className="flex w-full h-full items-center transition-transform duration-500 ease-out" href="/auth/sign-up"><span className="flex w-full flex-1 items-center justify-center"><span className="flex items-center space-x-2"><span>Sign Up</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4"><path stroke-linecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></span></span></a></button></div><div className="flex lg:hidden"><div className="hidden items-center lg:flex"><ul className="w-full dark:text-gray-300 items-center flex-wrap flex"><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white flex lg:hidden"><a className="transition-transform duration-500" href="/auth/sign-in">Sign In</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/blog">Blog</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/docs">Docs</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/pricing">Pricing</a></li><li className="flex items-center justify-center font-medium lg:justify-start rounded-md text-sm transition colors transform active:*:translate-y-[2px] *:p-1 *:lg:px-2.5 *:w-full *:h-full *:flex *:items-center active:text-current text-gray-600 dark:text-gray-300
        hover:text-current dark:hover:text-white"><a className="transition-transform duration-500" href="/faq">FAQ</a></li></ul></div><div className="ml-4 flex items-center lg:hidden"><button type="button" id="radix-:r8:" aria-haspopup="menu" aria-expanded="false" data-state="closed" aria-label="Open Menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-9"><path stroke-linecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div></div></div></div></div></div>
       </Container>
    */}




      <Container>
        <div
          className={
            "my-12 flex flex-col items-center md:flex-row lg:my-16" +
            " mx-auto flex-1 justify-center animate-in fade-in " +
            " duration-1000 slide-in-from-top-12"
          }
        >
          <div className={"flex w-full flex-1 flex-col items-center space-y-8"}>
             <Pill>
            <span>RV Rent Pro</span>
</Pill>

            <HeroTitle>
              <span>A Complete RV Rental Management Solution
</span>
              <span
                className={
                  "bg-gradient-to-br bg-clip-text text-transparent" +
                  " from-primary-400 to-primary-700 leading-[1.2]"
                }
              >
                for your business
              </span>
            </HeroTitle>

            <SubHeading className={"text-center"}>
            <span>
            Manage bookings, optimize your operations, reduce costs, and boost customer

              </span>
              <span>
              satisfaction, all without giving your customer data to Outdoorsy!
              </span>
              <span>
              This all-in-one platform is designed <em><b>by</b></em> RV Rental Businesses <em><b>for</b></em> RV Rental Businesses.
              </span>
            </SubHeading>


            <div className={'flex flex-col items-center space-y-4'}>
               <div className={'flex flex-row items-center space-x-8'}>
            <MainCallToActionButton />
            <SecondaryCallToActionButton />  </div>
            <span className={'text-xs text-gray-500 dark:text-gray-400'}>
              Try it free. No credit card required.
            </span>
        
</div>
          </div>
        </div>

        <div
          className={
            "flex justify-center py-12 max-w-5xl mx-auto animate-in fade-in " +
            " duration-1000 slide-in-from-top-16 fill-mode-both delay-300"
          }
        >
          <Image
            priority
            className={
              "shadow-[0_0_1000px_0] rounded-2xl" +
              " shadow-primary/40 animate-in fade-in" +
              " zoom-in-50 delay-300 duration-1000 ease-out fill-mode-both"
            }
            width={2688}
            height={1824}
            src="https://i.imgur.com/wWLMEfS.png"
            alt={`RV Management Dashboard`}
          />
        </div>
      </Container>

      <Container style={{ marginTop: "0px !important" }}>


      <div className={"flex flex-col items-center space-y-8 text-center"}>
    

            <div className={"flex flex-col space-y-2.5"}>
              <Heading type={2}> RV Rent Pro is so much more than just a reservation system.</Heading>

              <SubHeading>
              It is truly an RV Rental Business Management System covering all aspects of your business; it is designed by the RV Rental Industry for the RV Rental Industry.
              <br/>
              Unlike Wheelbase, RV Rent Pro…
<br/>
…is not owned by your biggest competitor.
<br/>
…does not give your customer data to Outdoorsy for marketing purposes.
<br/>
…does not give your proprietary business data to Outdoorsy for their benefit.
<br/>
…provides the features and functions that serve your interests and help you succeed!
<br/>
…provides the lowest possible credit card processing fees (you pay 4% with Wheelbase)
<br/>
…enables full conversion tracking so you can see where your marketing dollars are working

              </SubHeading>
            </div>
          </div>
   
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 xl:gap-6 center-grid">
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp text-center">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Reservation Handling</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Core function to manage online reservations, widget/iframe integration with your website or choose one of our optimized website templates and configure for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp text-center">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Quickbooks / Xero integrations</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Integrates with QBO or Xero & automates 90% of your bookkeeping functions. Provides detailed invoicing, payment tracking, batch deposit reconciliation and even integrates with the Leaseback Module to record income, expenses and payments to Leaseback Owners.
                  </p>
                  <p>
                  Save hundreds of man-hours per year!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp text-center">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Fleet Maintenance</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  You no longer need to switch back-and-forth to separate fleet maintenance software or enter a rental unit into multiple databases; you&apos;ll have built-in maintenance templates that you can customize to suit your fleet needs. 
                  </p>
                  <p>
                  You’ll be notified when maintenance is due, and you can track Repair Requests and Work Orders all within an integrated system that knows when the next reservation is and helps you manage the Chaos of RV Rentals!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp text-center">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Return Process Management</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  An integrated App for your device, also accessed via the dashboard, that provides a thorough yet simple & customizable process for moving a rental unit from “just came back” to “ready for departure”.         </p>
                  <p>
                  No more failure to detect damage, no more wondering what&apos;s left
                  </p>
                </div>
              </div>
            </div>
       
          </div>


          <div className={"flex flex-col space-y-2.5 pill-mid"}>
              <Pill>
              Get started for free. No credit card required. Cancel anytime.
          </Pill>
          </div>



        
<div className="grid gap-2 xl:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24">
     {/*<!-- Authentication -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Leaseback</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Track income/expenses for each Leaseback Owner. Quickly & easily calculate and issue leaseback payments on a monthly, quarterly or manual basis.  </div>
        </div>
    </div>
     {/*<!-- Multi-Factor Auth -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Industry Expertise</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Yes, we&apos;ve actually packaged industry expertise so you can benefit from the processes, checklists, documents and best practices from industry experts across North America! RV Rent Pro includes customizable templates for Rental Agreements, Leaseback Agreements, Send-out and Return Checklists, Vehicle Maintenance Schedules and detailed written processes for all the challenging activities your business must accomplish!
            </div>
        </div>
    </div>
     {/*<!-- Payments -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Digital Documents</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Digitize all send-out and return documents & includes digital signatures. You can utilize documents from our extensive library and even customize them to suit your needs.
            </div>
        </div>
    </div>
     {/*<!-- Customer Portal -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Marketing Services</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Offers extensive website and SEO services, content creation, PPC management, and more, with options for customization based on your needs.
            </div>
        </div>
    </div>
     {/*<!-- Digital Documents -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Data Reporting & Management</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Provides detailed capabilities to search, sort, filter, and export a host of different data related to your vehicles, reservations, customers and owners, enhancing strategic decision-making for your business.
            </div>
        </div>
    </div>
     {/*<!-- Marketing -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Business Performance Analysis</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Shows your businesses key performance data at a glance and allows for comparison reporting of performance data by previous periods, aiding you in your business performance assessments and strategic planning.
            </div>
        </div>
    </div>
     {/*<!-- Data Reporting & Management -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Data Reporting & Management</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
                Provides capabilities to search, sort, filter, and export data related to vehicles, reservations, customers, and owners, enhancing strategic decision-making.
            </div>
        </div>
    </div>
     {/*<!-- Business Reporting -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Insurance</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Provides options to manage your vehicle insurance policies, including additions, edits, and removals; integrates with third-party insurance providers to streamline the rental insurance process.</div>
        </div>
    </div>
     {/*<!-- Insurance -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Messaging System</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Provides a robust internal messaging system that allows for communication within the platform, including follow-up reminders and user engagement tracking.
            </div>
        </div>
    </div>
    {/* {/*<!-- Leaseback Module -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Customization and Settings</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            Allows extensive customization of the software&apos;s features and settings, including user access levels, payment configurations, and visual aspects of the user interface.
            </div>
        </div>
    </div>
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Collaboration</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
            RV Rent Pro does not compete with you, quite the opposite, in fact. Our goal is to facilitate collaboration among RV Rental businesses across America and Canada, promoting strength together through the sharing of knowledge, best practices, industry trends, and collective purchasing of insurance and other products.
            </div>
        </div>
    </div>
   {/* <!-- Customization and Settings -->*/}
    <div className="p-2 shadow-primary-500/5 mini-shadow-600 shadow-md">
        <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">Customization and Settings</h3>
        <div className="py-2.5">
            <div className="flex flex-col space-y-3 text-base dark:text-gray-400">
                Allows extensive customization of the software&apos;s features and settings, including user access levels, payment configurations, and visual aspects of the user interface.
            </div>
        </div>
    </div>
</div>

</Container>


      <Container>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 items-center lg:justify-between lg:space-x-16 ">
            <div className="w-full flex-col space-y-8 flex lg:w-8/12">
              <div className="flex flex-col justify-center space-y-4 px-1.5">
                <div className="flex space-x-4 items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                  </div>
                  <span className="text-red-500 text-lg font-semibold">
                    Set up in minutes
                  </span>
                </div>
                
                <div>
                  <h3 className="text-4xl xl:text-5xl font-medium text-dark lg:!leading-[1.2em]">              
Reservation Management.
                    <span className="font-medium text-gray-500">
                    Our RV Management System includes all the essential tools and features you need to enhance your reservation processes.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-2">
              <div>
                <video
                  className="rounded-xl my-6"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="https://i.imgur.com/CSiHXrj.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Online Integration</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Seamlessly connect your website with our online booking options. 
                  </p>
                  <p>
                  Whether it&apos;s through a simple widget or a comprehensive iframe setup, we provide the flexibility to maintain your brand&apos;s look and feel.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Custom Configuration</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Tailor the reservation process to fit your business. 
                  </p>
                  <p>
                  Choose vehicle options, add-ons, and payment processing systems that suit your needs, ensuring a smooth and personalized booking experience for your customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Real-time Management</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Stay up-to-date with real-time updates on reservations, enabling quick responses and timely adjustments to your reservation schedule.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Enhanced Customer Experience</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Offer your customers an intuitive and streamlined booking process, reducing hassle and improving satisfaction. 
                  </p>
                  <p>
                  With our system, you can focus more on delivering exceptional service rather than managing bookings manually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>



      <Container>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 items-center lg:justify-between lg:space-x-16 flex-col-reverse lg:flex-row space-y-0 [&>:first-child]:mt-8 lg:[&>:first-child]:mt-0">
            <div className="w-full lg:w-8/12 px-2">
              <div>
                <video
                  className="rounded-xl my-6"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="https://i.imgur.com/3Ny3zYU.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="fw-full flex-col space-y-8 flex lg:w-8/12">
              <div className="w-full flex-col space-y-2">
                <div className="flex flex-col justify-center space-y-4 px-1.5">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/5">
                

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path></svg>
                
                    </div>
                    <span className="text-green-500 text-lg font-semibold">
                      Integrated In The Dashboard
                    </span>
                  </div>
                  <div>
                    <h3 className="text-4xl xl:text-5xl font-medium text-black lg:!leading-[1.2em]">                   
Fleet Management.
                      <span className="font-medium text-gray-500">
                        Track and manage your entire fleet in real-time with GPS
                        integration and status updates.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Customizable Maintenance Templates</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Access built-in maintenance templates that are fully customizable to match your fleet&apos;s specific requirements.                   </p>
                  <p>
                  Tailor maintenance schedules, checklists, and procedures directly within our system to ensure your fleet operates at peak efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Maintenance Alerts</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Stay ahead of maintenance needs with automated alerts. You&apos;&apos;ll receive notifications when maintenance is due, ensuring that no task goes unnoticed or delayed.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Work Order Management</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Efficiently track and manage Repair Requests and Work Orders within our system. 
                  </p>
                  <p>
                  Our integrated approach ensures that you are always aware of maintenance statuses, upcoming reservations, and available units.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Optimized for RV Rental Chaos</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Designed specifically to handle the challenges of RV rentals, our system helps you manage the chaos of fluctuating schedules, varying maintenance needs, and constant customer demands. 
                  </p>
                  <p>
                  Keep your fleet in top condition while ensuring smooth and uninterrupted service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>





      <Container>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 items-center lg:justify-between lg:space-x-16 ">
            <div className="w-full flex-col space-y-8 flex lg:w-8/12">
              <div className="flex flex-col justify-center space-y-4 px-1.5">
                <div className="flex space-x-4 items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 text-sky-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"></path></svg>
                  </div>
                  <span className="text-sky-500 text-lg font-semibold">
                    Get Organized Overnight
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl xl:text-5xl font-medium text-dark lg:!leading-[1.2em]">
                  Account Solutions.
                    <span className="font-medium text-gray-500">
                    This suite enhances financial management and compliance, directly integrated into the dashboard for efficiency and strategic insight.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-2">
              <div>
                <video
                  className="rounded-xl my-6"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="https://i.imgur.com/gHTLcwJ.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Detailed Financials</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Get comprehensive invoicing capabilities and efficient payment tracking. 
                  </p>
                  <p>
                  Our integration ensures all financial data is synchronized without manual data entry errors.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Batch Deposit Reconciliation</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Easily reconcile batch deposits, enhancing the accuracy and timeliness of your financial reports. 
                  </p>
                  <p>
                  Reduce the time spent on reconciling accounts and increase your operational efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Leaseback Module Integration</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Fully integrated with the Leaseback Module, our system records income, expenses, and payments related to Leaseback Owners.
                  </p>
                  <p>
                  Manage and streamline every aspect of your leaseback arrangements seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Significant Time Savings</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Save hundreds of man-hours annually with automation and integration features designed to streamline complex financial tasks and reporting requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 items-center lg:justify-between lg:space-x-16 flex-col-reverse lg:flex-row space-y-0 [&>:first-child]:mt-8 lg:[&>:first-child]:mt-0">
            <div className="w-full lg:w-8/12 px-2">
              <div>
                <video
                  className="rounded-xl my-6"
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="https://i.imgur.com/6cwZp5D.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="fw-full flex-col space-y-8 flex lg:w-8/12">
              <div className="w-full flex-col space-y-2">
                <div className="flex flex-col justify-center space-y-4 px-1.5">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/5">
                

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path></svg>
                
                    </div>
                    <span className="text-green-500 text-lg font-semibold">
                      Simplify Your Returns
                    </span>
                  </div>
                  <div>
                    <h3 className="text-4xl xl:text-5xl font-medium text-black lg:!leading-[1.2em]">                   
                    Return Process Management
                      <span className="font-medium text-gray-500">
                        Track and manage your entire fleet in real-time with GPS
                        integration and status updates.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Customizable Check-in Processes</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Customize the return process to fit your business needs.          </p>
                  <p>
                  Set up tailored checklists and procedures to ensure every rental unit is thoroughly inspected and prepared for the next customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Thorough Damage Detection</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Our system enhances your ability to detect any damage as soon as a unit returns. Eliminate the risk of missed issues with detailed, step-by-step inspection guides, ensuring that every potential problem is addressed promptly. </p>
                 
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Streamlined Preparation</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Automatically track and manage all necessary steps to get a rental unit back in service. 
                  </p>
                  <p>
                  From cleaning to maintenance checks, our app guides your staff through each task, leaving no room for error or confusion.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp">
              <h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white">
                <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    ></path>
                  </svg>
                </span>
                <span>Real-Time Updates</span>
              </h3>
              <div className="py-2.5">
                <div className="flex flex-col space-y-3 text-base text-gray-500">
                  <p>
                  Stay informed with real-time updates throughout the return process. </p>
                  <p>
                  Know exactly what&apos;s been completed and what&apos;s still pending at a glance, ensuring that nothing is overlooked. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>


      {/*<Container>
<div className="flex flex-col space-y-16">
        <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 items-center lg:justify-between lg:space-x-16 flex-col-reverse lg:flex-row space-y-0 [&amp;>:first-child]:mt-8 lg:[&amp;>:first-child]:mt-0">
          <div className="w-full lg:w-8/12 px-2">
            <div><video className="rounded-xl my-6" width="100%" height="auto" autoPlay loop muted><source src="https://rentpro.dev/assets/install-command.mp4" type="video/mp4" /></video>
            </div></div><div className="fw-full flex-col space-y-8 flex lg:w-8/12">
              <div className="w-full flex-col space-y-2">
                <div className="flex flex-col justify-center space-y-4 px-1.5"><div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 text-green-500"><path stroke-linecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></div><span className="text-green-500 text-lg font-semibold">Built-in Authentication Flows</span></div><div>
                    <h3 className="text-4xl xl:text-5xl font-medium text-black lg:!leading-[1.2em]">Authentication. 
                    <span className="font-medium text-gray-500">Authenticate users with any of the providers supported by Firebase or Supabase Auth.</span>
                    </h3></div></div></div></div></div><div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6"><div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp"><h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 text-brand-500"><path stroke-linecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"></path></svg></span><span>Email Authentication</span></h3><div className="py-2.5"><div className="flex flex-col space-y-3 text-base text-gray-500"><p>Allow your users to sign in using their email and password.</p><p>We augmented the Firebase implementation so to block users from accessing your app until they verify their email address.</p></div></div></div><div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp"><h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 text-brand-500"><path stroke-linecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg></span><span>Social Sign-in</span></h3><div className="py-2.5"><div className="flex flex-col space-y-3 text-base text-gray-500"><p>RVRentPro also supports social sign-in using all the providers supported by Firebase and Supabase.</p><p>These include Google, Facebook, Twitter, Github, and more.</p></div></div></div><div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp"><h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 text-brand-500"><path stroke-linecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg></span><span>Magic Links</span></h3><div className="py-2.5"><div className="flex flex-col space-y-3 text-base text-gray-500">RVRentPro supports email link authentication, allowing you to send your users a link to sign in to your app.</div></div></div><div className="flex-auto shadow-primary-600/5 john-shadow-600 shadow-lg p-4 xl:p-8 shadow-lg-imp"><h3 className="flex flex-col space-y-3 text-lg font-semibold xl:text-xl dark:text-white"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 text-brand-500"><path stroke-linecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"></path></svg></span><span>Password Reset</span></h3><div className="py-2.5"><div className="flex flex-col space-y-3 text-base text-gray-500"><p>Stop wasting time supporting users who lost their passwords, and let them self-recover their credentials using the pre-built password reset flow.</p></div></div></div></div></div>

                    </Container>*/}

      <Container>
        <div className={"flex flex-col space-y-4"}>
          <FeatureShowcaseContainer>
            <LeftFeatureContainer>
              <div className={"flex flex-col space-y-4"}>
                <Heading type={2}>Booking & Reservations</Heading>

                <SubHeading as={"h3"}>
                  Streamline the booking process in your own website with our embedde reservation
                  system
                </SubHeading>
              </div>

              <div>
                Enhance customer experience with seamless booking options and
                real-time availability updates.
              </div>

              <div>
                <Button round variant={"outline"} href={"/book/reservation"}>
                  <span className={"flex space-x-2 items-center"}>
                    <span>Get Started</span>
                    <ChevronRightIcon className={"h-3"} />
                  </span>
                </Button>
              </div>
            </LeftFeatureContainer>

            <RightFeatureContainer>
              <Image
                className="rounded-2xl"
                src="https://i.imgur.com/c0BYTgm.png"
                width={"626"}
                height={"683"}
                alt={"Reservation System"}
              />
            </RightFeatureContainer>
          </FeatureShowcaseContainer>
        </div>
      </Container>

      <Divider />



      <Container>
        <SubHeading ><span style={{textAlign: "center"}}>Plans comparison</span></SubHeading>
<DemoExample />
</Container>


<Container>
  <div className="flex flex-col items-center justify-center space-y-24 py-12">
    <div className="flex max-w-3xl flex-col items-center space-y-4 text-center">
      <div className="flex flex-col items-center space-y-2">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 text-sky-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            </svg>
          </div>
        </div>
        <b className="text-primary-500">Features</b>
      </div>
      <Heading>The Ultimate RV Rental Management Tool</Heading>
      <SubHeading>
        Explore Unparalleled Features Tailored for RV Rental Businesses
      </SubHeading>
    </div>
    <div>
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Reservation Management</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Comprehensive tools to manage bookings, schedules, and customer interactions seamlessly.
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Fleet Maintenance</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Keep your fleet in peak condition with automated maintenance schedules and tracking.
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Financial Management</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Integrate seamlessly with accounting software like QuickBooks for real-time financial tracking and reporting.
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Customer Relationship</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Enhance customer satisfaction with CRM tools that streamline communication and improve service delivery.
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Digital Documents</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Go paperless with digital document management, including rental agreements and customer signatures.
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <FeatureIcon>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 text-brand-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    ></path>
                  </svg>
          </FeatureIcon>
          <Heading type={3}>Marketing Tools</Heading>
          <div className="text-gray-500 dark:text-gray-400">
            Leverage built-in marketing tools to promote your services, reach wider audiences, and boost bookings.
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>

       {/* <Container>
        <div
          className={
            "flex flex-col items-center justify-center py-16 space-y-16"
          }
        >
          <div className={"flex flex-col items-center space-y-8 text-center"}>
            <Pill>
              Get started for free. No credit card required. Cancel anytime.
            </Pill>

            <div className={"flex flex-col space-y-2.5"}>
              <Heading type={2}>Elevate Your RV Rental Business</Heading>

              <SubHeading>
                Start with our free trial and discover how easy it is to enhance
                your operations.
              </SubHeading>
            </div>
          </div>

          <div className={"w-full"}>
            <PricingTable />
          </div>
        </div>
      </Container> */}
    </div>
  );
}
export default Home;

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        "text-center text-4xl text-gray-600 dark:text-white md:text-5xl" +
        " flex flex-col font-heading font-medium xl:text-7xl 2xl:text-[5.2rem]" +
        " LargeHero"
      }
    >
      {children}
    </h1>
  );
}

function FeatureIcon(props: React.PropsWithChildren) {
  return (
    <div className={"flex"}>
      <div
        className={
          "rounded-xl bg-primary/5 p-4 dark:bg-background border" +
          " border-primary/5 dark:border-dark-800" +
          " margin-center"
        }
      >
        {props.children}
      </div>
    </div>
  );
}

function Pill(props: React.PropsWithChildren) {
  return (
    <h2
      className={
        "inline-flex w-auto items-center space-x-2" +
        " rounded-full bg-gradient-to-br dark:from-gray-200 dark:via-gray-400" +
        " dark:to-gray-700 bg-clip-text px-4 py-2 text-center text-sm" +
        " font-normal text-gray-500 dark:text-transparent shadow" +
        " dark:shadow-dark-700"
      }
    >
      <span>{props.children}</span>
    </h2>
  );
}

function FeatureShowcaseContainer(props: React.PropsWithChildren) {
  return (
    <div
      className={
        "flex flex-col lg:flex-row items-center justify-between" +
        " lg:space-x-24"
      }
    >
      {props.children}
    </div>
  );
}

function LeftFeatureContainer(props: React.PropsWithChildren) {
  return (
    <div className={"flex flex-col space-y-8 w-full lg:w-6/12"}>
      {props.children}
    </div>
  );
}

function RightFeatureContainer(props: React.PropsWithChildren) {
  return <div className={"flex w-full lg:w-6/12"}>{props.children}</div>;
}

function MainCallToActionButton() {
  return (
    <Button
      className={
        "bg-transparent bg-gradient-to-r shadow-2xl" +
        " hover:shadow-primary/60 from-primary" +
        " to-primary-600 hover:to-indigo-600 text-white"
      }
      variant={"custom"}
      size={"lg"}
      round
      href={"/auth/sign-up"}
    >
      <span className={"flex items-center space-x-2"}>
        <span>Schedule A Demo</span>
        <ChevronRightIcon
          className={
            "h-4 animate-in fade-in slide-in-from-left-8" +
            " delay-1000 fill-mode-both duration-1000 zoom-in"
          }
        />
      </span>
    </Button>
  );
}


function SecondaryCallToActionButton() {
  return (
    <Button
      className={
        "bg-transparent bg-gradient-to-r shadow-2xl" +
        " hover:shadow-primary/60 from-primary" +
        " to-primary-600 hover:to-indigo-600 text-white"
      }
      variant={"custom"}
      size={"lg"}
      round
      href={"/auth/sign-up"}
    >
      <span className={"flex items-center space-x-2"}>
        <span>Learn More</span>
        <ChevronRightIcon
          className={
            "h-4 animate-in fade-in slide-in-from-left-8" +
            " delay-1000 fill-mode-both duration-1000 zoom-in"
          }
        />
      </span>
    </Button>
  );
}