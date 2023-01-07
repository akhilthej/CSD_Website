import React from "react";
import './Clients.scss'
import {Archivitus ,serpsit , labelanuneni ,} from '../../data/data'


const clinetmain = () => {
  
    return(
      <main>
      {/* Brands Section Start */}
<section class="glass ">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-1">
        <div class="flex flex-wrap items-center justify-center ">
          <a
            href="https://archivitusdesigners.com/"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src= {Archivitus}
              class="h-10 w-full"
            />
          </a>
          <a
            href="https://serpsit.com/"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={serpsit}
              class="h-10 w-full"
            />
          </a>
          <a
            href="https://labelanuneni.com"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src={labelanuneni}
              class="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              alt="image"
              class="h-10 w-full"
            />
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