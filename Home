<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope%3Awght%40400%3B500%3B700%3B800&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Stitch Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <!-- Navigation Bar Start -->
    <nav style="background:#222;padding:10px 0 10px 0;margin-bottom:20px;">
      <div style="display:flex;justify-content:center;gap:30px;">
        <a href="lang.html" style="color:#fff;text-decoration:none;font-weight:bold;">Language</a>
        <a href="home.html" style="color:#fff;text-decoration:none;font-weight:bold;">Home</a>
        <a href="calender.html" style="color:#fff;text-decoration:none;font-weight:bold;">Calendar</a>
        <a href="climate.html" style="color:#fff;text-decoration:none;font-weight:bold;">Climate</a>
        <a href="soil.html" style="color:#fff;text-decoration:none;font-weight:bold;">Soil</a>
        <a href="market.html" style="color:#fff;text-decoration:none;font-weight:bold;">Market</a>
        <a href="power.html" style="color:#fff;text-decoration:none;font-weight:bold;">Power</a>
      </div>
    </nav>
    <!-- Navigation Bar End -->
    <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Manrope, "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <!-- Backend API Example -->
        <div style="padding:20px;">
          <button id="apiBtn" style="padding:10px 20px;background:#333;color:#fff;border:none;border-radius:5px;cursor:pointer;">Test Backend API</button>
          <div id="apiResult" style="margin-top:10px;color:#222;"></div>
        </div>
        <script>
          document.getElementById('apiBtn').onclick = async function() {
            try {
              const res = await fetch('http://localhost:5000/', { method: 'GET' });
              const text = await res.text();
              document.getElementById('apiResult').innerText = text;
            } catch (e) {
              document.getElementById('apiResult').innerText = 'Error connecting to backend.';
            }
          };
        </script>
        <!-- ...existing code... -->
        <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Market News &amp; Offers</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">New</p>
                  <p class="text-[#131612] text-base font-bold leading-tight">Latest Market Trends</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Stay updated with the latest market trends and price fluctuations for various crops.</p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4RmM3jhRhZw_5I5GZS4ZSaETvktT-bqmZvz62OrGmH2WwApMRojlaHJK6i3me6iTD25ve7dbZ6E8Yeyxd-zzsm-XTBLocaKNEvWiCHcE-fCrzDtBm8f0RvbkVwdJRLgO5SQTIJ1XQQhJVgmuL9pv69ij15-JxZtQtn6y-GFZAC-JJHxM3SKGgcD3iDOLcDp5qmMqxJKigqUtCKOomGbxCYp3DcaDlVmDKaG_4Pn7MjgdSg4XOEL8bNlzYGGquaifh9b6TPLqlAoza");'
                ></div>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Offer</p>
                  <p class="text-[#131612] text-base font-bold leading-tight">Discount on Seeds</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Get 20% off on high-quality seeds for your next planting season. Limited time offer!</p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvMkl0lR05bF822zInRUugmNieLyadTluZVk7_C3GudcIWwoj-K38JJxxNnak0IhrV1qwflqEzF1MgYGO-wkJC9bmG3w1z8OvcPEruCMJHJ4xIumqWLAdLbdOdz076soE9PIkwEBScihJBnVlkPEQZuFSKNzXvxjk6BETFOj79_RnmQ9OoO-wHyFSul4xOTxHa0iLJgnobj9MCiyy0WBb72RX0e3kTrSUvEesSeTjBK1waA7m3s2WPfe6RoHt44pIiArqI33bFH8AX");'
                ></div>
              </div>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Crop Profitability</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#131612] text-base font-bold leading-tight">Most Profitable Crops</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Discover the most profitable crops to grow in your region based on current market demand.</p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhS4VOxwK99jsYW2Em0Ey9aLbcHayTFgZWgO7VtOG5OHvJdFBccec3bwIDZUzYCGu_kDiHvmiFLioqvDmBVmiiFe6JIu_6PLa-erWvYNQVTe14FB4qTzvMOBzVMqAVlRU7xIMiMuoiRDHmczp8GBvQH1p2O9tgkBFkds9KiYCj7-rsL-mOLQkMuh3PUoPhlJIYD_o6gbJ9dNbiQmdLux9nokg8XG5HMc1TuBtGMUBHN824sqiLWYYE8XxgGmYtpWB_NKbTYrlnMb1J");'
                ></div>
              </div>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shops &amp; Services</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#131612] text-base font-bold leading-tight">Local Suppliers</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Find trusted suppliers for seeds, fertilizers, and other essential farming supplies in your area.</p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3AuACCySshZ31IiPCceit_OeX_g0eb9QdR_2Kc4D7pn9Ox-aooY4v3OeF7mOcKUzwvfGpf7fgWT7xhxDPbywnU_SFxjzRwf0u3ZihwkeQh5405Ijx3SEubQtP6PzABetkJ_oeoTiTqCctXEQOK5LBvJK2dxB60rxtHXSDIM5JtbKj-DG2iyKmV4B9epLN0Xk5nf6BV0MjjuUiAW432QB4K9jt2AbwrG0OddkQYc339fvc6FM-WhTcVwHtLQt4y4z4DoHmRLZr_qkg");'
                ></div>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#131612] text-base font-bold leading-tight">Equipment Rentals</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">Rent farming equipment like tractors and harvesters at affordable rates from local providers.</p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGrzZt-3tqF4seN_8IZqRI8cQCt7hbOW9QsIc2Qa2rONUSIFcSB_WaaC4hUed7R5spiz6GyIGXdVLfYN2YNITkb4ywc51xvqIxTfIOlN40VEHQXuQbPQXw9zGUlfERGIux2ZCyv6-ty_2GYO7GNN1qyGCI_NEmZ26D522d4ejJcWFimIsf4t7eCrJYUN4pyuT970-RSjfwUnikl_4T_1sLc1Kl61E9N09IKtkWzw6TvqDeeTTgstbrrDHNmJgIjU348wbM881f97Su");'
                ></div>
              </div>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Regional Training</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#131612] text-base font-bold leading-tight">Upcoming Workshops</p>
                  <p class="text-[#6f816a] text-sm font-normal leading-normal">
                    Attend workshops on sustainable farming practices, crop management, and new agricultural technologies.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHE5chFX-Ves_ht5X_aGmEq2SGjjvJsLaRRg-iWXmJSxcE7gaAl0HoP44kYSdRfqN40ez608nP0oQYiqQXtKRGirhcFLNtc_iDwfCzVi_HAPQ-SkGSR8fCXVJQmL36m_KQxr5MwCSYPJLY8c4KPyB3XopnFkfRLDiPcsim_wClLmtCLjLgLC1u5EYDTlgyJBAvHFrkkCVpmX-86t669jzpy2M4xL3wKwxPVuJRrEXl8CM89ifU4S6qO8gPyWoyBz8ZiBgvyjsma--U");'
                ></div>
              </div>
            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#131612] text-4xl font-black leading-tight tracking-[-0.033em]">Welcome to Krishak</p>
                <p class="text-[#6f816a] text-base font-normal leading-normal">
                  Your all-in-one solution for smart farming. Explore our tools to make informed decisions about your crops and resources.
                </p>
              </div>
            </div>
            <div class="pb-3">
              <div class="flex border-b border-[#dfe3dd] px-4 gap-8">
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#131612] text-[#131612] pb-[13px] pt-4" href="#">
                  <p class="text-[#131612] text-sm font-bold leading-normal tracking-[0.015em]">Search</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6f816a] pb-[13px] pt-4" href="#">
                  <p class="text-[#6f816a] text-sm font-bold leading-normal tracking-[0.015em]">Voice Assistant</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6f816a] pb-[13px] pt-4" href="#">
                  <p class="text-[#6f816a] text-sm font-bold leading-normal tracking-[0.015em]">Crop Calendar</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6f816a] pb-[13px] pt-4" href="#">
                  <p class="text-[#6f816a] text-sm font-bold leading-normal tracking-[0.015em]">Climate</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6f816a] pb-[13px] pt-4" href="#">
                  <p class="text-[#6f816a] text-sm font-bold leading-normal tracking-[0.015em]">Soil</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6f816a] pb-[13px] pt-4" href="#">
                  <p class="text-[#6f816a] text-sm font-bold leading-normal tracking-[0.015em]">Market</p>
                </a>
              </div>
            </div>
            <div class="px-4 py-3">
              <label class="flex flex-col min-w-40 h-12 w-full">
                <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    class="text-[#6f816a] flex border-none bg-[#f2f4f1] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for crops, regions, or market trends"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131612] focus:outline-0 focus:ring-0 border-none bg-[#f2f4f1] focus:border-none h-full placeholder:text-[#6f816a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Crops</h2>
            <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div class="flex items-stretch p-4 gap-3">
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD94ZH7oyE6kLj_CBebcuUb7AznOuabSDnAcBimKc2xG8rTKwmuQzbs_aZ9UUnVNXSf70v66A54Hh7ATaBNFn9QRp5R8cHByPZQ7VZKpR68WVCMUhVMquzg3xZp1-pYU1kCb2AfxVUTqw-9R9jF73wOUKrI4JI66UTeE4S3Za5ySP0q9-O58btP2eFomHH6xkR7jQ_0T3omdJtfPYePzCDbFZmF6DENWJ0CaGpEFHR3WeENEAgmjB_ttRBpU7m-hptBlqu3JLzoGwsN");'
                  ></div>
                  <div>
                    <p class="text-[#131612] text-base font-medium leading-normal">Wheat</p>
                    <p class="text-[#6f816a] text-sm font-normal leading-normal">High yield potential in suitable climates</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2FLWPPY7w6eI2Q38mtgedtEuaqkRwSQDI5UYhiPDZFurDGiVsO3xq3Vo5ETx8CvR2UnnxPkiPjT1ayIrgeGDL3NKaOWi3fdrUjqz-lUYpHmI3a6dL44aINfdDPL7glZBkf2tPJm8BdHvlqyzF6RIcX70uaUbS5BoB_DuHMaBJBLanMDm5pV5BEDRogV3_sYtRiPdafunfxT0uuOv4WfEx9Z2MSXSik6kynIGdZI40anKGJS-T2HJMhC1NCT0PBymeZuFqx1fzIA-O");'
                  ></div>
                  <div>
                    <p class="text-[#131612] text-base font-medium leading-normal">Rice</p>
                    <p class="text-[#6f816a] text-sm font-normal leading-normal">Staple food crop with consistent demand</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqWFURKVxbPuQgm4SQRgbGFfYyQrVolCYace1HacY0pknipzb4yDVyQ9i9iLCCfmFwLKsEVGuBZZHI3qUordh0m4kavY-kPoXzpaNrVdBhfDC3N4GhEAdCwu_MsJAxOjQcHDW7pzzI03ObRaVJmUIip2mrh6MRkJh60B1iqCnS1AtYn3oD7oEo0cawYAi9klRVERbIB88l9c5cYCr0gHgPbLGyjauMs9NFGjm0K7FOktvsQnjIUy_dAf0C_LGmO-cIKTkZ98FU5ltp");'
                  ></div>
                  <div>
                    <p class="text-[#131612] text-base font-medium leading-normal">Cotton</p>
                    <p class="text-[#6f816a] text-sm font-normal leading-normal">Cash crop with significant market value</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGZLqvLTDgc-W2dzqyCNFvCdtfGJWMECamlhikRwoIP1sOGCfcwSFp30nlPLtBAJ-azMEy67TkGIQr1fkKmM8M6gSdta_8DsvcUKtZ_VPNjN8guspfRKDsp8RTcP-qGPvXXnC-jjJAb8rNTfjx7AH_YVtoVqYqd-G6FObsgiCw-kLnchrFoxQ0h9cM9MFj7hUmzGsQTrSg0aBbLIWMUwPMDzrUOR4qdLX9AMsezeFCdV_KIWXVteFlKM4THNKJDqxu1OapdSlDs00l");'
                  ></div>
                  <div>
                    <p class="text-[#131612] text-base font-medium leading-normal">Sugarcane</p>
                    <p class="text-[#6f816a] text-sm font-normal leading-normal">Important crop for sugar production</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Market Insights</h2>
            <div class="p-4 @container">
              <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG_Lrvuv4dV8sFceeY_gSHW74i_vpJurDC8vXC5kYUVfYsodiwBIw3OlkdLvJ_FsNbpFb-EOt05J_ubmyysgzrc-vAgwi6N_l61oMlwgaCI9b_Tztt2Q2EKEd4o5QGLo8HfxUCiQIDktVZYPhIgCx7KSJP6YX4-XnWpNEGObeBN46-ZW0M6SC0NCpo_2eX8u7o96kvh582HL9-sG04PrdR6bDAzqa5w_xALVG6AvsXAQw7OS9Yz_PN-R8-tMQ_68Ns3-pb3EDZCh8T");'
                ></div>
                <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p class="text-[#131612] text-lg font-bold leading-tight tracking-[-0.015em]">Market Trends for the Next Quarter</p>
                  <div class="flex items-end gap-3 justify-between">
                    <p class="text-[#6f816a] text-base font-normal leading-normal">
                      Get a detailed analysis of market trends, price forecasts, and demand patterns for various crops in the upcoming quarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-[#131612] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Resource Planning</h2>
            <div class="p-4 @container">
              <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDve9L9TYwxTbMW0vvlbiRj2ENsOzLfVCkjLBibHs33i5gAy_vV9NLcHkap2ijY3ryGwESqhW12I9dcoxnAZQpYSvZljJAQtNfDAEr7QjNxVFUgSC1L9v--jpSaGBhfDMNoFs-VhzlRKGTuOdb80k-7MIUod4BRijAM7PY_p47DsbcnH4wyZPx9LGRQGEh_BHZQpHQJ4maDEoPN-ajFRCdmHWqQvMdD6YqtpaJpwgfIRe0pIZXLmqustPTyE3789tBmGnHcL0TQE1yb");'
                ></div>
                <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p class="text-[#131612] text-lg font-bold leading-tight tracking-[-0.015em]">Optimize Your Resource Usage</p>
                  <div class="flex items-end gap-3 justify-between">
                    <p class="text-[#6f816a] text-base font-normal leading-normal">
                      Plan your resources efficiently, including water, fertilizers, and labor, to maximize productivity and minimize costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <body>
    <script>
      // Translation dictionary
      const translations = {
        en: {
          marketNews: "Market News & Offers",
          new: "New",
          latestMarket: "Latest Market Trends",
          latestMarketDesc: "Stay updated with the latest market trends and price fluctuations for various crops.",
          offer: "Offer",
          discountSeeds: "Discount on Seeds",
          discountSeedsDesc: "Get 20% off on high-quality seeds for your next planting season. Limited time offer!",
          cropProfit: "Crop Profitability",
          mostProfitable: "Most Profitable Crops",
          mostProfitableDesc: "Discover the most profitable crops to grow in your region based on current market demand.",
          shops: "Shops & Services",
          localSuppliers: "Local Suppliers",
          localSuppliersDesc: "Find trusted suppliers for seeds, fertilizers, and other essential farming supplies in your area.",
          equipmentRentals: "Equipment Rentals",
          equipmentRentalsDesc: "Rent farming equipment like tractors and harvesters at affordable rates from local providers.",
          regionalTraining: "Regional Training",
          upcomingWorkshops: "Upcoming Workshops",
          upcomingWorkshopsDesc: "Attend workshops on sustainable farming practices, crop management, and new agricultural technologies.",
          welcome: "Welcome to Krishak",
          welcomeDesc: "Your all-in-one solution for smart farming. Explore our tools to make informed decisions about your crops and resources.",
          search: "Search",
          voiceAssistant: "Voice Assistant",
          cropCalendar: "Crop Calendar",
          climate: "Climate",
          soil: "Soil",
          market: "Market",
          searchPlaceholder: "Search for crops, regions, or market trends",
          featuredCrops: "Featured Crops",
          wheat: "Wheat",
          wheatDesc: "High yield potential in suitable climates",
          rice: "Rice",
          riceDesc: "Staple food crop with consistent demand",
          cotton: "Cotton",
          cottonDesc: "Cash crop with significant market value",
          sugarcane: "Sugarcane",
          sugarcaneDesc: "Important crop for sugar production",
          marketInsights: "Market Insights",
          marketTrends: "Market Trends for the Next Quarter",
          marketTrendsDesc: "Get a detailed analysis of market trends, price forecasts, and demand patterns for various crops in the upcoming quarter.",
          resourcePlanning: "Resource Planning",
          optimizeResource: "Optimize Your Resource Usage",
          optimizeResourceDesc: "Plan your resources efficiently, including water, fertilizers, and labor, to maximize productivity and minimize costs."
        },
        te: {
          marketNews: "మార్కెట్ వార్తలు & ఆఫర్లు",
          new: "కొత్తది",
          latestMarket: "తాజా మార్కెట్ ధోరణులు",
          latestMarketDesc: "వివిధ పంటలకు తాజా మార్కెట్ ధోరణులు మరియు ధరల మార్పులను తెలుసుకోండి.",
          offer: "ఆఫర్",
          discountSeeds: "విత్తనాలపై డిస్కౌంట్",
          discountSeedsDesc: "మీ తదుపరి విత్తన కాలానికి అధిక నాణ్యత గల విత్తనాలపై 20% తగ్గింపు. పరిమిత కాలం ఆఫర్!",
          cropProfit: "పంట లాభదాయకత",
          mostProfitable: "అత్యంత లాభదాయకమైన పంటలు",
          mostProfitableDesc: "ప్రస్తుత మార్కెట్ డిమాండ్ ఆధారంగా మీ ప్రాంతంలో పెంచడానికి అత్యంత లాభదాయకమైన పంటలను కనుగొనండి.",
          shops: "అంగడులు & సేవలు",
          localSuppliers: "స్థానిక సరఫరాదారులు",
          localSuppliersDesc: "మీ ప్రాంతంలో విత్తనాలు, ఎరువులు మరియు ఇతర వ్యవసాయ సరఫరా కోసం నమ్మదగిన సరఫరాదారులను కనుగొనండి.",
          equipmentRentals: "పరికరాల అద్దె",
          equipmentRentalsDesc: "ట్రాక్టర్లు మరియు హార్వెస్టర్ల వంటి వ్యవసాయ పరికరాలను స్థానిక ప్రొవైడర్ల నుండి అద్దెకు పొందండి.",
          regionalTraining: "ప్రాంతీయ శిక్షణ",
          upcomingWorkshops: "రాబోయే వర్క్‌షాప్‌లు",
          upcomingWorkshopsDesc: "సుస్థిర వ్యవసాయ పద్ధతులు, పంట నిర్వహణ మరియు కొత్త వ్యవసాయ సాంకేతికతలపై వర్క్‌షాప్‌లలో పాల్గొనండి.",
          welcome: "కృషక్‌కు స్వాగతం",
          welcomeDesc: "స్మార్ట్ వ్యవసాయానికి మీ ఆల్-ఇన్-వన్ సొల్యూషన్. మీ పంటలు మరియు వనరుల గురించి తెలివైన నిర్ణయాలు తీసుకోవడానికి మా టూల్స్‌ను అన్వేషించండి.",
          search: "వెతకండి",
          voiceAssistant: "వాయిస్ అసిస్టెంట్",
          cropCalendar: "పంట క్యాలెండర్",
          climate: "వాతావరణం",
          soil: "నేల",
          market: "మార్కెట్",
          searchPlaceholder: "పంటలు, ప్రాంతాలు లేదా మార్కెట్ ధోరణుల కోసం వెతకండి",
          featuredCrops: "ప్రధాన పంటలు",
          wheat: "గోధుమలు",
          wheatDesc: "అనుకూల వాతావరణంలో అధిక దిగుబడి",
          rice: "బియ్యం",
          riceDesc: "స్థిరమైన డిమాండ్‌తో ప్రధాన ఆహార పంట",
          cotton: "పత్తి",
          cottonDesc: "ముఖ్యమైన మార్కెట్ విలువతో క్యాష్ క్రాప్",
          sugarcane: "చెరకు",
          sugarcaneDesc: "చెక్కెర ఉత్పత్తికి ముఖ్యమైన పంట",
          marketInsights: "మార్కెట్ విశ్లేషణలు",
          marketTrends: "తదుపరి త్రైమాసికానికి మార్కెట్ ధోరణులు",
          marketTrendsDesc: "వివిధ పంటలకు మార్కెట్ ధోరణులు, ధరల అంచనాలు మరియు డిమాండ్ నమూనాలపై వివరమైన విశ్లేషణను పొందండి.",
          resourcePlanning: "వనరుల ప్రణాళిక",
          optimizeResource: "మీ వనరుల వినియోగాన్ని ఆప్టిమైజ్ చేయండి",
          optimizeResourceDesc: "నీరు, ఎరువులు మరియు కార్మికులను సహా మీ వనరులను సమర్థవంతంగా ప్రణాళిక చేయండి, ఉత్పాదకతను పెంచండి మరియు ఖర్చులను తగ్గించండి."
        }
        // Add more languages here...
      };

      // Get lang from URL (?lang=te, ?lang=en, etc.)
      function getLang() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang') || 'en';
      }

      function t(key) {
        const lang = getLang();
        return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
      }

      window.addEventListener('DOMContentLoaded', () => {
        // Headings
        document.querySelectorAll('h2')[0].textContent = t('marketNews');
        document.querySelectorAll('h2')[1].textContent = t('cropProfit');
        document.querySelectorAll('h2')[2].textContent = t('shops');
        document.querySelectorAll('h2')[3].textContent = t('regionalTraining');
        document.querySelectorAll('h2')[4].textContent = t('featuredCrops');
        document.querySelectorAll('h2')[5].textContent = t('marketInsights');
        document.querySelectorAll('h2')[6].textContent = t('resourcePlanning');

        // Market News & Offers
        let p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[0].querySelectorAll('p');
        p[0].textContent = t('new');
        p[1].textContent = t('latestMarket');
        p[2].textContent = t('latestMarketDesc');
        p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[1].querySelectorAll('p');
        p[0].textContent = t('offer');
        p[1].textContent = t('discountSeeds');
        p[2].textContent = t('discountSeedsDesc');

        // Crop Profitability
        p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[2].querySelectorAll('p');
        p[0].textContent = t('mostProfitable');
        p[1].textContent = t('mostProfitableDesc');

        // Shops & Services
        p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[3].querySelectorAll('p');
        p[0].textContent = t('localSuppliers');
        p[1].textContent = t('localSuppliersDesc');
        p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[4].querySelectorAll('p');
        p[0].textContent = t('equipmentRentals');
        p[1].textContent = t('equipmentRentalsDesc');

        // Regional Training
        p = document.querySelectorAll('.layout-content-container.flex.flex-col.w-80 .p-4')[5].querySelectorAll('p');
        p[0].textContent = t('upcomingWorkshops');
        p[1].textContent = t('upcomingWorkshopsDesc');

        // Welcome section
        let welcome = document.querySelectorAll('.layout-content-container.flex.flex-col.max-w-\[960px\].flex-1 .text-4xl');
        if (welcome.length) welcome[0].textContent = t('welcome');
        let welcomeDesc = document.querySelectorAll('.layout-content-container.flex.flex-col.max-w-\[960px\].flex-1 p.text-base');
        if (welcomeDesc.length) welcomeDesc[0].textContent = t('welcomeDesc');

        // Navigation
        let nav = document.querySelectorAll('.flex.border-b.border-\[#dfe3dd\].px-4.gap-8 a');
        nav[0].querySelector('p').textContent = t('search');
        nav[1].querySelector('p').textContent = t('voiceAssistant');
        nav[2].querySelector('p').textContent = t('cropCalendar');
        nav[3].querySelector('p').textContent = t('climate');
        nav[4].querySelector('p').textContent = t('soil');
        nav[5].querySelector('p').textContent = t('market');

        // Search placeholder
        let searchInput = document.querySelector('input[placeholder]');
        if (searchInput) searchInput.placeholder = t('searchPlaceholder');

        // Featured Crops
        let crops = document.querySelectorAll('.flex.items-stretch.p-4.gap-3 > div');
        if (crops.length >= 4) {
          crops[0].querySelectorAll('p')[0].textContent = t('wheat');
          crops[0].querySelectorAll('p')[1].textContent = t('wheatDesc');
          crops[1].querySelectorAll('p')[0].textContent = t('rice');
          crops[1].querySelectorAll('p')[1].textContent = t('riceDesc');
          crops[2].querySelectorAll('p')[0].textContent = t('cotton');
          crops[2].querySelectorAll('p')[1].textContent = t('cottonDesc');
          crops[3].querySelectorAll('p')[0].textContent = t('sugarcane');
          crops[3].querySelectorAll('p')[1].textContent = t('sugarcaneDesc');
        }

        // Market Insights
        let marketTrends = document.querySelectorAll('.p-4.@container .flex.flex-col.items-stretch.justify-start.rounded-xl');
        if (marketTrends.length) {
          let mt = marketTrends[0].querySelectorAll('p');
          mt[0].textContent = t('marketTrends');
          mt[1].textContent = t('marketTrendsDesc');
        }

        // Resource Planning
        let resource = document.querySelectorAll('.p-4.@container .flex.flex-col.items-stretch.justify-start.rounded-xl');
        if (resource.length > 1) {
          let rp = resource[1].querySelectorAll('p');
          rp[0].textContent = t('optimizeResource');
          rp[1].textContent = t('optimizeResourceDesc');
        }
      });
    </script>
