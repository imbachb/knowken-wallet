import { tokenService } from '$lib/services/tokenService';
import { html } from 'gridjs';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const tokens = await tokenService.getTokens();
  const columns = [
    // {
    //   name: '',
    //   formatter: () =>
    //     html(`
    //     <div class="d-flex justify-content-center">
    //       <div class="col-md-6">
    //         <img src="/token-frame-plain.png" class="img-fluid" alt="Frame" />
    //       </div>
    //       <div class="col-md-6 custom-image custom-image-centered">
    //         <img
    //           src="/token-icon-sun.png"
    //           class="img-fluid"
    //           alt="Type"
    //         />
    //       </div>
    //     </div>`),
    // },
  ];
  return {
    tokens: tokens.map((tk) => {
      return {
        frame: html(`
      <div class="mt-2 container-fluid custom-image-container " style="pointer-interaction: none">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src="/token-frame-${tk.frame}.png" class="img-fluid" alt="Frame" />
          </div>
          <div class="col-md-6 custom-image custom-image-centered">
            <img
              src="${tk.icon ? '/token-icon-' + tk.icon : '/placeholder'}.png"
              class="img-fluid"
              alt="Type"
            />
          </div>
        </div>
      </div>`),
        name: tk.name,
        created: tk.creationDate.toLocaleDateString(),
        received: tk.receivedDate.toLocaleDateString(),
      };
    }),
  };
};

// <div class="mt-2 container-fluid custom-image-container " style="pointer-interaction: none">
// 		<div class="row d-flex justify-content-center">
// 			<div class="col-md-6 ">
// 				<img src="/build/images/TokenFrame_certificate.1c8850b3.png" class="img-fluid">
// 			</div>
// 			<div class="col-md-6 custom-image custom-image-centered">
// 								<img src="/build/images/TokenIcon_Design.61e6e085.png" class="img-fluid">
// 			</div>
// 		</div>
// 	</div>
