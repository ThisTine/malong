<script>
    /** @type {import('../../types/faq').FAQ} */
    export let faq;
  </script>
  
  <div class="py-5  flex flex-col items-start" >

    <details class="group w-full gap-10 " >
      <summary class="flex justify-between font-medium cursor-pointer list-none" >
        <span class="text-body2 font-bold">{faq.question}</span>
        <span class="transition group-open:rotate-180">
          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      
      <p class="text-body2 mt-3 group-open:animate-fadeIn" >
        {faq.answer}
      </p>
    </details>
    
  </div>
  <div class="my-1">
    <hr class="line" style="width: 100%;">
  </div>

  <style>
    .line{
        stroke-width: 1px;
stroke: rgba(0, 0, 0, 0.20);
    }
  </style>