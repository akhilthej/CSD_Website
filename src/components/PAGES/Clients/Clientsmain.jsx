import React from "react";
import './Clients.scss'
import {Archivitus ,serpsit , labelanuneni ,ilahe ,laytonskincare,AlohaTechLogo } from '../../data/data'


const clinetmain = () => {
  
    return(
      <main>
      {/* Brands Section Start */}
<section class="glass">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-1">
        <div class="flex flex-wrap items-center justify-center ">
          <a href="https://archivitusdesigners.com/" title="Created on-2022-08-01 . Expires-2023-08-01 "
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src= {Archivitus}
              class="h-10 w-full" />
          </a>
          <a href="https://serpsit.com/" title="Created on-2022-10-01 . Expires-Jul 17, 2025"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={serpsit}
              class="h-10 w-full" />
          </a>
          <a href="https://labelanuneni.com" title="Created on-2022-08-01 . Expires-2023-08-01"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={labelanuneni}
              class="h-10 w-full" />
          </a>
          <a href="http://ilahe.in/" title="Created on-2022-08-01 . Expires-2023-08-01"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={ilahe}
              class="h-10 w-full" />
          </a>
          <a href="https://laytonskin.in/" title="Created on-2023-03-15 . Expires-2024-03-15"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={laytonskincare}
              class="h-10 w-full" />
          </a>
          <a href="https://alohatechnologies.ca" title="Created on-2023-03-15 . Expires-2024-03-15"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={AlohaTechLogo}
              class="h-10 w-full" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ====== Brands Section End */}
</main>

    )
    }
    export default clinetmain