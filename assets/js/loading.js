const loading = `
          <div class="loading__box">
                <div class="loding__icon">
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <h5 class="loading__content">Loading ...</h5>
            </div>
`;

const loadings = document.querySelector('#loading');

loadings.innerHTML = loading;

setTimeout(function () {
    document.querySelector('#loading').style.display = 'none';
}, 3000);
